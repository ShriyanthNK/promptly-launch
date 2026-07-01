import type { Metadata } from "next";
import QuizFlow from "@/components/QuizFlow";

export const metadata: Metadata = {
  title: "Find Your Productivity Score — Promptly",
  description:
    "Answer 10 questions to find out why you keep losing hours to your phone — and get a personalized plan to fix it.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
