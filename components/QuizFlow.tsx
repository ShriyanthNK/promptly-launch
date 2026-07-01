"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface BestPracticeQ {
  type: "yesno";
  step: number;
  question: string;
  insight: string;
}

interface ChoiceQ {
  type: "choice";
  step: number;
  question: string;
  options: string[];
  field: string;
}

interface TextQ {
  type: "text";
  step: number;
  question: string;
  placeholder: string;
}

type Question = BestPracticeQ | ChoiceQ | TextQ;

const QUESTIONS: Question[] = [
  {
    type: "yesno",
    step: 1,
    question: "Do you avoid checking your phone in the first 30 minutes of your day?",
    insight: "Checking your phone first thing hijacks your brain before you've even started. Your most focused hours get spent on other people's agendas.",
  },
  {
    type: "yesno",
    step: 2,
    question: "Do you plan your tasks before starting your day?",
    insight: "Starting without a plan is the #1 reason days feel wasted. Without direction, you default to whatever feels easiest — which is usually your phone.",
  },
  {
    type: "yesno",
    step: 3,
    question: "Do you keep your phone away while studying or working?",
    insight: "Even having your phone visible reduces focus by up to 20%. Out of sight, out of mind isn't just advice — it's science.",
  },
  {
    type: "yesno",
    step: 4,
    question: "Do you have dedicated time blocks for focused work each day?",
    insight: "Without time blocks, everything feels urgent and nothing gets done. Structure is what separates intention from action.",
  },
  {
    type: "yesno",
    step: 5,
    question: "Do you complete most of what's on your to-do list most days?",
    insight: "Most to-do lists fail because they have no due times — just wishes. A task without a deadline is a suggestion.",
  },
  {
    type: "yesno",
    step: 6,
    question: "Do you know how much time you spent on social media yesterday?",
    insight: "What gets measured gets managed. Most people underestimate their screen time by 50% — the first step to change is awareness.",
  },
  {
    type: "yesno",
    step: 7,
    question: "Do you set specific due times for tasks — not just 'today'?",
    insight: "'Today' is not a deadline. Tasks without specific times float to the end of the day and disappear.",
  },
  {
    type: "yesno",
    step: 8,
    question: "Do you feel a real sense of reward after completing tasks?",
    insight: "If completing tasks doesn't feel rewarding, your brain won't prioritize them over instant dopamine from scrolling. The payoff has to be real.",
  },
  {
    type: "yesno",
    step: 9,
    question: "Do you feel in control of how you spend your time each day?",
    insight: "Feeling out of control isn't a character flaw — it's what happens when your environment isn't set up to support your intentions.",
  },
  {
    type: "yesno",
    step: 10,
    question: "Do you finish your responsibilities before allowing yourself leisure screen time?",
    insight: "Earning screen time instead of just using it is the single habit that changes everything. Your brain learns: tasks first, then reward.",
  },
  {
    type: "choice",
    step: 11,
    question: "How would you best describe yourself?",
    options: ["Student or recent grad", "Working professional", "Parent managing a family", "Other"],
    field: "profile",
  },
  {
    type: "choice",
    step: 12,
    question: "What's the #1 thing you want to achieve in the next 90 days?",
    options: [
      "Focus more and procrastinate less",
      "Reduce mindless phone use",
      "Build consistent daily habits",
      "Get more done in less time",
    ],
    field: "goal",
  },
  {
    type: "choice",
    step: 13,
    question: "What's stopped you from being more productive in the past?",
    options: [
      "Lack of structure or routine",
      "Too many distractions",
      "I know what to do but just don't do it",
      "Haven't found the right tool",
    ],
    field: "obstacle",
  },
  {
    type: "choice",
    step: 14,
    question: "What kind of solution appeals to you most?",
    options: [
      "A simple app I manage myself",
      "Reminders and accountability built in",
      "Family or shared mode with others",
      "Analytics to track my patterns",
    ],
    field: "solution",
  },
  {
    type: "text",
    step: 15,
    question: "Is there anything else we should know?",
    placeholder: "Optional — share anything that might help us build a better product for you.",
  },
];

const TOTAL_STEPS = 16; // 0 (contact) + 15 questions

function scoreAnswers(answers: Record<number, string>): number {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    if (answers[i] === "yes") score += 10;
  }
  return score;
}

