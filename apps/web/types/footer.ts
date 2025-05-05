// ============================================================================
// Footer Types
// ============================================================================

/** Represents a single footer link */
export type FooterLink = {
  text: string;
  href: string;
};

/** Represents a navigation section in the footer */
export type FooterNavSection = {
  title: string;
  links: FooterLink[];
};

/** Represents a social media link */
export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

/** Represents the copyright section */
export type Copyright = {
  text: string;
  builtBy: string;
};

/** Represents the complete footer data structure */
export type FooterConfig = {
  navigation: FooterNavSection[];
  bottomLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyright: Copyright;
};
