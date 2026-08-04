import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { pageMetadata } from "@/config/site";
import { areasOfWorkContent } from "@/content/areas-of-work";

export const metadata: Metadata = {
  title: pageMetadata.areasOfWork.title,
  description: pageMetadata.areasOfWork.description,
  openGraph: { title: pageMetadata.areasOfWork.title, description: pageMetadata.areasOfWork.description },
};

export default function AreasOfWorkPage() {
  const content = areasOfWorkContent.en;

  return (
    <article className="detail-page areas-of-work-page">
      <PageHero content={content.hero} />
      <PageCta content={content.cta} />
    </article>
  );
}
