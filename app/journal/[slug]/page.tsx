import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/motion/Parallax";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  type JournalBlock,
} from "@/lib/journal";

// Statically prerender every dispatch and 404 anything not in the list.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "記事が見つかりません — KNIGHTS" };
  return {
    title: `${post.title} — KNIGHTSお知らせ`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image.src, alt: post.image.alt }],
      type: "article",
      authors: [post.author.name],
      publishedTime: post.dateISO,
    },
  };
}

export default function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(params.slug, 3);

  return (
    <article>
      {/* ARTICLE HERO — smaller/wider than PageHero to absorb long titles */}
      <section className="relative bg-on-background text-surface border-b-8 border-primary film-grain overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={post.image.src}
            alt={post.image.alt}
            className="absolute inset-0 w-full h-full"
            imgClassName="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
            speed={0.2}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/85 to-on-background/40"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 px-6 sm:px-12 lg:px-24 pt-28 md:pt-36 pb-16 md:pb-20 max-w-6xl">
          <Reveal direction="up" delay={0.05}>
            <Link
              href="/journal"
              className="font-label text-xs uppercase tracking-[0.3em] text-primary border-4 border-primary px-4 py-2 inline-block bg-on-background/60 backdrop-blur-sm mb-10 hover:bg-primary hover:text-on-primary"
            >
              &larr; 記事一覧
            </Link>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 font-label text-xs tracking-widest text-primary-fixed-dim">
              <span>{post.number}</span>
              <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
              <span>{post.category}</span>
              <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
              <span>{post.readMinutes}分で読めます</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2} distance={50} duration={1}>
            <h1 className="font-headline italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-primary mb-10 mix-blend-screen drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] break-words">
              {post.title}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <p className="font-body text-lg sm:text-xl text-surface border-l-4 border-primary pl-6 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 mt-12 pt-8 border-t-4 border-primary/40 font-label text-xs tracking-widest text-surface/80">
              <div>
                <div className="opacity-60 mb-1">執筆</div>
                <div className="text-surface">{post.author.name}</div>
                <div className="opacity-60 text-[10px] mt-0.5">
                  {post.author.role}
                </div>
              </div>
              <div>
                <div className="opacity-60 mb-1">公開日</div>
                <div className="text-surface">{post.dateLabel}</div>
              </div>
              <div>
                <div className="opacity-60 mb-1">記事番号</div>
                <div className="text-primary">{post.number}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-surface border-b-8 border-on-surface px-6 sm:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {post.body.map((block, i) => (
            <JournalBlockRenderer key={i} block={block} first={i === 0} />
          ))}

          {/* End mark */}
          <div className="pt-10 mt-6 border-t-4 border-on-surface flex items-center justify-between font-label text-xs tracking-widest text-on-surface-variant">
            <span>— 記事はここまで —</span>
            <span>{post.number}</span>
          </div>
        </div>
      </section>

      {/* RELATED DISPATCHES */}
      {related.length ? (
        <section className="bg-surface-container-highest border-b-8 border-on-surface px-6 sm:px-12 lg:px-24 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal direction="right">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 border-b-4 border-on-surface pb-2 inline-block">
                  関連記事
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="font-headline italic text-3xl sm:text-4xl md:text-5xl text-on-surface mt-6 leading-[0.95]">
                  ほかの記事も読む。
                </h2>
              </Reveal>
            </div>
            <Reveal direction="up" delay={0.15}>
              <Link
                href="/journal"
                className="font-label text-xs uppercase tracking-widest text-on-surface border-b-4 border-primary pb-1 hover:text-primary w-fit"
              >
                全記事一覧 &rarr;
              </Link>
            </Reveal>
          </div>

          <Stagger
            className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-on-surface"
            staggerDelay={0.1}
          >
            {related.map((r, i) => (
              <StaggerItem
                key={r.slug}
                distance={36}
                className={`bg-surface flex ${
                  i < related.length - 1 ? "border-b-4 md:border-b-0 md:border-r-4" : ""
                } border-on-surface`}
              >
                <Link
                  href={`/journal/${r.slug}`}
                  className="flex flex-col w-full group"
                >
                  <div className="relative h-48 overflow-hidden border-b-4 border-on-surface film-grain">
                    <ParallaxImage
                      src={r.image.src}
                      alt={r.image.alt}
                      className="absolute inset-0 w-full h-full"
                      imgClassName="w-full h-full object-cover editorial opacity-85 group-hover:opacity-100"
                      speed={0.1}
                    />
                    <span className="absolute top-3 left-3 font-label text-[10px] tracking-widest bg-surface text-on-surface px-2 py-1 border-4 border-on-surface">
                      {r.category}
                    </span>
                    <span
                      className="absolute bottom-3 right-3 font-headline italic text-3xl leading-none tracking-tighter text-surface mix-blend-difference"
                      aria-hidden="true"
                    >
                      {r.number}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col gap-4 p-6 md:p-8">
                    <div className="flex items-center gap-3 font-label text-[10px] tracking-widest text-on-surface-variant">
                      <span>{r.dateLabel}</span>
                      <span className="w-1 h-1 bg-primary" aria-hidden="true" />
                      <span>{r.readMinutes}分</span>
                    </div>
                    <h3 className="font-headline italic text-xl sm:text-2xl leading-[1] text-on-surface group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-on-surface-variant line-clamp-3">
                      {r.excerpt}
                    </p>
                    <span className="font-label text-[11px] tracking-widest text-primary mt-auto group-hover:underline underline-offset-4">
                      記事を読む &rarr;
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ) : null}

      {/* CLOSING STRIP */}
      <section className="bg-on-background text-surface border-b-8 border-primary px-6 sm:px-12 lg:px-24 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Reveal direction="right">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 inline-block">
              施工のご依頼
            </span>
            <h3 className="font-headline italic text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
              すべての記事は<br />
              <span className="text-primary">一台のクルマから始まります。</span>
            </h3>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.15} className="flex md:justify-end">
          <Link
            href="/contact"
            className="bg-primary text-on-primary font-label uppercase tracking-widest text-xs sm:text-sm px-8 py-4 hover:bg-surface hover:text-on-surface border-4 border-primary hover:border-surface text-center inline-block w-fit"
          >
            お問い合わせへ &rarr;
          </Link>
        </Reveal>
      </section>
    </article>
  );
}

