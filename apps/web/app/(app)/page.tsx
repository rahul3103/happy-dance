"use client";
import { CaseStudiesBlock } from "@/app/(app)/components/case-studies-block";
import { FeaturesBlock } from "@/app/(app)/components/features-block";
import { HeroBanner } from "@/app/(app)/components/hero-banner";
import { HighlightsBlock } from "@/app/(app)/components/highlights-block";
import { IntroBlock } from "@/app/(app)/components/intro-block";
import { RichTextBlock } from "@/app/(app)/components/rich-text-block";
import { StatisticsBlock } from "./components/statistics-block";
import { AwardsBlock } from "./components/awards-block";
import { BlogPostsBlock } from "./components/blog-posts-block";
import { CtaBlock } from "./components/cta-block";
import { ScrollTop } from "./components/scroll-top";
import { useRef } from "react";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroBanner />
      <div ref={containerRef}>
        <IntroBlock />
        <HighlightsBlock />
        <FeaturesBlock />
        <CaseStudiesBlock />
        <StatisticsBlock />
        <RichTextBlock />
        <AwardsBlock />
        <BlogPostsBlock />
        <CtaBlock />
      </div>
      <ScrollTop containerRef={containerRef} />
    </>
  );
}
