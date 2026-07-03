"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface QuizData {
  name: string;
  score: number;
  answers: { step: number; question: string; answer: string }[];
  profile: string;
  goal: string;
}

const INSIGHTS: Record<number, string> = {
  1: "Checking your phone first thing hijacks your brain before you've even started. Your most focused hours get spent on other people's content.",
  2: "Starting without a plan is the #1 reason days feel wasted. Without direction, you default to whatever feels easiest — usually your phone.",
  3: "Even having your phone visible reduces focus by up to 20%. Out of sight, out of mind isn't just advice — it's neuroscience.",
  4: "Without time blocks, everything feels urgent and nothing gets done. Structure is what separates intention from action.",
  5: "Most to-do lists fail because they have no due times — just wishes. A task without a deadline is a suggestion.",
  6: "What gets measured gets managed. Most people underestimate their screen time by 50%. Awareness is the first step.",
  7: "'Today' is not a deadline. Tasks without specific times float to the end of the day and quietly disappear.",
  8: "If completing tasks doesn't feel rewarding, your brain won't prioritize them over instant dopamine from scrolling. The payoff has to be real.",
  9: "Feeling out of control isn't a character flaw — it's what happens when your environment isn't set up for your intentions.",
  10: "Earning screen time instead of just consuming it is the single habit shift that changes everything. Tasks first, then reward.",
};

function getScoreTier(score: number) {
  if (score <= 30) return {
    label: "Screen time is running you",
    color: "text-red-500",
    ring: "stroke-red-400",
    bg: "bg-red-50",
    message: "You're aware enough to take this quiz — that matters. Pactly is built exactly for where you are right now. The system does the heavy lifting so you don't have to rely on willpower.",
  };
  if (score <= 60) return {
    label: "Aware, but not fully in control",
    color: "text-amber-500",
    ring: "stroke-amber-400",
    bg: "bg-amber-50",
    message: "You have good instincts but inconsistent follow-through — which is exactly the gap Pactly closes. The right reminders and a real reward make all the difference.",
  };
  if (score <= 80) return {
    label: "Close — just need the right system",
    color: "text-brand-500",
    ring: "stroke-brand-500",
    bg: "bg-brand-50",
    message: "You already have strong habits. Pactly will lock them in, fill the gaps, and give you a reward system that makes consistency feel effortless.",
  };
  return {
    label: "Highly self-aware and disciplined",
    color: "text-green-500",
    ring: "stroke-green-500",
    bg: "bg-green-50",
    message: "Impressive. Pactly will amplify what you're already doing — adding structure, automation, and accountability to take your productivity to the next level.",
  };
}

export default function QuizResults() {
  const router = useRouter();
  const [data, setData] = useState<QuizData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("pactly_quiz");
    if (!raw) { router.replace("/quiz"); return; }
    setData(JSON.parse(raw));
  }, [router]);

  if (!data) return null;

  const tier = getScoreTier(data.score);

  // Find the 3 weakest areas (questions answered "no")
  const insights = data.answers
    .filter((a) => a.step >= 1 && a.step <= 10 && a.answer === "no")
    .slice(0, 3)
    .map((a) => INSIGHTS[a.step])
    .filter(Boolean);

  // Fill to 3 if needed
  while (insights.length < 3) {
    const fallbacks = Object.values(INSIGHTS).filter((i) => !insights.includes(i));
    insights.push(fallbacks[insights.length] ?? "");
  }

  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (data.score / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-5 sm:px-8 py-4 flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="Pactly" className="w-7 h-7 rounded-lg" />
          <span className="font-bold text-gray-900">Pactly</span>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
        {/* Score reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 mb-6 text-center"
        >
          <p className="text-gray-500 mb-2">
            {data.name ? `${data.name}, here's` : "Here's"} your productivity score
          </p>

          {/* Score circle */}
          <div className="relative inline-flex items-center justify-center mb-4">
            <svg width="140" height="140" className="-rotate-90">
              <circle cx="70" cy="70" r="54" fill="none" stroke="#f3f4f6" strokeWidth="10" />
              <motion.circle
                cx="70"
                cy="70"
                r="54"
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                className={tier.ring}
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <motion.span
                className="text-4xl font-black text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {data.score}
              </motion.span>
              <span className="text-sm text-gray-400 font-medium">/ 100</span>
            </div>
          </div>

          <p className={`text-xl font-bold mb-3 ${tier.color}`}>{tier.label}</p>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">{tier.message}</p>
        </motion.div>

        {/* 3 Personalized Insights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your 3 key insights</h2>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-card p-5 flex gap-4"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-gradient-to-br from-brand-900 via-brand-800 to-[#0f0e1e] rounded-2xl p-8 text-center"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-white font-bold text-lg">You&apos;re on the list!</p>
              <p className="text-brand-300 text-sm">We&apos;ll email you the moment Pactly goes live.</p>
            </div>
          ) : (
            <>
              <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">
                What&apos;s next
              </p>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Pactly is built to fix exactly this.
              </h3>
              <p className="text-brand-200 text-sm mb-6 leading-relaxed">
                The app is currently under App Store review. Join the waitlist and be the first to know when it launches.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={waitlistEmail || data.name}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-brand-300 font-medium transition-all"
                />
                <button
                  onClick={async () => {
                    const emailToUse = waitlistEmail || "";
                    if (!emailToUse.includes("@")) return;
                    await fetch("/api/waitlist", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: emailToUse, name: data.name }),
                    });
                    setSubmitted(true);
                  }}
                  className="flex items-center gap-1.5 bg-accent hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl transition-all whitespace-nowrap"
                >
                  Notify Me <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </motion.div>

        <p className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-brand-500 transition-colors">
            ← Back to Pactly
          </Link>
        </p>
      </div>
    </div>
  );
}