/**
 * Renders a single content block. Switching on `type` keeps the signature
 * exhaustive — adding a new block variant will force a compile error here.
 */
function JournalBlockRenderer({
  block,
  first,
}: {
  block: JournalBlock;
  first: boolean;
}) {
  switch (block.type) {
    case "p":
      return (
        <p
          className={`font-body text-base sm:text-lg text-on-surface leading-[1.75] ${
            first
              ? "first-letter:font-headline first-letter:italic first-letter:text-primary first-letter:text-6xl sm:first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-[0.8]"
              : ""
          }`}
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2 className="font-headline italic text-3xl sm:text-4xl md:text-5xl leading-[0.95] text-on-surface mt-8 border-b-4 border-primary pb-4">
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="font-label text-sm uppercase tracking-[0.3em] text-primary mt-4 border-l-4 border-primary pl-4 py-1">
          {block.text}
        </h3>
      );

    case "quote":
      return (
        <blockquote className="border-4 border-on-surface bg-surface-container-highest p-8 my-4 relative">
          <div className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
            ひとこと
          </div>
          <p className="font-headline italic text-xl sm:text-2xl md:text-3xl leading-[1.2] text-on-surface">
            「{block.text}」
          </p>
          {block.cite ? (
            <footer className="font-label text-xs tracking-widest text-on-surface-variant mt-5 pt-4 border-t-4 border-primary/40">
              — {block.cite}
            </footer>
          ) : null}
        </blockquote>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-3 font-body text-base sm:text-lg text-on-surface leading-relaxed pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="font-label text-primary text-sm mt-2 flex-shrink-0"
                aria-hidden="true"
              >
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "specs":
      return (
        <div className="border-4 border-on-surface bg-on-surface text-surface my-4">
          <div className="border-b-4 border-primary px-6 py-4 flex items-center justify-between">
            <h4 className="font-label text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">
              {block.title}
            </h4>
            <span className="font-label text-[10px] tracking-widest text-surface/60">
              詳細
            </span>
          </div>
          <dl className="divide-y-4 divide-primary/20">
            {block.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between px-6 py-4 gap-1 sm:gap-6"
              >
                <dt className="font-label text-xs tracking-widest text-surface/70">
                  {item.k}
                </dt>
                <dd className="font-label text-sm sm:text-base text-primary tracking-wider">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
  }
}
