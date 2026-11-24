import { jsonLd } from "@/lib/seo";

/** Renders schema.org structured data. Server component; no client JS. */
export const JsonLd = ({ data }: { data: unknown }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
);