export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactError, setContactError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("promptly_email");
    if (saved) setEmail(saved);
  }, []);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setEmail(val);
    localStorage.setItem("promptly_email", val);
  }

  const currentQ = step === 0 ? null : QUESTIONS[step - 1];
  const progress = Math.round((step / TOTAL_STEPS) * 100);

  function goNext() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  }

  function handleContactSubmit() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setContactError("Please enter a valid email."); return; }
    setContactError("");
    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => {});
    goNext();
  }

  function handleYesNo(answer: "yes" | "no") {
    setAnswers((a) => ({ ...a, [step]: answer }));
    setTimeout(goNext, 300);
  }

  function handleChoice(option: string) {
    setAnswers((a) => ({ ...a, [step]: option }));
    setTimeout(goNext, 300);
  }

  async function handleSubmit() {
    setSubmitting(true);
    const score = scoreAnswers(answers);

    const quizData = {
      name,
      email,
      score,
      answers: Object.entries(answers).map(([stepNum, answer]) => ({
        step: Number(stepNum),
        question: QUESTIONS[Number(stepNum) - 1]?.question ?? "",
        answer,
      })),
      profile: answers[11] ?? "",
      goal: answers[12] ?? "",
      obstacle: answers[13] ?? "",
      solution: answers[14] ?? "",
      note: answers[15] ?? "",
    };

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });
    } catch {}

    if (typeof window !== "undefined") {
      localStorage.setItem("promptly_quiz", JSON.stringify({ ...quizData, completedAt: new Date().toISOString() }));
    }

    router.push("/results");
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div
          className="h-full bg-brand-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="Promptly" className="w-7 h-7 rounded-lg" />
          <span className="font-bold text-gray-900">Promptly</span>
        </div>
        <span className="text-sm text-gray-400 font-medium">
          {step === 0 ? "Getting started" : `${step} of ${TOTAL_STEPS - 1}`}
        </span>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8 py-12">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Step 0: Contact */}
              {step === 0 && (
                <div>
                  <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
                    Free assessment
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Find out why you can&apos;t stop scrolling — and what to do about it.
                  </h1>
                  <p className="text-gray-500 mb-8">
                    Answer 10 quick questions and get a personalized score with specific insights for your habits.
                  </p>
                  <div className="space-y-3 mb-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={handleEmailChange}
                      onKeyDown={(e) => e.key === "Enter" && handleContactSubmit()}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 font-medium outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
                    />
                    {contactError && <p className="text-red-500 text-sm">{contactError}</p>}
                  </div>
                  <button
                    onClick={handleContactSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Start the assessment <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Takes 2 minutes · Free · Instant results · No spam
                  </p>
                </div>
              )}

              {/* Yes/No questions */}
              {currentQ?.type === "yesno" && (
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-6">
                    Question {step} of 10
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-snug">
                    {currentQ.question}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {(["Yes", "No"] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleYesNo(opt.toLowerCase() as "yes" | "no")}
                        className={`
                          py-5 rounded-2xl font-bold text-lg border-2 transition-all active:scale-[0.97]
                          ${answers[step] === opt.toLowerCase()
                            ? opt === "Yes"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-red-400 bg-red-50 text-red-600"
                            : "border-gray-200 hover:border-brand-300 hover:bg-brand-50 text-gray-700"
                          }
                        `}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Multiple choice questions */}
              {currentQ?.type === "choice" && (
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-6">
                    Almost done
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    {currentQ.question}
                  </h2>
                  <div className="space-y-3">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChoice(opt)}
                        className={`
                          w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all active:scale-[0.98]
                          ${answers[step] === opt
                            ? "border-brand-500 bg-brand-50 text-brand-700"
                            : "border-gray-200 hover:border-brand-300 hover:bg-brand-50/50 text-gray-700"
                          }
                        `}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Text question */}
              {currentQ?.type === "text" && (
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-6">
                    Last question
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    {currentQ.question}
                  </h2>
                  <textarea
                    rows={4}
                    placeholder={currentQ.placeholder}
                    value={answers[step] ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [step]: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all resize-none mb-4"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98]"
                  >
                    {submitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Calculating your score...</>
                    ) : (
                      <>See my results <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">This field is optional</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Back button */}
      {step > 0 && (
        <div className="px-5 sm:px-8 pb-8 flex justify-start">
          <button
            onClick={goBack}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      )}
    </div>
  );
}
