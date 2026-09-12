import { Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  const mailtoLink = "mailto:" + profile.email;

  return (
    <section id="a-04" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs text-blue">A-04 Contact</p>

        <div className="mt-8 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-md font-display text-3xl leading-tight text-ink md:text-5xl">
            Open to internships and studio collaborations.
          </h2>

          <a href={mailtoLink} className="group flex items-center gap-3 border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-8">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-mono text-xs text-ink-soft transition-colors hover:text-blue">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}