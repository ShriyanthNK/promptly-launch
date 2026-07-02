import type { Metadata } from "next";
import QuizFlow from "@/components/QuizFlow";

export const metadata: Metadata = {
  title: "Free Productivity & Screen Time Quiz — Promptly",
  description:
    "Take our free 2-minute quiz to find out why you keep losing hours to your phone — and get a personalized plan to fix it. Instant results.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
