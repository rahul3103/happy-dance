export type Image = {
  src: string;
  alt: string;
};

export type Author = {
  name: string;
  role: string;
  image: Image;
  link: string;
};

export type BlogPost = {
  id: string;
  title: string;
  image: Image;
  author: Author;
  link: string;
};

export type BlogContent = {
  title: string;
  readMore: string;
  viewAll: {
    text: string;
    href: string;
  };
  posts: BlogPost[];
};

export type Logo = {
  alt: string;
  src: string;
};

export type HeroData = {
  logos: Logo[];
  title: string;
  subtitle: string;
};

export type IntroData = {
  title: string;
  description: string;
  image: Image;
};

export type Highlight = {
  id: string;
  title: string;
  image: string;
  alt: string;
  icon: string;
  iconAlt: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
};

export type Feature = {
  title: string;
  description: string;
  image: Image;
};

export type FeaturesData = {
  title: string;
  backgroundImage: Image;
  features: Feature[];
};

export type Quote = {
  text: string;
  author: string;
  title: string;
};

export type Slide = {
  id: string;
  logo: Image;
  image: Image;
  quote: Quote;
  link: string;
};

export type CaseStudiesData = {
  title: string;
  slides: Slide[];
};

export type Statistic = {
  value: number;
  label: string;
};

export type StatisticsData = {
  title: string;
  statistics: Statistic[];
};

export type RichTextContent = {
  heading: string;
  paragraph: string;
  listItems: string[];
};

export type RichTextData = {
  title: string;
  eyebrow: string;
  image: Image;
  content: RichTextContent;
  cta: {
    text: string;
    href: string;
  };
};

export type Award = {
  id: string;
  title: string;
  icon: string;
};

export type AwardsData = {
  title: string;
  subtitle: string;
  awards: Award[];
};

export type CtaData = {
  title: string;
  description: string;
  image: Image;
  link: string;
  linkText: string;
};

export type HomepageData = {
  hero: HeroData;
  intro: IntroData;
  highlights: Highlight[];
  features: FeaturesData;
  caseStudies: CaseStudiesData;
  statistics: StatisticsData;
  richText: RichTextData;
  awards: AwardsData;
  blog: BlogContent;
  cta: CtaData;
};
