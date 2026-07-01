import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0e1e] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Promptly"
            width={28}
            height={28}
            className="rounded-[8px]"
          />
          <span className="font-bold text-white text-base">Promptly</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm text-center">
          Do the work. Earn the scroll.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span>© {new Date().getFullYear()} Promptly</span>
        </div>
      </div>
    </footer>
  );
}
