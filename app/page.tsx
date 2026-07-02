import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatBanner from "@/components/StatBanner";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import ForWho from "@/components/ForWho";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Promptly a parental control app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not exactly. Promptly is built for self-control too — teens, college students, and adults can use it completely on their own without any parent setup. Family Mode (coming soon) is available for those who want it.",
      },
    },
    {
      "@type": "Question",
      name: "How does the screen time reward actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every task you complete earns a set amount of screen time, stored in your Reward Bank. You decide how much each task is worth. That earned time can be used to unlock specific apps or time blocks on your device using Apple's Screen Time framework.",
      },
    },
    {
      "@type": "Question",
      name: "What if I genuinely need to delay a task?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem. Tap 'I'll do it later' and choose a delay: 10 minutes, 30 minutes, an hour, tonight, or a custom time. Promptly reschedules automatically — no guilt, just accountability.",
      },
    },
    {
      "@type": "Question",
      name: "Does Promptly punish me for not completing tasks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Promptly is designed to feel like a personal coach, not a warden. Incomplete tasks don't take away earned time — they just mean you don't earn more. The goal is motivation, not punishment.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms is Promptly on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iOS first. Android support is on the roadmap. Join the waitlist and we'll keep you updated.",
      },
    },
    {
      "@type": "Question",
      name: "Is Promptly free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core features are free. A Pro plan with advanced modes, analytics, custom schedules, and Family Controls is coming. We'll announce pricing when we launch.",
      },
    },
    {
      "@type": "Question",
      name: "When does Promptly launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Promptly is currently under App Store review. Join the waitlist and you'll be the first to know the moment it goes live.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <StatBanner />
        <Problem />
        <HowItWorks />
        <Features />
        <Screenshots />
        <ForWho />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
