"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" className="w-8 h-8" />
          <span className="font-semibold text-neutral-800 text-lg">
            The Living & The Lost
          </span>
        </div>

        <div className="flex gap-6 text-neutral-800">
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/developer">About Us</Link>
        </div>
      </div>
    </nav>
  );
}
