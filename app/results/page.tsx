import type { Metadata } from "next";
import QuizResults from "@/components/QuizResults";

export const metadata: Metadata = {
  title: "Your Productivity Score — Promptly",
  description: "See your personalized screen time and productivity insights.",
  robots: { index: false, follow: false },
};

export default function ResultsPage() {
  return <QuizResults />;
}
