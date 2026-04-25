import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import { PageHero } from "@/components/PageHero";
import { getFeaturedPost, getNonFeaturedPosts } from "@/lib/journal";

export const metadata = {
  title: "お知らせ — KNIGHTS",
  description:
    "KNIGHTS工房からのお知らせ。施工レポート、作業記録、スタッフからのメッセージ。",
};

export default function JournalPage() {
  const featured = getFeaturedPost();
  const posts = getNonFeaturedPosts();

  // For 2-col grid: last row index to suppress doubled bottom border on md+.
  const lastRowStart = Math.floor((posts.length - 1) / 2) * 2;

  return (
    <>
      <PageHero
        eyebrow="お知らせ"
        title="お知らせ・ジャーナル。"
        subtitle="工房からの施工レポート、作業記録、スタッフからのメッセージをお届けします。"
        image={{
          src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80",
          alt: "暗色の作業面に並べられた技術機械部品",
        }}
      />

      {/* FEATURED DISPATCH */}
      {featured ? (
        <section
          aria-labelledby="featured-heading"
          className="bg-on-surface text-surface border-b-8 border-on-surface grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[640px] overflow-hidden border-b-8 lg:border-b-0 lg:border-r-8 border-primary film-grain">
            <ParallaxImage
              src={featured.image.src}
              alt={featured.image.alt}
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover editorial opacity-80"
              speed={0.2}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-on-surface/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-wrap items-center gap-3">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-on-primary bg-primary px-3 py-1.5 border-4 border-primary">
                特集
              </span>
              <span className="font-label text-xs tracking-widest text-surface bg-on-surface/70 backdrop-blur-sm px-3 py-1.5 border-4 border-surface/40">
                {featured.category}
              </span>
            </div>
            <span
              className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-headline italic text-6xl sm:text-8xl leading-none tracking-tighter text-surface/70 mix-blend-difference"
              aria-hidden="true"
            >
              {featured.number}
            </span>
          </div>

          <div className="lg:col-span-5 p-10 md:p-14 lg:p-16 flex flex-col justify-between gap-10">
            <div>
              <Reveal direction="right">
                <h2
                  id="featured-heading"
                  className="font-label text-xs uppercase tracking-[0.3em] text-primary border-b-4 border-primary pb-2 inline-block mb-8"
                >
                  {featured.number} / 最新のお知らせ
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h3 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-surface mb-8">
                  {featured.title}
                </h3>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="font-body text-base sm:text-lg text-surface/85 leading-relaxed max-w-md">
                  {featured.excerpt}
                </p>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-t-4 border-primary pt-4 font-label text-xs tracking-widest text-surface/75">
                  <div>
                    <div className="text-surface">{featured.author.name}</div>
                    <div className="opacity-60 text-[10px] mt-0.5">
                      {featured.author.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-surface">{featured.dateLabel}</div>
                    <div className="opacity-60 text-[10px] mt-0.5">
                      {featured.readMinutes}分
                    </div>
                  </div>
                </div>
                <Link
                  href={`/journal/${featured.slug}`}
                  className="bg-primary text-on-primary font-label uppercase tracking-widest text-xs sm:text-sm px-8 py-4 hover:bg-surface hover:text-on-surface border-4 border-primary hover:border-surface text-center inline-block w-fit"
                >
                  記事を読む &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* INDEX HEADER */}
      <section className="bg-surface border-b-4 border-on-surface px-6 sm:px-12 lg:px-24 py-14 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <Reveal direction="right">
          <div>
            <span className="font-label text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-3 border-b-4 border-on-surface pb-2 w-fit inline-block">
              06 / 記事一覧
            </span>
            <h2 className="font-headline italic text-3xl sm:text-4xl md:text-5xl leading-[0.95] text-on-surface mt-6">
              これまでの記事。
            </h2>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-sm md:text-right">
            施工の工程や、現場でのできごとなど{posts.length}本の記事をお届けしています。新しい順に並んでいます。
          </p>
        </Reveal>
      </section>

      {/* POSTS GRID */}
      <section className="bg-surface border-b-8 border-on-surface">
        <Stagger
          className="grid grid-cols-1 md:grid-cols-2"
          staggerDelay={0.12}
          amount={0.1}
        >
          {posts.map((p, i) => {
            const dark = i % 2 === 1;
            return (
              <StaggerItem
                key={p.slug}
                distance={40}
                className={`relative flex flex-col min-h-[520px] border-on-surface ${
                  i === posts.length - 1 ? "" : "border-b-4"
                } ${i >= lastRowStart ? "md:border-b-0" : "md:border-b-4"} ${
                  i % 2 === 0 ? "md:border-r-4" : ""
                } ${dark ? "bg-on-surface text-surface" : "bg-surface text-on-surface"}`}
              >
                <Link
                  href={`/journal/${p.slug}`}
                  className="flex flex-col h-full group"
                >
                  <div className="relative h-60 sm:h-72 overflow-hidden border-b-4 border-on-surface film-grain">
                    <ParallaxImage
                      src={p.image.src}
                      alt={p.image.alt}
                      className="absolute inset-0 w-full h-full"
                      imgClassName="w-full h-full object-cover editorial opacity-85 group-hover:opacity-100"
                      speed={0.15}
                    />
                    <div
                      className={`absolute inset-0 ${
                        dark ? "bg-on-surface/30" : "bg-surface/20"
                      } group-hover:opacity-0`}
                    />
                    <span
                      className={`absolute top-4 left-4 font-label text-[10px] tracking-widest px-2 py-1 border-4 ${
                        dark
                          ? "bg-primary text-on-primary border-primary"
                          : "bg-surface text-on-surface border-on-surface"
                      }`}
                    >
                      {p.category}
                    </span>
                    <span
                      className="absolute bottom-4 right-4 font-headline italic text-5xl leading-none tracking-tighter opacity-80 mix-blend-difference text-surface"
                      aria-hidden="true"
                    >
                      {p.number}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col p-8 md:p-10 gap-5">
                    <div className="flex items-center gap-3 font-label text-[11px] tracking-widest opacity-70">
                      <span>{p.dateLabel}</span>
                      <span
                        className={`w-1.5 h-1.5 ${dark ? "bg-primary" : "bg-on-surface"}`}
                        aria-hidden="true"
                      />
                      <span>{p.readMinutes}分</span>
                    </div>
                    <h3 className="font-headline italic text-2xl sm:text-3xl md:text-4xl leading-[0.95] group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p
                      className={`font-body text-sm sm:text-base leading-relaxed flex-grow ${
                        dark ? "text-surface/80" : "text-on-surface-variant"
                      }`}
                    >
                      {p.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t-4 border-primary/50 mt-auto">
                      <span className="font-label text-[11px] tracking-widest">
                        {p.author.name}
                      </span>
                      <span
                        className={`font-label text-[11px] tracking-widest ${
                          dark ? "text-primary-fixed-dim" : "text-primary"
                        } group-hover:underline underline-offset-4`}
                      >
                        記事を読む &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* EDITORIAL CTA */}
      <section className="bg-on-background text-surface p-10 md:p-16 lg:p-24 border-b-8 border-primary grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <Reveal direction="right">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 border-b-4 border-primary pb-2 inline-block">
              07 / お問い合わせ
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="font-headline italic text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
              記事は施工が終わるごとに
              <br />
              <span className="text-primary">更新しています——</span>
              <br />
              定期発行ではなく。
            </h3>
          </Reveal>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Reveal direction="up" delay={0.2}>
            <p className="font-body text-base text-surface/85 leading-relaxed">
              当工房は決まった発行スケジュールを持ちません。ご依頼やご質問は、お問い合わせフォームからお気軽にどうぞ。
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <Link
              href="/contact"
              className="bg-primary text-on-primary font-label uppercase tracking-widest text-xs px-8 py-4 hover:bg-surface hover:text-on-surface border-4 border-primary hover:border-surface text-center inline-block w-fit"
            >
              お問い合わせへ &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
