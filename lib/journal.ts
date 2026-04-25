/**
 * Journal / News data layer.
 *
 * Posts are defined inline as structured content blocks so the page renderer
 * can stay deterministic and server-rendered (no MDX runtime, no CMS fetch).
 * Swapping this for a CMS later is a matter of replacing the lookup helpers.
 *
 * The entries below reflect the actual news / media coverage of the KNIGHTS
 * workshop (Kanagawa, founded 2004-07-06): an anniversary campaign and four
 * historical press/TV features. Bodies are original editorial writing that
 * summarizes the factual coverage — the original publications are credited
 * but no copyrighted text is reproduced.
 */

export type JournalAuthor = {
  name: string;
  role: string;
};

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | {
      type: "specs";
      title: string;
      items: { k: string; v: string }[];
    };

export type JournalPost = {
  slug: string;
  number: string; // e.g. "N°05"
  title: string;
  excerpt: string;
  category: string;
  /** ISO date for sort + metadata. */
  dateISO: string;
  /** Human display: "2024年7月6日". */
  dateLabel: string;
  readMinutes: number;
  author: JournalAuthor;
  image: { src: string; alt: string };
  featured?: boolean;
  body: JournalBlock[];
};

const POSTS: JournalPost[] = [
  {
    slug: "20-year-anniversary-campaign",
    number: "N°05",
    title: "二十周年キャンペーンのお知らせ",
    excerpt:
      "創業から20年。ガラスコーティング50%オフ、ヘッドライト再生は最大5万円割引いたします。月ごとの枠に限りがありますので、完全予約制でご案内します。",
    category: "告知",
    dateISO: "2024-07-06",
    dateLabel: "2024年7月6日",
    readMinutes: 3,
    author: { name: "KNIGHTS 工房", role: "受付担当" },
    image: {
      src: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=2000&q=80",
      alt: "工房照明下、高密度グロスを示すコーティング済みボディパネル",
    },
    featured: true,
    body: [
      {
        type: "p",
        text: "KNIGHTSは、2004年7月6日に神奈川県足柄上郡中井町で創業しました。この20年、鏡面研磨とガラスコーティングを柱に、一台ずつ丁寧に仕上げてまいりました。節目を迎えるにあたり、日頃お世話になっているお客様、そしてはじめての方にも気軽にお試しいただけるよう、下記のキャンペーンを実施いたします。",
      },
      { type: "h2", text: "キャンペーン内容" },
      {
        type: "specs",
        title: "20周年 特別施工",
        items: [
          { k: "ガラスコーティング", v: "通常価格より50%オフ" },
          { k: "ヘッドライト再生", v: "最大50,000円割引" },
          { k: "対象期間", v: "月間の施工枠に限りがあります" },
          { k: "ご予約方法", v: "完全予約制 ・ お電話またはフォーム" },
        ],
      },
      { type: "h2", text: "ご予約について" },
      {
        type: "p",
        text: "当工房では月に受けられる施工台数が決まっており、キャンペーン中も同様に月間の上限がございます。お見積りは、車両の状態を確認したうえでお出ししますので、まずはお写真を添えてフォームからご依頼いただくか、直接ご来店ください。ご予約の際に「20周年キャンペーン」とお伝えいただけると、スムーズにご案内できます。",
      },
      {
        type: "quote",
        text: "20年の仕事に値引きをするのは今回だけ。工程、薬剤、記録書類は、いつもと同じ内容でお届けします。",
      },
      { type: "h3", text: "対象外となる作業" },
      {
        type: "p",
        text: "フルレストレーションや全面的な再塗装、保険対応の案件は、本キャンペーンの対象外となります。対象になるかどうかは、ご依頼時に個別にご案内いたします。",
      },
    ],
  },
  {
    slug: "business-guide-magazine-feature-2014",
    number: "N°04",
    title: "経済誌『ビジネスガイド』掲載",
    excerpt:
      "2014年1月号の経済誌『ビジネスガイド』に、工房取材の記事を掲載いただきました。技術系の個人事業者としての信頼性という切り口で、鏡面研磨とガラスコーティングの工程をご紹介いただいています。",
    category: "メディア掲載",
    dateISO: "2014-01-15",
    dateLabel: "2014年1月号",
    readMinutes: 4,
    author: { name: "KNIGHTS 工房", role: "受付担当" },
    image: {
      src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80",
      alt: "暗色の作業面に並べられた精密工具と計測器",
    },
    body: [
      {
        type: "p",
        text: "2014年1月、経済誌『ビジネスガイド』さんに取材いただきました。小規模事業者の信頼性を技術面から取り上げる特集の一環として、鏡面研磨の工程、ガラスコーティングの硬化管理、施工記録の運用などをご紹介いただいています。創業10年の節目に、初めての商業誌での掲載となりました。",
      },
      { type: "h2", text: "掲載のきっかけ" },
      {
        type: "p",
        text: "取材のきっかけは、お取引先からのご紹介でした。「工程を写真ではなく、計測した数字で説明する工房」というテーマに合うとのことで、事前に工房をご見学いただいたうえで掲載が決まりました。誌面では、硬化スペース、5000Kハロゲン照明での検査、超音波による塗膜厚の管理についても触れていただいています。",
      },
      { type: "h3", text: "工房としての受け止め方" },
      {
        type: "p",
        text: "取材いただいても、施工のやり方を変えることはありません。ただ、日々の工程を外から観察していただいた記録として、工房にとって貴重な資料となりました。ご興味のあるお客様は、ご来店時にお声がけいただければ誌面をご覧いただけます。",
      },
      {
        type: "specs",
        title: "掲載媒体",
        items: [
          { k: "誌名", v: "ビジネスガイド" },
          { k: "発行号", v: "2014年1月号" },
          { k: "内容", v: "鏡面研磨・ガラスコーティングの工程紹介" },
          { k: "誌面保管", v: "工房にてご覧いただけます" },
        ],
      },
    ],
  },
  {
    slug: "tvk-appare-kanagawa-feature",
    number: "N°03",
    title: "tvk『あっぱれ！KANAGAWA大行進』出演",
    excerpt:
      "テレビ神奈川(tvk)の地域情報番組『あっぱれ！KANAGAWA大行進』で、中井町の工房として取材・放映いただきました。鏡面研磨の工程を、一般の視聴者の方にも分かりやすくご紹介いただいています。",
    category: "メディア掲載",
    dateISO: "2015-10-10",
    dateLabel: "2015年放映",
    readMinutes: 3,
    author: { name: "KNIGHTS 工房", role: "受付担当" },
    image: {
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80",
      alt: "木目ステアリングとクロームボスを備えた整備されたクラシック内装",
    },
    body: [
      {
        type: "p",
        text: "テレビ神奈川(tvk)の地域情報番組『あっぱれ！KANAGAWA大行進』で、中井町の工房として取材・放映いただきました。番組では、車両のお預かりから鏡面レベリング、ガラスコーティングの塗布と硬化、そしてお客様への納車までを映像で追っていただく構成でした。一般視聴者の方向けということで、専門用語を避けつつ、工程の要点を分かりやすくご紹介いただいています。",
      },
      { type: "h2", text: "放映の趣旨" },
      {
        type: "p",
        text: "番組のテーマは「県内で地道に続けている技術系の事業者」を紹介するというものでした。自動車コーティングが美容ではなく技術の仕事であることを、視聴者の方にお伝えできた点に意義があったと感じています。",
      },
      {
        type: "quote",
        text: "コーティングは見た目の装飾ではなく、クリアコートを守るための層です——取材の現場で、繰り返しお伝えした言葉です。",
      },
      {
        type: "specs",
        title: "放送媒体",
        items: [
          { k: "放送局", v: "テレビ神奈川(tvk)" },
          { k: "番組名", v: "あっぱれ！KANAGAWA大行進" },
          { k: "内容", v: "鏡面研磨+ガラスコーティング施工" },
          { k: "映像保管", v: "放送局にて保管/工房では静止画のみ" },
        ],
      },
    ],
  },
  {
    slug: "nakai-town-public-relations-feature",
    number: "N°02",
    title: "中井町 広報誌 掲載",
    excerpt:
      "中井町の広報誌で、町内事業者としてご紹介いただきました。地元の技術を支える担い手という切り口で、公的な媒体に掲載していただいています。",
    category: "メディア掲載",
    dateISO: "2016-04-01",
    dateLabel: "2016年掲載",
    readMinutes: 2,
    author: { name: "KNIGHTS 工房", role: "受付担当" },
    image: {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80",
      alt: "スタジオ照明下の重厚な工房内観、硬い陰影",
    },
    body: [
      {
        type: "p",
        text: "中井町の広報誌で、町内事業者としてご紹介いただきました。地元自治体の公的な媒体での掲載で、広告ではなく「地元で続けている小規模事業の紹介」という編集方針のもとでまとめていただいた記事です。",
      },
      { type: "h2", text: "掲載の意味" },
      {
        type: "p",
        text: "商業誌やテレビ番組とは違い、広報誌は町内の読者の方を想定した記事です。自動車コーティングの工房が地域にどう関わっているのか——音や排水、電力などの運用面も含めて——簡潔にまとめていただきました。",
      },
      {
        type: "p",
        text: "掲載された紙面は工房で保管しておりますので、ご来店の際にお声がけいただければご覧いただけます。",
      },
      {
        type: "specs",
        title: "掲載媒体",
        items: [
          { k: "媒体", v: "中井町 広報誌" },
          { k: "掲載年", v: "2016年" },
          { k: "内容", v: "町内事業者紹介・工房運営について" },
          { k: "媒体保管", v: "工房にてご覧いただけます" },
        ],
      },
    ],
  },
  {
    slug: "shonan-cable-network-feature",
    number: "N°01",
    title: "湘南ケーブルTV 放映",
    excerpt:
      "湘南ケーブルネットワーク(SCN)で、自動車コーティングの事例として施工特集を放映いただきました。県内ローカル番組でのご紹介です。",
    category: "メディア掲載",
    dateISO: "2017-07-20",
    dateLabel: "2017年放映",
    readMinutes: 3,
    author: { name: "KNIGHTS 工房", role: "受付担当" },
    image: {
      src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=80",
      alt: "クロームベゼルと光学グレードのクリアレンズに復元されたランプアセンブリ",
    },
    body: [
      {
        type: "p",
        text: "湘南ケーブルネットワーク(SCN)さんに、自動車コーティングの事例として施工特集を放映いただきました。県内ローカル番組で、湘南エリアにお住まいの方々が主な視聴者層です。",
      },
      { type: "h2", text: "特集の内容" },
      {
        type: "p",
        text: "番組では、ガラスコーティングとヘッドライト再生の工程を中心に、施工前後の比較や、所要時間・費用の目安についてご紹介いただきました。取材のなかで「どこまでが補正で、どこからが再塗装か」という線引きについてもお話しする機会があり、普段は口頭でしかお伝えできない判断の基準を映像で補足できた点が、工房としてもありがたい機会となりました。",
      },
      {
        type: "quote",
        text: "自動車を『見た目の仕事』としてではなく『層の仕事』として扱う——番組内で繰り返しお伝えした考え方です。",
      },
      {
        type: "specs",
        title: "放送媒体",
        items: [
          { k: "放送局", v: "湘南ケーブルネットワーク(SCN)" },
          { k: "内容", v: "ガラスコーティング・ヘッドライト再生" },
          { k: "視聴エリア", v: "神奈川県 湘南地域" },
          { k: "映像保管", v: "放送局にて保管" },
        ],
      },
      {
        type: "p",
        text: "この取材以降も、県内各メディアからの取材のお話をいただいております。施工の撮影時間を事前に確保できる場合に限り、個別にご相談のうえお受けしています。",
      },
    ],
  },
];

/** All posts, newest first. */
export function getAllPosts(): JournalPost[] {
  return [...POSTS].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export function getFeaturedPost(): JournalPost | undefined {
  return POSTS.find((p) => p.featured);
}

export function getNonFeaturedPosts(): JournalPost[] {
  return getAllPosts().filter((p) => !p.featured);
}

export function getPostBySlug(slug: string): JournalPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Related posts: all posts except the one at `slug`, newest first. */
export function getRelatedPosts(slug: string, limit = 3): JournalPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}
