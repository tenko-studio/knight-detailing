import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/Parallax";

type PageHeroProps = {
  /** Short uppercase tag shown in the boxed primary-border pill. */
  eyebrow: string;
  /** Giant italic headline. Typically one word ending in a period ("Services."). */
  title: string;
  /** Uppercase subtitle with left primary accent bar. */
  subtitle: string;
  /** Parallax background image — rendered dim + grayscale + luminosity-blended. */
  image: { src: string; alt: string };
  /** Optional slot rendered beneath the subtitle (used on the landing page for CTAs). */
  children?: ReactNode;
};

/**
 * Unified page header used on every route.
 *
 * Full-bleed dark editorial hero: parallax image, boxed eyebrow, giant italic
 * title in primary, subtitle with left accent bar. Matches the services page
 * treatment so all routes share one visual grammar.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[716px] bg-on-background text-surface flex flex-col border-b-8 border-on-surface overflow-hidden film-grain">
      <ParallaxImage
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 w-full h-full"
        imgClassName="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity"
        speed={0.25}
      />
      {/* Bottom-up scrim: darkens the content area so the primary-red title
          pops against whatever imagery is behind it. Top stays image-forward. */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-on-background via-on-background/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 flex-grow flex flex-col justify-end p-8 sm:p-12 lg:p-24 pt-32 sm:pt-40">
        <Reveal direction="up" delay={0.1}>
          <span className="font-label text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-6 border-4 border-primary w-fit px-4 py-2 inline-block bg-on-background/60 backdrop-blur-sm">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.25} distance={60} duration={1.1}>
          <h1 className="font-headline italic text-[18vw] sm:text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter text-primary break-words mix-blend-screen drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.5}>
          <p className="font-label text-sm sm:text-xl md:text-2xl uppercase mt-8 max-w-2xl text-surface border-l-4 border-primary pl-4 sm:pl-6">
            {subtitle}
          </p>
        </Reveal>
        {children ? (
          <Reveal direction="up" delay={0.7}>
            <div className="mt-10">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
