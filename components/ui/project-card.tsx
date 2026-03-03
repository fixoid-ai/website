import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  tags?: string[];
  category?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", tags, category, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-primary/20",
          className
        )}
        {...props}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          {category && (
            <span className="text-[0.65rem] font-semibold uppercase tracking-[2px] text-primary font-mono mb-1">
              {category}
            </span>
          )}
          <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted-fg leading-relaxed line-clamp-3">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[0.65rem] font-mono bg-glow border border-primary/10 text-muted-fg rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300">
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
