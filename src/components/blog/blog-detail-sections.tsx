import { ImageIcon } from "lucide-react";

import type { BlogTable } from "@/types/blog";

export function BlogTableBlock({ table }: { table: BlogTable }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-base font-semibold text-foreground">{table.title}</h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {table.headers.map((header) => (
                <th key={header} className="px-4 py-2.5 font-medium text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {table.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2.5 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InfographicSuggestion({ description }: { description: string }) {
  return (
    <div className="flex gap-3 rounded-lg border border-dashed border-border bg-brand-tint/30 p-5">
      <ImageIcon className="h-5 w-5 shrink-0 text-brand-magenta" />
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          İnfografik Önerisi
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">{description}</p>
      </div>
    </div>
  );
}

export function SourcesList({ sources }: { sources: string[] }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-semibold text-foreground">Kaynakça</h2>
      <ul className="space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="text-xs leading-relaxed text-muted-foreground">
            {source}
          </li>
        ))}
      </ul>
    </div>
  );
}
