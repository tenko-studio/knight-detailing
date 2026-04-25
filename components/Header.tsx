"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

const NAV = [
  { label: "工房案内", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "料金", href: "/pricing" },
  { label: "アーカイブ", href: "/gallery" },
  { label: "ジャーナル", href: "/journal" },
  { label: "コンタクト", href: "/contact" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);

    if (prefersReducedMotion || open) {
      setHidden(false);
      return;
    }

    if (y > 200 && y > prev) {
      setHidden(true);
    } else if (y < prev - 5 || y < 200) {
      setHidden(false);
    }
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.4, ease: EASE }}
        className={`sticky top-0 z-50 bg-surface border-on-surface transition-[border-bottom-width] duration-300 ${
          scrolled ? "border-b-4" : "border-b-8"
        }`}
      >
        <div
          className={`flex justify-between items-center w-full px-5 sm:px-8 lg:px-12 transition-[padding] duration-300 ease-out ${
            scrolled ? "py-3 sm:py-3.5 lg:py-4" : "py-5 sm:py-6 lg:py-8"
          }`}
        >
          <Link
            href="/"
            className="font-headline italic tracking-tighter text-on-surface text-2xl sm:text-3xl lg:text-4xl leading-none"
          >
            KNIGHTS<span className="text-primary">/</span>M
          </Link>

          <nav className="hidden lg:flex gap-6 xl:gap-8" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-label uppercase tracking-tighter text-sm px-2 py-1 ${
                    active
                      ? "border-b-4 border-primary text-on-surface pb-0.5"
                      : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-primary text-on-primary font-label text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-on-surface hover:text-on-primary border-4 border-primary hover:border-on-surface"
            >
              問合せ
            </Link>

            <button
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-10 h-10 border-4 border-on-surface flex flex-col items-center justify-center gap-1.5 bg-surface hover:bg-primary hover:border-primary group"
            >
              <span
                className={`block h-0.5 w-5 bg-on-surface group-hover:bg-on-primary ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-on-surface group-hover:bg-on-primary ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-on-surface group-hover:bg-on-primary ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU — full-screen overlay, sits beneath header so hamburger stays tappable */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lg:hidden fixed inset-0 bg-on-surface text-surface z-40 overflow-y-auto pt-24 sm:pt-28"
            role="dialog"
            aria-label="モバイルナビゲーション"
          >
            <nav
              className="flex flex-col border-t-4 border-primary"
              aria-label="モバイル主ナビ"
            >
              {NAV.map((item, i) => {
                const active = pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.55,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`font-headline italic text-4xl sm:text-5xl px-8 py-8 border-b-4 border-surface/20 flex items-baseline justify-between ${
                        active ? "bg-primary text-on-primary" : "hover:bg-primary"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-label text-xs tracking-widest opacity-60">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + NAV.length * 0.06,
                  duration: 0.55,
                  ease: EASE,
                }}
              >
                <Link
                  href="/contact"
                  className="font-label uppercase tracking-widest text-center px-8 py-10 bg-primary text-on-primary text-lg block"
                >
                  問合せ &rarr;
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
