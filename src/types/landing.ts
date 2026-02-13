export type IconTone = "steel" | "cyan" | "slate" | "teal";

export type LandingCardBadge = {
  text: string;
  tone?: "neutral" | "live";
};

export type LandingCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  iconTone: IconTone;
  badge?: LandingCardBadge;
  fullWidth?: boolean;
  external?: boolean;
};

export type LandingSection = {
  id: string;
  title: string;
  cards: LandingCard[];
};

export type LandingExternalLink = {
  label: string;
  href: string;
  icon:
    | "portfolio"
    | "github"
    | "linkedin"
    | "notion"
    | "instagram"
    | "facebook"
    | "threads";
};

export type LandingContact = {
  label: string;
  value: string;
  href: string;
};

export type LandingContent = {
  brandName: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: {
    title: string;
    paragraphs: string[];
    note: string;
  };
  sections: LandingSection[];
  externalLinks: LandingExternalLink[];
  contacts: LandingContact[];
  copyrightOwner: string;
};
