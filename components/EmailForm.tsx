"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

interface EmailFormProps {
  size?: "default" | "large";
  placeholder?: string;
  buttonText?: string;
  dark?: boolean;
}

export default function EmailForm({
  size = "default",
  placeholder = "Enter your email",
  buttonText = "Notify Me",
  dark = false,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 py-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className={`font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
            You&apos;re on the list!
          </p>
          <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            We&apos;ll email you the moment Pactly goes live.
          </p>
        </div>
      </div>
    );
  }

  const isLarge = size === "large";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex gap-2 ${isLarge ? "flex-col sm:flex-row" : "flex-row"}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`
            flex-1 rounded-xl border font-medium outline-none transition-all
            focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
            ${isLarge ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"}
            ${
              dark
                ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
            }
          `}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`
            flex items-center justify-center gap-2 rounded-xl font-semibold transition-all
            bg-brand-500 text-white hover:bg-brand-600 active:scale-[0.97]
            disabled:opacity-60 disabled:cursor-not-allowed
            ${isLarge ? "px-7 py-4 text-base whitespace-nowrap" : "px-5 py-3 text-sm whitespace-nowrap"}
          `}
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}
