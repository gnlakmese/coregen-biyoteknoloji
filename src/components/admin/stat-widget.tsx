import { iconMap } from "@/lib/icon-map";

export function StatWidget({
  label,
  value,
  icon,
  note,
}: {
  label: string;
  value: string | number;
  icon: string;
  note?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-3 font-display text-2xl font-semibold text-foreground">{value}</p>
      {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}
