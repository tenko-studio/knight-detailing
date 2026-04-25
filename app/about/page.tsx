import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "工房案内 — KNIGHTS",
  description:
    "2004年、神奈川県中井町にて創業。ガラスコーティング、鏡面研磨、内装リコンディショニング、ヘッドライト再生。JCA認定・完全予約制の自動車コーティング工房。",
};

const PROFILE: { k: string; v: string }[] = [
  { k: "店名", v: "KNIGHTS (ナイツ)" },
  { k: "創業", v: "2004年7月6日" },
  { k: "事業形態", v: "個人工房 ・ 完全予約制" },
  { k: "所在地", v: "〒259-0151 神奈川県足柄上郡中井町井ノ口 1540-1" },
  { k: "電話", v: "+81 90 7831 3556" },
  { k: "メール", v: "KNIGHTS20040706@YBB.NE.JP" },
  { k: "営業時間", v: "12:00 – 24:00 / 年中無休" },
  {
    k: "事業内容",
    v: "ガラスコーティング ・ 鏡面研磨 ・ ルームクリーニング ・ ヘッドライト再生 ・ サイドメニュー",
  },
  { k: "所属", v: "日本コーティング協会(JCA)" },
];

const TIMELINE: { year: string; label: string; body: string }[] = [
  {
    year: "2004",
    label: "創業",
    body: "2004年7月6日、神奈川県足柄上郡中井町にて開業。初年度から鏡面研磨とガラスコーティングの2本立てでご依頼を受け始める。",
  },
  {
    year: "2014",
    label: "経済誌に掲載",
    body: "経済誌『ビジネスガイド』2014年1月号にて、信頼できる小規模工房の事例として特集いただく。",
  },
  {
    year: "2015",
    label: "tvkで放映",
    body: "tvk(テレビ神奈川)『あっぱれ！KANAGAWA大行進』にて、工房と鏡面研磨の流れを一般視聴者向けに紹介いただく。",
  },
  {
    year: "2016",
    label: "中井町 広報",
    body: "中井町 広報誌にて、町内の事業者として紹介いただく。地元の技術を担う工房として、公的な媒体への掲載。",
  },
  {
    year: "2017",
    label: "湘南ケーブルTV",
    body: "湘南ケーブルネットワーク(SCN)にて施工特集を放映いただく。県内のローカル媒体で、自動車コーティングの事例として紹介。",
  },
  {
    year: "2024",
    label: "20周年",
    body: "創業から20年。20周年キャンペーンとして、ガラスコーティング50%オフ・ヘッドライト再生 最大5万円割引を実施。",
  },
];

const DOMAINS: { n: string; title: string; body: string; href: string }[] = [
  {
    n: "01",
    title: "ガラスコーティング",
    body: "JCA認定のガラス系コーティングを湿度管理下で硬化。3〜5年の保証付きで、高密度な保護層をつくります。",
    href: "/services",
  },
  {
    n: "02",
    title: "鏡面仕上げ研磨",
    body: "5000Kハロゲン照明下での多段階研磨。クリアコートをただ磨くのではなく、面を一枚ずつ整えていきます。",
    href: "/services",
  },
  {
    n: "03",
    title: "ルームクリーニング",
    body: "シート、カーペット、天井、吹出口。奥までスチーム洗浄とHEPA空気清浄で、車内環境をまるごとリセット。",
    href: "/services",
  },
  {
    n: "04",
    title: "ヘッドライト再生",
    body: "黄ばんだポリカーボネートを8段階で磨き、クリアな透明度に戻して、ボディと同じガラスコーティングで保護。",
    href: "/services",
  },
  {
    n: "05",
    title: "サイドメニュー",
    body: "ビリヤードキューのコーティング、墓石清掃など、自動車以外のコーティング・清掃のご依頼もお受けします。",
    href: "/contact",
  },
  {
    n: "06",
    title: "記録と保証",
    body: "すべての施工に書面の報告書。超音波ゲージの測定値、硬化条件、作業の流れをすべて記録・保管しています。",
    href: "/journal",
  },
];

