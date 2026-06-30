"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhoneFrame from "./PhoneFrame";
import EmailForm from "./EmailForm";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-50" />

      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-accent-light rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-100" />
              <span className="text-sm font-medium text-gray-600">
                Currently under App Store review
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight mb-6"
            >
              Your apps are{" "}
              <span className="text-gradient">running your life.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Promptly puts you back in control. Earn screen time by completing
              real tasks — and get more done every single day.
            </motion.p>

            {/* Email form */}
            <motion.div variants={fadeUp} className="max-w-md mx-auto lg:mx-0 mb-4">
              <EmailForm
                size="large"
                placeholder="Enter your email"
                buttonText="Get Early Access"
              />
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-gray-400">
              Be first to know when Promptly hits the App Store. No spam, ever.
            </motion.p>

            {/* App Store badge */}
            <motion.div variants={fadeUp} className="mt-6 flex justify-center lg:justify-start">
              <div className="relative opacity-60 cursor-not-allowed select-none">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={156}
                  height={52}
                  onError={() => {}}
                />
                <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Soon
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="phone-glow animate-float">
              <PhoneFrame
                src="/screenshots/today.png"
                alt="Promptly task list"
                size="lg"
              />
            </div>

            {/* Floating reward pill */}
            <motion.div
              className="absolute -left-12 top-1/4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center">
                <span className="text-lg">⭐</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 leading-none mb-0.5">Just earned</p>
                <p className="text-sm font-bold text-gray-900">+15 min</p>
              </div>
            </motion.div>

            {/* Floating streak pill */}
            <motion.div
              className="absolute -right-10 bottom-1/4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-xs text-gray-500 leading-none mb-0.5">Day streak</p>
                <p className="text-sm font-bold text-gray-900">7 days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
