/**
 * Emits a JSON-LD script tag.
 *
 * `dangerouslySetInnerHTML` is required here because structured data must
 * be raw text inside a script tag. The input is our own compile-time
 * constant, never user input, and `<` is escaped so the payload cannot
 * break out of the script element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