const WORKSHOP_IMG =
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80";
const HERO_IMG =
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="工房案内"
        title="会社概要。"
        subtitle="2004年、神奈川県中井町で創業。24年間、一台ずつ。鏡面研磨、ガラスコーティング、ルームクリーニング——技術で続けてきた個人工房です。"
        image={{
          src: HERO_IMG,
          alt: "暗色の作業面に並べられた精密工具と計測器",
        }}
      />

      {/* 01 / 創業から24年 */}
      <section className="bg-surface border-b-8 border-on-surface grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-10 md:p-16 lg:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-on-surface">
          <Reveal direction="right">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-on-surface pb-2 inline-block">
              01 / 創業から24年
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-on-surface mt-8 mb-10">
              二〇〇四年、
              <br />
              中井町の工房。
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed mb-6">
              KNIGHTSは2004年7月6日、神奈川県足柄上郡中井町で開業した個人工房です。最初の一台から、仕上がりの根拠を「写真」ではなく「計測値」に置いてきました。鏡面研磨、ガラスコーティング、ルームクリーニング、ヘッドライト再生——どのサービスも、超音波ゲージと5000Kハロゲン下での確認を前提に組み立てています。
            </p>
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              2014年、経済誌『ビジネスガイド』に取材いただいたのを皮切りに、tvkテレビ神奈川、中井町広報、湘南ケーブルネットワークなど、地域のメディアにも順次紹介いただきました。20年を経た今も、大量生産に寄らず、一台ごとに書面の記録をお渡しする方針を続けています。
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[560px] border-primary film-grain overflow-hidden">
          <ParallaxImage
            src={WORKSHOP_IMG}
            alt="スタジオ照明下の重厚な工房内観、硬い陰影"
            className="absolute inset-0 w-full h-full"
            imgClassName="w-full h-full object-cover [filter:grayscale(1)_contrast(1.1)_brightness(0.95)]"
            speed={0.15}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-on-surface/75 via-on-surface/10 to-on-surface/30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-5 left-5 w-6 h-6 border-t-4 border-l-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-5 right-5 w-6 h-6 border-t-4 border-r-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-5 left-5 w-6 h-6 border-b-4 border-l-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-5 right-5 w-6 h-6 border-b-4 border-r-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 bg-surface border-4 border-on-surface p-3 sm:p-4 max-w-[280px]">
            <p className="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-background">
              Fig A.1 工房内観
            </p>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-snug">
              中井町井ノ口の工房。5000Kハロゲン照明での検査と、湿度管理された硬化スペースを備えています。
            </p>
          </div>
        </div>
      </section>

      {/* 02 / 基本情報 */}
      <section className="bg-on-background text-surface border-b-8 border-primary px-6 sm:px-12 lg:px-24 py-16 md:py-24">
        <Reveal direction="right">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-primary pb-2 inline-block">
            02 / 基本情報
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] mt-8 mb-12 max-w-3xl">
            工房の
            <br />
            会社概要。
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-primary"
          staggerDelay={0.06}
        >
          {PROFILE.map((row, i) => (
            <StaggerItem
              key={row.k}
              distance={20}
              className={`flex flex-col gap-2 px-2 sm:px-6 py-6 border-b-4 border-primary/40 ${
                i % 2 === 0 ? "md:border-r-4" : ""
              }`}
            >
              <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary">
                {row.k}
              </span>
              <span className="font-body text-base sm:text-lg text-surface leading-snug">
                {row.v}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* 03 / 私たちの約束 */}
      <section className="bg-surface border-b-8 border-on-surface px-6 sm:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-on-surface pb-2 inline-block">
                03 / 私たちの約束
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-on-surface mt-8">
                フィラー無し。
                <br />
                <span className="text-primary">グレーズ無し。</span>
                <br />
                暦に合わせた
                <br />
                量産無し。
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="up" delay={0.15}>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
                当工房ではフィラー系のグレーズを使いません。欠陥を光学的に埋めて「直した」と見せる道具は扱わない。スワール(細かな引っかき傷)は研磨材で削る。ピンホールはレベリングで均す。塗装を減らしすぎないよう、すべての車両に超音波厚さ計を当て、残っているクリアコートの厚みを書面で記録します。
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
                ガラスコーティングは日本コーティング協会(JCA)認定の薬剤を使い、湿度を管理した環境で硬化させます。硬化後のモース硬度、塗膜の残存厚、施工時の気温・湿度——すべてお客様にお渡しする施工記録書にまとめます。数値こそが保証の根拠であり、納期の根拠です。
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.25}>
              <blockquote className="font-headline italic text-2xl sm:text-3xl text-on-surface border-l-4 border-primary pl-6 mt-4">
                「写真は嘘をつく。超音波ゲージはつかない。」
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 / これまでの歩み */}
      <section className="bg-surface-container-highest border-b-8 border-on-surface px-6 sm:px-12 lg:px-24 py-20 md:py-28">
        <Reveal direction="right">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-on-surface pb-2 inline-block">
            04 / これまでの歩み
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-on-surface mt-8 mb-16 max-w-3xl">
            二十年の歩み。
          </h2>
        </Reveal>

        <Stagger className="flex flex-col" staggerDelay={0.08}>
          {TIMELINE.map((t, i) => (
            <StaggerItem
              key={t.year}
              distance={30}
              className={`grid grid-cols-12 gap-4 sm:gap-8 py-8 border-t-4 border-on-surface ${
                i === TIMELINE.length - 1 ? "border-b-4" : ""
              }`}
            >
              <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                <span className="font-headline italic text-4xl sm:text-5xl lg:text-6xl leading-none text-primary">
                  {t.year}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-9 lg:col-span-10 flex flex-col gap-3">
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-[0.25em] text-on-surface">
                  {t.label}
                </span>
                <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                  {t.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* 05 / サービス内容 */}
      <section className="bg-surface border-b-8 border-on-surface">
        <div className="px-6 sm:px-12 lg:px-24 py-16 md:py-20 border-b-4 border-on-surface">
          <Reveal direction="right">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-on-surface pb-2 inline-block">
              05 / サービス内容
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-on-surface mt-8 max-w-3xl">
              取り扱うサービス。
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {DOMAINS.map((d, i) => {
            const dark = i % 2 === 1;
            return (
              <StaggerItem
                key={d.n}
                distance={30}
                className={`p-8 md:p-10 flex flex-col gap-6 min-h-[320px] border-b-4 border-on-surface ${
                  (i + 1) % 3 !== 0 ? "lg:border-r-4" : ""
                } ${i < 3 ? "md:border-r-4 lg:border-r-4" : ""} ${
                  dark
                    ? "bg-on-surface text-surface"
                    : "bg-surface-container-highest text-on-surface"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className={`font-label text-xs uppercase tracking-[0.3em] ${
                      dark ? "text-primary-fixed-dim" : "text-primary"
                    }`}
                  >
                    Domain_{d.n}
                  </span>
                  <span className="font-headline italic text-5xl leading-none tracking-tighter opacity-30">
                    {d.n}
                  </span>
                </div>
                <h3 className="font-headline italic text-3xl sm:text-4xl leading-none">
                  {d.title}。
                </h3>
                <p
                  className={`font-body text-sm sm:text-base leading-relaxed flex-grow ${
                    dark ? "text-surface/85" : "text-on-surface-variant"
                  }`}
                >
                  {d.body}
                </p>
                <Link
                  href={d.href}
                  className={`font-label text-xs uppercase tracking-widest border-b-4 w-fit pb-1 ${
                    dark
                      ? "border-primary text-primary hover:text-surface hover:border-surface"
                      : "border-on-surface text-on-surface hover:text-primary hover:border-primary"
                  }`}
                >
                  詳細を見る &rarr;
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* 06 / 認定・工房所在地 */}
      <section className="bg-on-surface text-surface border-b-8 border-primary px-6 sm:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-primary pb-2 inline-block">
                06 / 認定・工房所在地
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] mt-8 mb-10">
                JCA認定。
                <br />
                <span className="text-primary">完全予約制。</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="font-body text-base sm:text-lg text-surface/85 leading-relaxed max-w-xl">
                日本コーティング協会(JCA)認定のガラスコーティング薬剤を使用しています。施工は完全予約制で、月間の作業枠は8台までとしています。お見積りは車両の状態を確認したうえでお出しするため、ご来店いただくか、お写真を添えてご依頼内容をお送りください。
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-5">
            <Reveal direction="up" delay={0.2}>
              <div className="border-4 border-primary p-6 bg-on-background">
                <span className="font-label text-[11px] uppercase tracking-[0.25em] text-primary block mb-2">
                  所在地 / 工房
                </span>
                <p className="font-body text-lg sm:text-xl leading-snug text-surface">
                  〒259-0151
                  <br />
                  神奈川県足柄上郡中井町
                  <br />
                  井ノ口 1540-1
                </p>
                <p className="font-label text-[11px] text-outline-variant tracking-wider mt-3">
                  北緯 35.3376° ・ 東経 139.2303°
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.25}>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-surface/25 p-5">
                  <span className="font-label text-[11px] uppercase tracking-[0.25em] text-primary block mb-2">
                    営業時間
                  </span>
                  <p className="font-body text-base text-surface leading-tight">
                    12:00 – 24:00
                    <br />
                    <span className="text-surface/70 text-sm">年中無休</span>
                  </p>
                </div>
                <div className="border-4 border-surface/25 p-5">
                  <span className="font-label text-[11px] uppercase tracking-[0.25em] text-primary block mb-2">
                    月間施工枠
                  </span>
                  <p className="font-body text-base text-surface leading-tight">
                    8 台
                    <br />
                    <span className="text-surface/70 text-sm">完全予約制</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 / CTA */}
      <section className="bg-primary text-on-primary px-6 sm:px-12 lg:px-24 py-20 md:py-28 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <Reveal direction="up" duration={1} distance={50}>
          <h2 className="font-headline italic text-4xl sm:text-6xl lg:text-7xl leading-[0.9] max-w-3xl">
            あなたの一台を、
            <br />
            丁寧に残す。
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-on-surface text-on-primary font-label uppercase px-8 py-5 text-sm tracking-widest border-4 border-on-surface hover:bg-on-primary hover:text-on-surface whitespace-nowrap"
          >
            お問い合わせへ &rarr;
          </Link>
          <Link
            href="/journal"
            className="bg-on-primary text-on-surface font-label uppercase px-8 py-5 text-sm tracking-widest border-4 border-on-surface hover:bg-on-surface hover:text-on-primary whitespace-nowrap"
          >
            お知らせを見る &rarr;
          </Link>
        </Reveal>
      </section>
    </>
  );
}
