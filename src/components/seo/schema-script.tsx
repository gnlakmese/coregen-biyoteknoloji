/**
 * Bir JSON-LD nesnesini `<script type="application/ld+json">` olarak
 * render eder. Arama motorlarının (ve AI-search sistemlerinin) sayfa
 * içeriğini yapılandırılmış olarak okuyabilmesi için kullanılır.
 */
export function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD şeması, kullanıcı girdisi içermez
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
