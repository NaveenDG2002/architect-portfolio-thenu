import { ArrowUpRight } from "lucide-react";

export default function WorkSheet({ work }) {
  return (
    <article className="group flex flex-col border border-line bg-paper-raised">
      {/* Drawing area placeholder — swap for real plan/render images */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-paper">
        <div className="grid-field absolute inset-0 opacity-60" />
        <span className="absolute bottom-3 right-3 font-mono text-[10px] text-ink-soft">
          {work.scale}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl leading-snug text-ink">
            {work.title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue"
            aria-hidden="true"
          />
        </div>

        <p className="text-sm leading-relaxed text-ink-soft">{work.brief}</p>

        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2">
          {work.tags.map((tag) => (
            <li key={tag} className="font-mono text-[11px] text-ink-soft">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Title block */}
      <div className="grid grid-cols-3 gap-2 border-t border-line px-6 py-3 font-mono text-[10px] text-ink-soft">
        <span>{work.code}</span>
        <span className="text-center">{work.typology}</span>
        <span className="text-right">{work.year}</span>
      </div>
    </article>
  );
}