import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-700/40 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Pactly"
            width={28}
            height={28}
            className="rounded-[8px]"
          />
          <span className="font-bold text-white text-base">Pactly</span>
        </div>

        {/* Tagline */}
        <p className="text-brand-100 opacity-40 text-sm text-center">
          Do the work. Earn the scroll.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm text-brand-100 opacity-40">
          <Link href="/support" className="hover:opacity-100 hover:text-white transition-all">Support</Link>
          <Link href="/privacy" className="hover:opacity-100 hover:text-white transition-all">Privacy</Link>
          <Link href="/terms" className="hover:opacity-100 hover:text-white transition-all">Terms</Link>
          <span>© {new Date().getFullYear()} Pactly</span>
        </div>
      </div>
    </footer>
  );
}
