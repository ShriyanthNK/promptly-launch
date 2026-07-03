"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    q: "Is this a parental control app?",
    a: "Not exactly. Pactly is built for self-control too — teens, college students, and adults can use it completely on their own without any parent setup. Family Mode (coming soon) is available for those who want it.",
  },
  {
    q: "How does the screen time reward actually work?",
    a: "Every task you complete earns a set amount of screen time, stored in your Reward Bank. You decide how much each task is worth. That earned time can be used to unlock specific apps or time blocks on your device using Apple's Screen Time framework.",
  },
  {
    q: "What if I genuinely need to delay a task?",
    a: 'No problem. Tap "I\'ll do it later" and choose a delay: 10 minutes, 30 minutes, an hour, tonight, or a custom time. Pactly reschedules automatically — no guilt, just accountability.',
  },
  {
    q: "Does it punish me for not completing tasks?",
    a: "No. Pactly is designed to feel like a personal coach, not a warden. Incomplete tasks don't take away earned time — they just mean you don't earn more. The goal is motivation, not punishment.",
  },
  {
    q: "What platforms is Pactly on?",
    a: "iOS first. Android support is on the roadmap. Join the waitlist and we'll keep you updated.",
  },
  {
    q: "Is it free?",
    a: "Core features are free. A Pro plan with advanced modes, analytics, custom schedules, and Family Controls is coming. We'll announce pricing when we launch.",
  },
  {
    q: "When does it launch?",
    a: "Pactly is currently under App Store review. Join the waitlist and you'll be the first to know the moment it goes live.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-brand-500 transition-colors duration-200">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 group-hover:bg-brand-100 transition-colors duration-200 flex items-center justify-center">
          {open ? (
            <Minus className="w-3.5 h-3.5 text-brand-500" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-500" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed text-sm sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Got questions?{" "}
            <span className="text-gradient">We have answers.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl border border-gray-100 shadow-card px-6 sm:px-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
