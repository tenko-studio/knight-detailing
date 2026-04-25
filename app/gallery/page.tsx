import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";

type Project = {
  id: string;
  name: string;
  status: "完了" | "進行中" | "保管済";
  year: string;
  summary: string;
  img: string;
  alt: string;
  span?: "wide";
};

const PROJECTS: Project[] = [
  {
    id: "PRJ-01",
    name: "Veloce",
    status: "完了",
    year: "1968",
    summary: "ボディ全面のレベリング研磨と、ルームクリーニング。クローム部分の磨き直しも行いました。",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80",
    alt: "クロームバンパー付きクラシック赤スポーツカーのテールライトクローズアップ",
  },
  {
    id: "PRJ-02",
    name: "Stuttgart",
    status: "進行中",
    year: "1973",
    summary:
      "現在、塗装の下地づくりから進めています。オリジナルの状態を確認しながら丁寧に。",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
    alt: "シルバーのヴィンテージ ポルシェ 911 リアデッキリッド",
    span: "wide",
  },
  {
    id: "PRJ-03",
    name: "Ghost",
    status: "完了",
    year: "1955",
    summary: "アルミボディの磨き直しと、オリジナルレザーのルームクリーニング。",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80",
    alt: "木製リムとクロームボスを備えたクラシック ステアリングホイールのマクロ撮影",
  },
  {
    id: "PRJ-05",
    name: "Maranello",
    status: "完了",
    year: "1972",
    summary: "鏡面仕上げと、工場出荷時の色合いに合わせた塗装調整を行いました。",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    alt: "鮮やかな赤のクラシック スポーツカーのサイドルーバーとミラー",
  },
  {
    id: "PRJ-06",
    name: "Monolith",
    status: "保管済",
    year: "2021",
    summary:
      "最新のスーパーカーに、ガラスコーティングを全面施工。長期保証付きで仕上げました。",
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1400&q=80",
    alt: "重厚な工業照明下の現代スーパーカー",
  },
];

