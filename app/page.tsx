import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";

const HERO_IMG =
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=80";
const METHOD_IMG =
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80";
const SERVICES_IMG =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh] min-h-[560px] md:h-[870px] bg-on-background overflow-hidden border-b-8 border-on-surface flex items-center justify-center film-grain">
        <ParallaxImage
          src={HERO_IMG}
          alt="暗室の検査灯が磨き上げられた塗装面を斜めから照らす"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          speed={0.25}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-on-background/30 via-transparent to-on-background/60 z-10" />

        <div className="relative z-20 text-center px-6 w-full flex flex-col items-center">
          <Reveal direction="fade" duration={1} delay={0.1}>
            <span className="font-label uppercase tracking-[0.3em] text-xs sm:text-sm text-primary-fixed-dim mb-6 border-4 border-primary px-4 py-2 inline-block">
              2002年創業 ・ 神奈川県中井町
            </span>
          </Reveal>
          <Reveal direction="up" duration={1.1} delay={0.25} distance={60}>
            <h1 className="font-headline italic text-primary leading-[0.85] tracking-tighter text-[22vw] sm:text-[18vw] md:text-[15vw] mix-blend-screen drop-shadow-md">
              KNIGHTS
            </h1>
          </Reveal>
          <Reveal direction="up" duration={0.9} delay={0.55}>
            <p className="font-label text-surface text-sm sm:text-lg md:text-2xl uppercase tracking-[0.25em] mt-6 border-t-4 border-primary pt-4 w-fit mix-blend-difference mx-auto">
              鏡面仕上げ専門
            </p>
          </Reveal>
          <Reveal direction="up" duration={0.9} delay={0.75}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full sm:w-auto max-w-md">
              <Link
                href="/services"
                className="bg-primary text-on-primary font-label text-sm uppercase tracking-wider px-8 py-4 hover:bg-surface hover:text-on-surface border-4 border-primary hover:border-surface text-center"
              >
                サービスを見る
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-surface font-label text-sm uppercase tracking-wider px-8 py-4 hover:bg-surface hover:text-on-surface border-4 border-surface text-center"
              >
                ご予約はこちら &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METHOD */}
      <section className="w-full bg-surface grid grid-cols-1 md:grid-cols-12 border-b-8 border-on-surface">
        <div className="md:col-span-5 bg-surface-container-highest p-10 md:p-14 lg:p-20 flex flex-col justify-between border-b-8 md:border-b-0 md:border-r-8 border-on-surface">
          <div>
            <Reveal direction="right">
              <h2 className="font-label text-xs sm:text-sm uppercase tracking-widest text-primary mb-6 border-b-4 border-on-surface pb-3">
                01 / 私たちの流儀
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h3 className="font-headline italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-on-background mb-8">
                下地が、
                <br />
                全て。
              </h3>
            </Reveal>
          </div>
          <div className="mt-12 md:mt-24">
            <Reveal direction="up" delay={0.2}>
              <p className="font-body text-base sm:text-lg text-on-surface leading-relaxed mb-10 max-w-md">
                仕上がりの美しさは、下地の丁寧さで決まります。コーティングを塗る前に、暗室の照明下でクリアコートを整え、ならし、磨き上げる——これが基本です。コーティングは目的ではなく、磨いた鏡面を守るための結果。24年間、一台ずつ、手の圧で確かめながら仕上げています。
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <Link
                href="/services"
                className="inline-block bg-primary text-on-primary font-label text-xs sm:text-sm px-8 py-4 uppercase tracking-wider hover:bg-on-background border-4 border-primary hover:border-on-background"
              >
                詳しく見る
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-7 bg-surface p-6 sm:p-10 md:p-14 lg:p-20 flex items-center justify-center">
          <Reveal
            direction="scale"
            duration={1}
            className="relative w-full h-full min-h-[380px] md:min-h-[500px] film-grain border-8 border-on-surface bg-on-background offset-shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={METHOD_IMG}
              alt="ハロゲン検査灯が磨き上げられたボンネットを照らす、低照度の工房内部"
              className="w-full h-full object-cover editorial"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-surface border-4 border-on-surface p-3 sm:p-4 max-w-[240px]">
              <p className="font-label text-[10px] sm:text-xs uppercase text-on-background">
                Fig 1.1 暗室での検査
              </p>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1.5">
                5000Kハロゲン照明下で検査。0.1μm以下の欠陥まで確認します。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY TRIPTYCH */}
      <Stagger
        className="grid grid-cols-1 md:grid-cols-3 border-b-8 border-on-surface"
        staggerDelay={0.15}
      >
        {[
          {
            n: "02",
            title: "鏡面仕上げ",
            body: "暗室の照明下で、クリアコートを一層ずつ整えます。ただ表面を磨くのではなく、反射が一枚の平面として見えるまで丁寧に仕上げます。",
            href: "/services",
          },
          {
            n: "03",
            title: "ガラスポリマー",
            body: "磨き上げた塗装面に直接結合するガラス系コーティング。JCA認定の薬剤を、湿度を管理した環境で硬化させます。",
            href: "/services",
            dark: true,
          },
          {
            n: "04",
            title: "ルーム・ランプ",
            body: "ルームクリーニングとヘッドライト再生。仕上がりの美しさは、細部で決まります。",
            href: "/gallery",
          },
        ].map((c, i) => (
          <StaggerItem
            key={c.n}
            className={`p-10 md:p-12 flex flex-col gap-8 min-h-[420px] border-b-4 md:border-b-0 ${
              i < 2 ? "md:border-r-4" : ""
            } border-on-surface ${
              c.dark
                ? "bg-on-surface text-surface"
                : "bg-surface-container-highest text-on-surface"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span
                className={`font-label text-xs uppercase tracking-[0.3em] ${
                  c.dark ? "text-primary-fixed-dim" : "text-primary"
                }`}
              >
                Protocol_{c.n}
              </span>
              <span className="font-headline italic text-6xl leading-none tracking-tighter opacity-30">
                {c.n}
              </span>
            </div>
            <h3 className="font-headline italic text-4xl sm:text-5xl leading-none">
              {c.title}。
            </h3>
            <p className="font-body text-base leading-relaxed opacity-85 flex-grow">
              {c.body}
            </p>
            <Link
              href={c.href}
              className={`font-label text-xs uppercase tracking-widest border-b-4 w-fit pb-1 ${
                c.dark
                  ? "border-primary text-primary hover:text-surface hover:border-surface"
                  : "border-on-surface text-on-surface hover:text-primary hover:border-primary"
              }`}
            >
              詳細を見る &rarr;
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      {/* METRICS BANNER */}
      <section className="bg-on-background text-surface border-b-8 border-primary">
        <Stagger
          className="grid grid-cols-2 md:grid-cols-4"
          staggerDelay={0.12}
        >
          {[
            { k: "創業年数", v: "24" },
            { k: "月間受付数", v: "8" },
            { k: "対応エリア", v: "30+" },
            { k: "仕上げ水", v: "0 PPM" },
          ].map((m, i) => (
            <StaggerItem
              key={m.k}
              className={`p-8 md:p-12 flex flex-col gap-3 ${
                i % 2 === 0 ? "border-r-4" : ""
              } ${i < 2 ? "border-b-4 md:border-b-0" : ""} ${
                i < 3 ? "md:border-r-4" : ""
              } border-primary`}
            >
              <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">
                {m.k}
              </span>
              <span className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-none">
                {m.v}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* EDITORIAL CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-8 border-on-surface">
        <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[560px] bg-on-background film-grain border-b-8 lg:border-b-0 lg:border-r-8 border-on-surface overflow-hidden">
          <ParallaxImage
            src={SERVICES_IMG}
            alt="一枚の反射面として磨き上げられたフェンダーを斜めから捉えた編集カット"
            className="absolute inset-0 w-full h-full"
            imgClassName="w-full h-full object-cover editorial"
            speed={0.2}
          />
        </div>
        <div className="lg:col-span-6 p-10 md:p-16 lg:p-24 flex flex-col justify-between bg-surface">
          <div>
            <Reveal direction="right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary border-b-4 border-on-surface pb-2 inline-block mb-8">
                05 / ご依頼について
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-headline italic text-4xl sm:text-6xl md:text-7xl leading-[0.9] text-on-surface mb-10">
                月に8台、
                <br />
                <span className="text-primary">あなたの一台を丁寧に。</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl mb-12">
                当工房では量産は行いません。月に8台のみ、同じ職人が暗室での研磨と手塗りコーティングを担当します。神奈川・東京都内および一部の近隣県へは、無料で引取にうかがいます。
              </p>
            </Reveal>
          </div>
          <Reveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="bg-primary text-on-primary font-label uppercase tracking-widest text-xs sm:text-sm px-8 py-4 hover:bg-on-surface border-4 border-primary hover:border-on-surface text-center"
              >
                料金を見る
              </Link>
              <Link
                href="/contact"
                className="bg-surface text-on-surface font-label uppercase tracking-widest text-xs sm:text-sm px-8 py-4 hover:bg-primary hover:text-on-primary border-4 border-on-surface hover:border-primary text-center"
              >
                お問い合わせへ &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
