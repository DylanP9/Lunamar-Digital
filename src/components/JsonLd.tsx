/**
 * Renders JSON-LD <script> tags for structured data / rich results.
 *
 * One <script type="application/ld+json"> is rendered per schema object.
 * Google requires separate script blocks — a JSON array in a single block
 * is not reliably parsed by the Rich Results Test or Googlebot.
 *
 * Usage:
 *   import JsonLd from "@/components/JsonLd";
 *   import { buildLocalBusinessSchema } from "@/lib/schema";
 *
 *   // Single schema
 *   <JsonLd schema={buildLocalBusinessSchema()} />
 *
 *   // Multiple schemas — renders one <script> tag each
 *   <JsonLd schema={[buildLocalBusinessSchema(), buildWebSiteSchema()]} />
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaObject = Record<string, any>;

interface JsonLdProps {
  schema: SchemaObject | SchemaObject[];
}

export default function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={s["@id"] ?? s["@type"] ?? i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