const statusStyles: Record<Project["status"], string> = {
  完了: "bg-surface text-on-surface border-on-surface",
  進行中: "bg-primary text-on-primary border-primary",
  保管済: "bg-on-surface text-surface border-on-surface",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="施工事例"
        title="施工事例。"
        subtitle="これまでお預かりした一台一台の記録。印象に残った施工をご紹介しています。"
        image={{
          src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80",
          alt: "木製リムとクロームボスを備えたクラシック ステアリングホイールのマクロ撮影",
        }}
      />

      {/* PROJECT GRID */}
      <section className="bg-surface-container-highest border-b-8 border-on-surface">
        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.12}
          amount={0.1}
        >
          {PROJECTS.map((p, i) => {
            const dark = i === 1 || p.status === "保管済";
            return (
              <StaggerItem
                key={p.id}
                distance={50}
                className={`relative group overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[460px] sm:min-h-[560px] border-b-4 ${
                  i % 3 !== 2 ? "lg:border-r-4" : ""
                } border-on-surface ${
                  dark ? "bg-on-surface text-surface" : "bg-surface"
                } ${p.span === "wide" ? "lg:col-span-2" : ""}`}
              >
                {/* image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <ParallaxImage
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover editorial opacity-80 group-hover:opacity-100"
                    speed={0.15}
                  />
                  <div
                    className={`absolute inset-0 ${
                      dark ? "bg-on-surface/55" : "bg-surface/45"
                    }`}
                  />
                </div>

                <div className="flex justify-between items-start z-10 gap-4">
                  <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-[0.9]">
                    {p.id}
                    <br />
                    <span className="italic text-primary">{p.name}</span>
                  </h2>
                  <span
                    className={`font-label text-[10px] px-2 py-1 border whitespace-nowrap ${statusStyles[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <div
                  className={`z-10 mt-auto border-4 p-4 max-w-[88%] ${
                    dark
                      ? "bg-on-surface text-surface border-surface translate-y-2 -translate-x-2 self-end"
                      : "bg-surface text-on-surface border-on-surface translate-y-2 translate-x-2"
                  }`}
                >
                  <p className="font-label text-xs uppercase border-b-2 pb-2 mb-2 border-primary text-primary">
                    年式 // {p.year}
                  </p>
                  <p
                    className={`font-body text-sm leading-relaxed ${
                      dark ? "text-surface/85" : "text-on-surface-variant"
                    }`}
                  >
                    {p.summary}
                  </p>
                </div>
              </StaggerItem>
            );
          })}

          {/* Metrics tile (text-heavy) */}
          <StaggerItem
            distance={50}
            className="bg-surface flex flex-col justify-center p-8 lg:p-12 min-h-[460px] sm:min-h-[560px] border-b-4 lg:border-b-0 border-on-surface"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="border-b-4 border-on-surface pb-4">
                <h3 className="font-label text-lg sm:text-xl uppercase tracking-tighter text-on-surface">
                  これまでの実績
                </h3>
              </div>
              <ul className="space-y-4 font-label text-sm tracking-widest text-on-surface-variant">
                <li className="flex justify-between border-b-2 border-outline-variant pb-2">
                  <span>施工台数</span>
                  <span className="text-on-surface">142</span>
                </li>
                <li className="flex justify-between border-b-2 border-outline-variant pb-2">
                  <span>累計作業時間</span>
                  <span className="text-on-surface">84,500時間+</span>
                </li>
                <li className="flex justify-between border-b-2 border-outline-variant pb-2">
                  <span>表彰実績</span>
                  <span className="text-primary">12</span>
                </li>
              </ul>
              <p className="font-body text-lg sm:text-xl italic text-on-surface border-l-4 border-primary pl-6">
                「妥協はしません。ボルト一本、継ぎ目一筋、面の一枚まで、理由を説明できる仕事を心がけています。」
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ANATOMY */}
      <section className="bg-surface px-6 sm:px-10 lg:px-12 py-20 lg:py-28 border-b-8 border-on-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Reveal direction="right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 inline-block">
                08 / 施工記録
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-headline italic text-4xl sm:text-5xl md:text-6xl text-on-surface mb-8 leading-[0.95]">
                一台ずつ、記録に残す。
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="font-body text-base sm:text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                お預かりした一台ごとに、施工前後の状態や使用した薬剤・工程をすべて記録しています。あとから見返せる、一台だけのカルテです。
              </p>
            </Reveal>
            <Stagger
              className="flex flex-col gap-4"
              staggerDelay={0.1}
              initialDelay={0.2}
            >
              <StaggerItem distance={30}>
                <Link
                  href="/contact"
                  className="border-4 border-on-surface p-5 sm:p-6 flex justify-between items-center bg-surface hover:bg-on-surface hover:text-surface group w-full"
                >
                  <span className="font-label text-base sm:text-xl">
                    施工記録について問い合わせる
                  </span>
                  <span
                    className="text-primary group-hover:text-surface"
                    aria-hidden="true"
                  >
                    &darr;
                  </span>
                </Link>
              </StaggerItem>
              <StaggerItem distance={30}>
                <Link
                  href="/contact"
                  className="border-4 border-on-surface p-5 sm:p-6 flex justify-between items-center bg-surface hover:bg-on-surface hover:text-surface group w-full"
                >
                  <span className="font-label text-base sm:text-xl">
                    施工事例の資料を請求する
                  </span>
                  <span
                    className="text-primary group-hover:text-surface"
                    aria-hidden="true"
                  >
                    &darr;
                  </span>
                </Link>
              </StaggerItem>
            </Stagger>
          </div>
          <Reveal
            direction="scale"
            duration={1.1}
            className="relative min-h-[360px] sm:min-h-[440px] border-4 border-on-surface p-4 bg-surface-container"
          >
            <div className="absolute inset-4 border-2 border-outline-variant border-dashed grid grid-cols-6 grid-rows-6 gap-2 p-2">
              <div className="col-span-2 row-span-2 border border-outline-variant flex items-center justify-center p-2">
                <span className="font-label text-[10px] text-outline">
                  FIG 1A
                </span>
              </div>
              <div className="col-span-4 row-span-3 border border-outline-variant bg-surface-variant flex items-center justify-center overflow-hidden">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80"
                  alt="暗色背景に並べられた技術機械部品"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-60"
                  speed={0.1}
                />
              </div>
              <div className="col-span-2 row-span-4 border border-outline-variant flex items-end p-2">
                <span className="font-label text-[10px] text-outline">
                  SPEC-992
                </span>
              </div>
              <div className="col-span-4 row-span-3 border border-outline-variant flex items-center justify-center p-4">
                <p className="font-label text-xs text-on-surface-variant text-center">
                  ミクロン単位まで丁寧に計測。小さな差も見逃しません。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
