import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 font-mono text-[11px] text-ink-soft md:flex-row md:items-center md:justify-between md:px-10">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Drawn in React &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}