import Link from "next/link";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import type { JobPosting } from "@/types/career";

export function JobPostingCard({ job, delay = 0 }: { job: JobPosting; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/kurumsal/kariyer/${job.slug}`}
        className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="space-y-2">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {job.employmentType}
            </span>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary">
          Detayları Gör
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
