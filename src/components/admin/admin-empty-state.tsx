import { Info } from "lucide-react";

export function AdminEmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <Info className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <p className="font-medium text-foreground">{title}</p>
        <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
