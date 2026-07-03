"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Plan your day",
    body: "Add today's tasks, set a due time for each, and decide how much screen time each one is worth. Takes two minutes.",
    screenshot: "/screenshots/today.png",
    alt: "Pactly task planning screen",
  },
  {
    number: "02",
    title: "Get reminded at the right time",
    body: "Pactly nudges you exactly when each task is due — not all at once first thing in the morning. Need a minute? Delay it with one tap.",
    screenshot: "/screenshots/splash.png",
    alt: "Pactly reminder",
  },
  {
    number: "03",
    title: "Earn your screen time",
    body: "Tap Done and watch your Reward Bank grow. Screen time is something you earn — and that small shift changes everything.",
    screenshot: "/screenshots/rewards.png",
    alt: "Pactly reward bank screen",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Three steps.{" "}
            <span className="text-gradient">Real results.</span>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer(0.15)}
              >
                {/* Text */}
                <motion.div
                  className="flex-1 text-center lg:text-left"
                  variants={isEven ? slideInLeft : slideInRight}
                >
                  <span className="text-7xl font-black text-brand-100 leading-none block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.body}
                  </p>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="shrink-0 flex justify-center"
                  variants={isEven ? slideInRight : slideInLeft}
                >
                  <PhoneFrame src={step.screenshot} alt={step.alt} size="md" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
