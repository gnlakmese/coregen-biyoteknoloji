import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-2 text-xs font-medium text-slate-500">
        <li>
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Ana Sayfa</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}