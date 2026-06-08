/**
 * Renders a JSON-LD <script> tag for structured data / rich results.
 *
 * Usage:
 *   import JsonLd from "@/components/JsonLd";
 *   import { buildLocalBusinessSchema } from "@/lib/schema";
 *
 *   <JsonLd schema={buildLocalBusinessSchema()} />
 *
 * For multiple schemas on one page pass an array:
 *   <JsonLd schema={[buildLocalBusinessSchema(), buildWebSiteSchema()]} />
 */

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Next.js 15 allows dangerouslySetInnerHTML on <script> in Server Components.
      // JSON.stringify is safe here — schema values come from our own data files.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
