import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-surface w-full border-t-8 border-primary px-6 sm:px-8 lg:px-12 py-16 lg:py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-8 relative z-40">
      <div className="flex flex-col gap-4">
        <div className="text-2xl lg:text-3xl font-headline italic text-surface">
          KNIGHTS<span className="text-primary">/</span>M
        </div>
        <p className="font-label text-[11px] uppercase tracking-widest text-outline-variant max-w-sm leading-relaxed">
          &copy;{new Date().getFullYear()} KNIGHTS. 鏡面仕上げ 二十四年。 神奈川県 中井町にて研磨。
        </p>
        <div className="flex flex-col gap-1 font-label text-xs text-outline-variant mt-2">
          <span>〒259-0151 神奈川県足柄上郡中井町井ノ口1540-1</span>
          <span>+81 90 7831 3556 &middot; 12:00 – 24:00</span>
          <span>KNIGHTS20040706@YBB.NE.JP</span>
          <span>JCA認定 &middot; 完全予約制</span>
        </div>
      </div>
      <nav
        className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
        aria-label="フッター"
      >
        <Link
          href="/about"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          工房案内
        </Link>
        <Link
          href="/services"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          サービス
        </Link>
        <Link
          href="/pricing"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          料金
        </Link>
        <Link
          href="/gallery"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          アーカイブ
        </Link>
        <Link
          href="/journal"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          ジャーナル
        </Link>
        <Link
          href="/contact"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          コンタクト
        </Link>
        <Link
          href="/"
          className="font-label text-[11px] uppercase tracking-widest text-outline-variant hover:text-primary"
        >
          工房
        </Link>
      </nav>
    </footer>
  );
}
