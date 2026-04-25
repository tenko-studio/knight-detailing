import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";

const SERVICES = [
  {
    n: "01",
    title: "鏡面仕上げ研磨",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    alt: "鏡面レベリング施工後、工房照明を反射する艶黒のリアクォーターパネル",
    body: "暗室の照明下で多段階の研磨を行います。クリアコートをただ磨くのではなく、反射が一枚の平面として見えるまで、一層ずつ丁寧に整える。24年の経験と手の圧で、一度に一台だけ。すべての基礎であり、他のサービスもここから始まります。",
    specs: [
      { k: "手法", v: "暗室多段階" },
      { k: "検査", v: "5000Kハロゲン" },
      { k: "クリアコート影響", v: "測定 ・ 記録" },
      { k: "認定", v: "匠 Registered" },
    ],
    figLabel: "Fig 01.A 鏡面レベリング",
    figNote: "二十四年の手圧。反射が一枚の幾何面として読めるまで再構築。",
    dark: false,
  },
  {
    n: "02",
    title: "ガラスポリマーコーティング",
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1400&q=80",
    alt: "ガラスポリマー硬化後、高密度グロスで光を一方向に返すクリアコート面",
    body: "研磨で整えた塗装面に直接結合するガラス系コーティング。市販のセラミックとは異なり、当工房で使うコーティング剤は日本コーティング協会(JCA)の認定を受け、湿度を管理した環境で硬化させます。流れず、紫外線でも劣化しない。磨き上げた鏡面を長持ちさせる——3〜5年、実測済みです。",
    specs: [
      { k: "認証", v: "JCA認定" },
      { k: "硬化工程", v: "湿度管理" },
      { k: "仕上水", v: "純水 0 PPM" },
      { k: "耐用年数", v: "36〜60ヶ月" },
    ],
    figLabel: "Fig 02.A 結合硬化",
    figNote: "シリコン酸化物格子を湿度管理下にて結合。JCA認定化学。",
    dark: true,
  },
  {
    n: "03",
    title: "ルームクリーニング",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80",
    alt: "クリーニング後の木目ステアリングとクロームボス、整備されたクラシック内装",
    body: "シート、カーペット、天井、ダッシュボード、吹出口。すべての面を確認し、汚れを奥から抽出します。芳香剤でごまかすことはしません。素材の奥まで丁寧に洗浄し、薬剤と時間をかけて車内をまるごとリセットする——一台あたり通常6〜10時間かかります。",
    specs: [
      { k: "洗浄方法", v: "深層スチーム" },
      { k: "空気清浄", v: "HEPAろ過" },
      { k: "仕上げ", v: "無塗剤・自然乾燥" },
      { k: "所要時間", v: "6〜10時間" },
    ],
    figLabel: "Fig 03.A 深層クリーニング",
    figNote: "奥までスチーム洗浄、HEPA空気清浄、無塗剤で自然に仕上げ。",
    dark: false,
  },
  {
    n: "04",
    title: "ヘッドライト再生 + コーティング",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80",
    alt: "クロームベゼルと光学グレードのクリアレンズに復元されたランプアセンブリ",
    body: "黄ばんだポリカーボネート製レンズを8段階で磨き直し、クリアな透明度まで戻したうえで、ボディと同じガラスコーティングで保護します。6ヶ月でまた曇ってしまう簡易再生とは違う——塗って拭くだけのグレーズではなく、再コーティングまで行うレンズ仕上げです。",
    specs: [
      { k: "工程", v: "八段階研磨" },
      { k: "最終透明度", v: "光学グレード" },
      { k: "シーラー", v: "ガラスポリマー封止" },
      { k: "保証", v: "24ヶ月" },
    ],
    figLabel: "Fig 04.A 光学復元",
    figNote: "八段階研磨で光学グレードに復元、ガラスポリマーで封止。",
    dark: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="サービス一覧"
        title="サービス。"
        subtitle="鏡面仕上げ、ガラスコーティング、ルームクリーニング、ヘッドライト再生。四つの専門、一人の職人、二十四年。"
        image={{
          src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=2000&q=80",
          alt: "スタジオ照明下で捉えたカーボンファイバー地のマクロ撮影",
        }}
      />

      {/* SERVICE SECTIONS */}
      {SERVICES.map((s, idx) => {
        const reverse = idx % 2 === 1;
        const dark = s.dark;
        return (
          <section
            key={s.n}
            className={`w-full flex flex-col ${
              reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } border-b-8 border-on-surface ${
              dark ? "bg-on-background text-surface" : "bg-surface"
            }`}
          >
            {/* Number column */}
            <div
              className={`w-full lg:w-1/4 p-8 flex flex-col justify-between border-b-4 lg:border-b-0 ${
                reverse
                  ? "lg:border-l-4 border-surface bg-on-surface"
                  : "lg:border-r-4 border-on-surface bg-surface-container-highest"
              }`}
            >
              <Reveal direction={reverse ? "left" : "right"} duration={0.9}>
                <div className="font-label text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-12">
                  施工メニュー
                </div>
              </Reveal>
              <Reveal
                direction="up"
                delay={0.15}
                duration={1.1}
                distance={80}
              >
                <div
                  className={`font-headline italic text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] leading-none tracking-tighter ${
                    reverse ? "text-surface" : "text-on-surface"
                  }`}
                >
                  {s.n}
                </div>
              </Reveal>
            </div>

            {/* Content column */}
            <div
              className={`w-full lg:w-2/4 flex flex-col justify-between p-8 lg:p-16 z-10 ${
                dark ? "bg-on-background" : "bg-surface"
              }`}
            >
              <div>
                <Reveal direction="up" delay={0.1}>
                  <h2
                    className={`font-headline italic text-4xl sm:text-5xl md:text-7xl mb-8 border-b-4 border-primary pb-4 inline-block ${
                      dark ? "text-surface" : "text-on-surface"
                    }`}
                  >
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <p
                    className={`font-body text-base sm:text-lg max-w-xl mb-10 leading-relaxed ${
                      dark ? "text-surface/85" : "text-on-surface-variant"
                    }`}
                  >
                    {s.body}
                  </p>
                </Reveal>
                <Stagger
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t-4 pt-8 mt-10 ${
                    dark ? "border-surface" : "border-on-surface"
                  }`}
                  staggerDelay={0.08}
                  initialDelay={0.1}
                >
                  {s.specs.map((spec) => (
                    <StaggerItem key={spec.k} distance={24}>
                      <div className="font-label text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-2">
                        {spec.k}
                      </div>
                      <div className="font-body text-lg sm:text-xl font-bold">
                        {spec.v}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
              <Reveal direction="up" delay={0.2} className="mt-12">
                <Link
                  href="/contact"
                  className={`${
                    dark
                      ? "bg-surface text-on-surface border-surface hover:bg-primary hover:text-on-primary hover:border-primary"
                      : "bg-primary text-on-primary border-primary hover:bg-on-surface hover:border-on-surface"
                  } font-label uppercase px-6 sm:px-8 py-4 w-full md:w-auto flex items-center justify-between gap-4 border-4 text-sm tracking-widest`}
                >
                  <span>このサービスで予約</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            </div>

            {/* Image column */}
            <div
              className={`w-full lg:w-1/4 min-h-[360px] lg:min-h-[560px] relative film-grain border-t-4 lg:border-t-0 overflow-hidden ${
                reverse
                  ? "lg:border-r-4 border-surface bg-surface"
                  : "lg:border-l-4 border-on-surface bg-on-background"
              }`}
            >
              <ParallaxImage
                src={s.img}
                alt={s.alt}
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover [filter:grayscale(1)_contrast(1.1)_brightness(1)]"
                speed={0.15}
              />

              {/* Top-bottom readability gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/15 to-on-surface/35 pointer-events-none"
                aria-hidden="true"
              />

              {/* Corner registration marks */}
              <div
                className="absolute top-4 left-4 w-5 h-5 border-t-4 border-l-4 border-primary pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-4 right-4 w-5 h-5 border-t-4 border-r-4 border-primary pointer-events-none"
                aria-hidden="true"
              />

              {/* Top protocol chip */}
              <div className="absolute top-6 right-10 flex items-center gap-2 bg-on-surface/85 backdrop-blur-sm border-4 border-primary px-2.5 py-1">
                <span
                  className="w-1.5 h-1.5 bg-primary block"
                  aria-hidden="true"
                />
                <span className="font-label text-[10px] tracking-[0.25em] text-surface">
                  PROTOCOL_{s.n}
                </span>
              </div>

              {/* Large editorial glyph */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline italic text-[10rem] sm:text-[14rem] leading-none tracking-tighter text-surface/15 mix-blend-overlay select-none pointer-events-none"
                aria-hidden="true"
              >
                {s.n}
              </span>

              {/* Bottom-left Fig caption box */}
              <div className="absolute bottom-5 left-5 right-5 bg-surface border-4 border-on-surface p-3 sm:p-4 max-w-[320px]">
                <p className="font-label text-[10px] sm:text-xs uppercase tracking-widest text-on-background">
                  {s.figLabel}
                </p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-snug">
                  {s.figNote}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      {/* CLOSING CTA */}
      <section className="bg-primary text-on-primary px-6 sm:px-12 lg:px-24 py-20 md:py-28 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <Reveal direction="up" duration={1} distance={50}>
          <h2 className="font-headline italic text-4xl sm:text-6xl lg:text-7xl leading-[0.9] max-w-3xl">
            あなたの一台を。
            <br />
            一台ずつ、丁寧に。
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <Link
            href="/contact"
            className="bg-on-surface text-on-primary font-label uppercase px-8 py-5 text-sm tracking-widest border-4 border-on-surface hover:bg-on-primary hover:text-on-surface whitespace-nowrap"
          >
            お問い合わせへ &rarr;
          </Link>
        </Reveal>
      </section>
    </>
  );
}
