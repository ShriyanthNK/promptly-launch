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

export default function Home() {
  return (
    <>
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
