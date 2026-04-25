"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PageHero } from "@/components/PageHero";

// Google Maps embed — 鏡面仕上げ専門店 Knights(神奈川県足柄上郡中井町)
// Reference: https://maps.app.goo.gl/7KZS2Rs5242v4bEt7
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.42049788310678!2d139.2303092451486!3d35.33757618377726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a8c3bc8917c5%3A0x60b0d1a76f5f7009!2z6Y-h6Z2i5LuV5LiK44GS5bCC6ZaA5bqXIEtuaWdodHM!5e0!3m2!1sen!2sjp!4v1777023776915!5m2!1sen!2sjp";
const MAP_LINK = "https://maps.app.goo.gl/7KZS2Rs5242v4bEt7";
const HERO =
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <>
      <PageHero
        eyebrow="お問い合わせ"
        title="ご相談はこちら。"
        subtitle="完全予約制のオーダーメイド ディテーリング。ご希望の内容をお送りください。担当者より下見とお見積りの日程をご案内いたします。"
        image={{
          src: HERO,
          alt: "硬い陰影とスタジオ照明の効いた重厚な工房内観",
        }}
      />
      <div className="w-full flex flex-col md:flex-row relative">
        {/* LEFT: FORM */}
        <section className="w-full md:w-[60%] lg:w-[65%] bg-surface flex flex-col justify-start px-6 sm:px-12 lg:px-24 py-16 md:py-24 border-b-8 md:border-b-0 md:border-r-8 border-on-surface">
          <Reveal direction="up" delay={0.05}>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-10 inline-block border-b-4 border-on-surface pb-2">
              ご相談フォーム
            </span>
          </Reveal>

          {status === "sent" ? (
          <Reveal
            direction="scale"
            duration={0.9}
            className="border-4 border-primary bg-primary text-on-primary p-10 sm:p-12 max-w-3xl"
          >
            <div className="font-label text-xs uppercase tracking-[0.3em] mb-4 opacity-85">
              送信完了
            </div>
            <h2 className="font-headline italic text-3xl sm:text-5xl leading-tight mb-4">
              お問い合わせを受け付けました。
            </h2>
            <p className="font-body text-base sm:text-lg max-w-md leading-relaxed">
              営業時間内、48時間以内に担当者よりご連絡いたします。まずはお気軽にご相談ください。
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 bg-on-surface text-on-primary font-label uppercase text-xs tracking-widest px-6 py-3 border-4 border-on-surface hover:bg-surface hover:text-on-surface"
            >
              もう一度送信 &rarr;
            </button>
          </Reveal>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-12 w-full max-w-3xl"
            noValidate
          >
            {/* SECTION 01 — CLIENT */}
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 border-b-4 border-outline pb-10">
              <legend className="col-span-full font-label text-xs sm:text-sm uppercase tracking-widest text-primary mb-4">
                01 // お客様情報
              </legend>
              <Stagger
                className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
                staggerDelay={0.08}
              >
                <StaggerItem distance={24}>
                  <Field
                    id="fullName"
                    label="お名前 / 法人名"
                    placeholder="氏名 または 法人名"
                    required
                  />
                </StaggerItem>
                <StaggerItem distance={24}>
                  <Field
                    id="email"
                    type="email"
                    label="連絡先"
                    placeholder="メールアドレス"
                    required
                  />
                </StaggerItem>
                <StaggerItem distance={24} className="md:col-span-2">
                  <Field
                    id="phone"
                    type="tel"
                    label="電話番号 (任意)"
                    placeholder="+81 90 0000 0000"
                  />
                </StaggerItem>
              </Stagger>
            </fieldset>

            {/* SECTION 02 — ASSET */}
            <fieldset className="grid grid-cols-1 gap-y-8 border-b-4 border-outline pb-10">
              <legend className="font-label text-xs sm:text-sm uppercase tracking-widest text-primary mb-4">
                02 // 車両情報
              </legend>
              <Stagger className="grid grid-cols-1 gap-y-8" staggerDelay={0.08}>
                <StaggerItem distance={24}>
                  <Field
                    id="chassis"
                    label="車両詳細"
                    placeholder="メーカー / 車種 / 年式"
                    required
                  />
                </StaggerItem>
                <StaggerItem distance={24} className="flex flex-col relative">
                  <label
                    className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-on-surface-variant mb-2"
                    htmlFor="protocol"
                  >
                    ご希望のサービス
                  </label>
                  <select
                    id="protocol"
                    required
                    defaultValue=""
                    className="hard-line px-0 py-3 text-base sm:text-lg font-body text-on-surface appearance-none cursor-pointer pr-8"
                  >
                    <option disabled value="">
                      サービスを選択
                    </option>
                    <option value="protection">ガラスコーティング</option>
                    <option value="correction">鏡面仕上げ研磨</option>
                    <option value="ppf">ポリマー保護フィルム</option>
                    <option value="interior">ルームクリーニング</option>
                    <option value="headlight">ヘッドライト再生</option>
                    <option value="restoration">フルレストレーション</option>
                    <option value="custom">その他・ご相談</option>
                  </select>
                  <span
                    className="absolute right-1 bottom-3 text-on-surface pointer-events-none font-label text-sm"
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </StaggerItem>
                <StaggerItem distance={24} className="flex flex-col">
                  <label
                    className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-on-surface-variant mb-2"
                    htmlFor="notes"
                  >
                    ご要望 ・ 備考
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="現状 / ご希望の仕上がり..."
                    className="hard-line px-0 py-3 text-base sm:text-lg font-body text-on-surface placeholder:text-outline-variant resize-none"
                  />
                </StaggerItem>
              </Stagger>
            </fieldset>

            {/* SUBMIT */}
            <Reveal direction="up" delay={0.1} className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary text-on-primary font-label text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-12 py-5 sm:py-6 hover:bg-on-surface border-4 border-primary hover:border-on-surface flex items-center gap-3 disabled:opacity-60"
              >
                {status === "sending" ? "送信中…" : "送信する"}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </Reveal>
          </form>
        )}
      </section>

      {/* RIGHT: INFO & MAP */}
      <section className="w-full md:w-[40%] lg:w-[35%] bg-on-surface flex flex-col justify-between relative overflow-hidden">
        {/* Map — Google Maps embed, brutalist treatment */}
        <div className="h-72 md:h-[45%] w-full relative border-b-8 border-primary overflow-hidden bg-on-surface">
          <iframe
            title="工房位置 — 中井町井ノ口"
            src={MAP_EMBED}
            className="absolute inset-0 w-full h-full border-0 [filter:grayscale(1)_contrast(1.2)_brightness(0.85)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Primary-tinted color wash */}
          <div
            className="absolute inset-0 bg-primary/10 pointer-events-none"
            aria-hidden="true"
          />
          {/* Dark edge vignette for editorial depth */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-on-surface/55 via-transparent to-on-surface/35 pointer-events-none"
            aria-hidden="true"
          />

          {/* Corner registration marks */}
          <div
            className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-primary pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-primary pointer-events-none"
            aria-hidden="true"
          />

          {/* Fig caption */}
          <div className="absolute top-5 left-5 bg-surface border-4 border-on-surface px-3 py-2 pointer-events-none">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-background">
              Fig 2.1 / 座標記録
            </p>
            <p className="font-label text-[10px] text-on-surface-variant mt-1 tracking-wider">
              35.3376° N · 139.2303° E
            </p>
          </div>

          {/* Open-in-Maps affordance */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest px-3 py-2 border-4 border-primary hover:bg-surface hover:text-on-surface hover:border-on-surface"
          >
            Google Mapsで開く &rarr;
          </a>
        </div>

        {/* Contact Details */}
        <div className="flex-grow p-8 md:p-12 lg:p-16 flex flex-col justify-end text-surface">
          <Reveal direction="up" delay={0.1} className="mb-14">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-3">
              工房所在地
            </h3>
            <p className="font-body text-2xl md:text-3xl font-light leading-tight mb-2">
              〒259-0151
              <br />
              神奈川県足柄上郡中井町
              <br />
              井ノ口 1540-1
            </p>
            <p className="font-label text-xs sm:text-sm text-outline-variant tracking-wider">
              座標: 北緯 35.3376° ・ 東経 139.2303°
            </p>
          </Reveal>
          <Stagger className="space-y-8" staggerDelay={0.1}>
            <StaggerItem distance={24}>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">
                電話
              </h3>
              <a
                href="tel:+819078313556"
                className="font-label text-base sm:text-lg tracking-wider hover:text-primary"
              >
                +81 90 7831 3556
              </a>
            </StaggerItem>
            <StaggerItem distance={24}>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">
                メール
              </h3>
              <a
                href="mailto:knights20040706@ybb.ne.jp"
                className="font-label text-base sm:text-lg tracking-wider hover:text-primary break-all"
              >
                KNIGHTS20040706@YBB.NE.JP
              </a>
            </StaggerItem>
            <StaggerItem distance={24}>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">
                営業時間
              </h3>
              <p className="font-label text-sm tracking-wider text-surface/85 leading-relaxed">
                毎日 12:00 – 24:00
                <br />
                完全予約制
                <br />
                JCA認定
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Decorative brutalist glyph */}
        <div
          className="absolute top-5 right-5 md:top-8 md:right-8 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="110"
            height="110"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="100"
              height="100"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="10"
              x2="110"
              y2="110"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <line
              x1="110"
              y1="10"
              x2="10"
              y2="110"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r="30"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>
      </div>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-on-surface-variant mb-2"
      >
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="hard-line px-0 py-3 text-base sm:text-lg font-body text-on-surface placeholder:text-outline-variant"
      />
    </div>
  );
}
