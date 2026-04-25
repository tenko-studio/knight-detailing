import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";

const HERO =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80";
const TECH =
  "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80";

const TIERS = [
  {
    key: "01",
    label: "PLAN_01",
    name: "ガラスコーティング",
    price: "¥88,000~",
    subtitle: "入門プラン",
    specs: [
      { k: "車両サイズ", v: "S – Mクラス" },
      { k: "作業日数", v: "2日間" },
      { k: "コーティング耐用年数", v: "24〜36ヶ月" },
    ],
    features: [
      "一段階下地研磨",
      "JCA認定ガラスコーティング",
      "純水仕上げ洗浄",
    ],
    cta: "このプランで予約",
    dark: false,
    featured: false,
  },
  {
    key: "02",
    label: "PLAN_02",
    name: "鏡面仕上げ",
    price: "¥248,000~",
    subtitle: "人気プラン",
    specs: [
      { k: "車両サイズ", v: "全クラス対応" },
      { k: "作業日数", v: "5〜7日間" },
      { k: "コーティング耐用年数", v: "36〜60ヶ月" },
    ],
    features: [
      "多段階暗室研磨",
      "ガラスコーティング + トップコート",
      "ヘッドライトレンズ再生",
    ],
    cta: "このプランで予約",
    dark: true,
    featured: true,
  },
  {
    key: "03",
    label: "PLAN_03",
    name: "フルレストレーション",
    price: "要相談",
    subtitle: "最上位プラン",
    specs: [
      { k: "車両サイズ", v: "全クラス対応" },
      { k: "作業日数", v: "10〜20日間" },
      { k: "保証", v: "生涯メンテナンスプラン" },
    ],
    features: [
      "鏡面仕上げ + 内装リセット",
      "無料引取・納車",
      "年次メンテナンス込",
    ],
    cta: "相談する",
    dark: false,
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="料金プラン"
        title="料金。"
        subtitle="3つのプラン。神奈川で施工、価格は日本円。東京の工房に対して良心的に——それでも、仕上がりに妥協はありません。"
        image={{
          src: HERO,
          alt: "一枚の反射面として読み取れるまで磨き上げられた塗装面のクローズアップ",
        }}
      />

      {/* CAMPAIGN BANNER */}
      <section className="bg-primary text-on-primary px-6 sm:px-12 lg:px-24 py-8 md:py-10 border-b-8 border-on-surface">
        <Reveal direction="up" duration={0.8}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.3em] border-4 border-on-primary px-3 py-1.5">
                20周年記念
              </span>
              <p className="font-headline italic text-xl sm:text-2xl md:text-3xl leading-tight">
                最大5万円割引。ガラスコーティング、50%オフ。
              </p>
            </div>
            <Link
              href="/contact"
              className="font-label text-xs uppercase tracking-widest border-b-4 border-on-primary pb-1 w-fit hover:opacity-80"
            >
              今月の空き状況 &rarr;
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PRICING GRID */}
      <section className="border-b-8 border-on-background">
        <Stagger
          className="grid grid-cols-1 md:grid-cols-3 min-h-[600px]"
          staggerDelay={0.18}
        >
          {TIERS.map((t, i) => (
            <StaggerItem
              key={t.key}
              distance={60}
              className={`flex flex-col border-b-8 md:border-b-0 ${
                i < 2 ? "md:border-r-8" : ""
              } border-on-background ${
                t.dark ? "bg-on-background text-surface" : "bg-surface"
              }`}
            >
              <div
                className={`p-8 border-b-8 ${
                  t.featured
                    ? "bg-primary border-surface"
                    : t.dark
                      ? "bg-on-surface border-surface"
                      : "bg-surface-container-highest border-on-background"
                }`}
              >
                <span
                  className={`font-label text-xs tracking-[0.3em] font-bold ${
                    t.featured || t.dark ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {t.label}
                </span>
                <h2
                  className={`font-headline text-4xl sm:text-5xl font-black mt-2 ${
                    t.featured || t.dark
                      ? "text-on-primary"
                      : "text-on-surface"
                  }`}
                >
                  {t.name}
                </h2>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-10">
                  <span
                    className={`font-label text-xs block mb-2 ${
                      t.dark ? "text-primary-fixed-dim" : "text-outline"
                    }`}
                  >
                    {t.subtitle}
                  </span>
                  <div className="font-headline text-5xl sm:text-6xl font-bold tracking-tighter">
                    {t.price}
                  </div>
                </div>

                <div className="space-y-5 mb-10">
                  {t.specs.map((s) => (
                    <div
                      key={s.k}
                      className={`flex justify-between items-end border-b-2 pb-2 ${
                        t.dark
                          ? "border-on-surface-variant"
                          : "border-surface-container"
                      }`}
                    >
                      <span className="font-label text-[10px] tracking-widest opacity-60">
                        {s.k}
                      </span>
                      <span className="font-label text-sm font-bold">
                        {s.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 flex-grow">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border-2 ${
                          t.featured
                            ? "border-on-primary bg-on-primary"
                            : "border-primary bg-primary"
                        }`}
                        aria-hidden="true"
                      >
                        <span
                          className={`block h-1 w-1 ${
                            t.featured ? "bg-primary" : "bg-on-primary"
                          }`}
                        />
                      </span>
                      <span className="font-label text-xs tracking-tight leading-snug">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-8 border-t-8 ${
                  t.dark ? "border-surface" : "border-on-background"
                }`}
              >
                <Link
                  href="/contact"
                  className={`w-full block text-center font-label font-bold py-4 sm:py-5 uppercase text-xs sm:text-sm tracking-widest border-4 ${
                    t.featured
                      ? "bg-primary text-on-primary border-primary hover:bg-surface hover:text-on-surface hover:border-surface"
                      : "bg-on-background text-surface border-on-background hover:bg-primary hover:border-primary"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TECHNICAL COMPARISON BENTO */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b-8 border-on-background">
        <Reveal
          direction="right"
          duration={1}
          className="md:col-span-2 p-10 lg:p-12 border-b-8 md:border-b-0 md:border-r-8 border-on-background bg-primary text-on-primary"
        >
          <span className="font-label text-xs tracking-[0.3em] uppercase opacity-80 mb-4 block">
            06 / こだわり
          </span>
          <h3 className="font-headline text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            暗室でのレベリング
          </h3>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            当工房はフィラーを使いません。グレーズも使いません。研磨の前後にクリアコートを超音波ゲージで実測し、車両ごとの記録書に読み取り値を残します。
          </p>
          <Stagger
            className="grid grid-cols-2 gap-4"
            staggerDelay={0.12}
            initialDelay={0.15}
          >
            <StaggerItem distance={30}>
              <div className="border-2 border-on-primary p-4">
                <div className="font-label text-[10px] tracking-widest opacity-80 mb-2">
                  認定
                </div>
                <div className="font-headline text-xl sm:text-2xl font-bold">
                  JCA認定
                </div>
              </div>
            </StaggerItem>
            <StaggerItem distance={30}>
              <div className="border-2 border-on-primary p-4">
                <div className="font-label text-[10px] tracking-widest opacity-80 mb-2">
                  仕上げ水
                </div>
                <div className="font-headline text-xl sm:text-2xl font-bold">
                  純水 0 PPM
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </Reveal>
        <div className="md:col-span-2 bg-on-background relative overflow-hidden flex items-center justify-center p-10 lg:p-12 min-h-[360px] film-grain">
          <ParallaxImage
            src={TECH}
            alt="低照度下、研磨直後の自動車塗装面の検査"
            className="absolute inset-0 w-full h-full"
            imgClassName="w-full h-full object-cover editorial opacity-40"
            speed={0.2}
          />
          <Reveal
            direction="scale"
            duration={1.1}
            delay={0.2}
            className="relative z-10 text-center"
          >
            <div className="font-headline italic text-6xl sm:text-7xl text-primary mb-4">
              ⎔
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-bold text-surface tracking-tight">
              匠 Registered
            </h4>
            <p className="font-label text-[10px] tracking-[0.3em] text-primary mt-2 uppercase">
              中井 &middot; 神奈川 &middot; 2002年創業
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ / COMMITMENT */}
      <section className="bg-surface px-6 sm:px-10 lg:px-12 py-16 lg:py-24 border-b-8 border-on-background grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Reveal direction="right">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 inline-block border-b-4 border-on-surface pb-2">
              07 / よくあるご質問
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="font-headline italic text-3xl sm:text-5xl leading-[0.95] text-on-surface">
              フィラー、
              <br />
              使いません。
              <br />
              急ぎの量産も、
              <br />
              しません。
            </h3>
          </Reveal>
        </div>
        <Stagger
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
          staggerDelay={0.12}
        >
          {[
            {
              q: "なぜ月に8台だけなのですか？",
              a: "鏡面仕上げは急げないからです。すべての車両を同じ職人——鈴木——が研磨し、コーティングします。8台は、一人の手で丁寧に仕上げ切れる誠実な上限です。",
            },
            {
              q: "無料引取は本当に含まれていますか？",
              a: "はい。神奈川県および東京都圏は全域無料でお引取りにうかがいます。その他の県や海外からのご依頼は別途お見積りです。お客様は動かず、車両だけが当工房に届きます。",
            },
            {
              q: "仕上がりはどう評価されますか？",
              a: "超音波クリアコートゲージ、5000Kハロゲン照明での確認、研磨前の書面での状態レポート——これらを納車時に報告書として添付してお渡しします。",
            },
            {
              q: "今月予約して翌月施工は可能ですか？",
              a: "可能です。20周年記念価格は、施工月が翌月にまたがっても、現時点でお受けしたご予約に適用されます。枠は先着順、ご連絡いただいた順に優先してご案内します。",
            },
          ].map((f) => (
            <StaggerItem
              key={f.q}
              distance={30}
              className="border-t-4 border-on-surface pt-6 flex flex-col gap-3"
            >
              <div className="font-label text-xs tracking-[0.2em] text-primary">
                {f.q}
              </div>
              <div className="font-body text-base leading-relaxed text-on-surface-variant">
                {f.a}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
