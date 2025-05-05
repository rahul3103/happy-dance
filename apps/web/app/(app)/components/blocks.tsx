"use client";
import { CaseStudiesBlock } from "@/app/(app)/components/case-studies-block";
import { FeaturesBlock } from "@/app/(app)/components/features-block";
import { HeroBanner } from "@/app/(app)/components/hero-banner";
import { HighlightsBlock } from "@/app/(app)/components/highlights-block";
import { IntroBlock } from "@/app/(app)/components/intro-block";
import { RichTextBlock } from "@/app/(app)/components/rich-text-block";
import { StatisticsBlock } from "@/app/(app)/components/statistics-block";
import { AwardsBlock } from "@/app/(app)/components/awards-block";
import { BlogPostsBlock } from "@/app/(app)/components/blog-posts-block";
import { CtaBlock } from "@/app/(app)/components/cta-block";
import { ScrollTop } from "@/app/(app)/components/scroll-top";
import { useRef } from "react";
import { HomepageData } from "@/types/homepage";

export function Blocks({
  hero,
  intro,
  highlights,
  features,
  caseStudies,
  statistics,
  richText,
  awards,
  blog,
  cta,
}: HomepageData) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HeroBanner data={hero} />
      <div ref={containerRef}>
        <IntroBlock data={intro} />
        <HighlightsBlock data={highlights} />
        <FeaturesBlock data={features} />
        <CaseStudiesBlock data={caseStudies} />
        <StatisticsBlock data={statistics} />
        <RichTextBlock data={richText} />
        <AwardsBlock data={awards} />
        <BlogPostsBlock data={blog} />
        <CtaBlock data={cta} />
      </div>
      <ScrollTop containerRef={containerRef} />
    </>
  );
}
