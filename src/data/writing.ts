export interface WritingItem {
  title: string;
  kind: "Article" | "Talk";
  venue: string;
  year: string;
  href?: string;
  lang?: string;
}

export const writing: WritingItem[] = [
  {
    title: "Variables de entorno en Android nativo",
    kind: "Article",
    venue: "Lean Mind",
    year: "2022",
    href: "https://leanmind.es/es/blog/variables-entorno-android-nativo",
    lang: "es",
  },
  {
    title: "Introduction to Software Development with Flutter",
    kind: "Talk",
    venue: "CESINF",
    year: "2021",
  },
  {
    title: "My experience as Software Developer",
    kind: "Talk",
    venue: "CESINF",
    year: "2022",
  },
];
