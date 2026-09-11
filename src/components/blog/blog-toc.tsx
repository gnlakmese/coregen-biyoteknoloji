import { slugify } from "@/lib/utils";

export function BlogTableOfContents({ headings }: { headings: string[] }) {
  return (
    <nav aria-label="İçindekiler" className="rounded-xl border border-border bg-card p-5">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        İçindekiler
      </p>
      <ol className="space-y-2 text-sm">
        {headings.map((heading, index) => (
          <li key={heading}>
            <a
              href={`#${slugify(heading)}`}
              className="text-muted-foreground hover:text-primary"
            >
              {index + 1}. {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
