import { profile } from "../data/content";

export default function Profile() {
  return (
    <section id="a-01" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs text-blue">A-01 &mdash; Profile</p>

        <div className="mt-8 grid gap-10 md:grid-cols-5 md:gap-16">
          <h2 className="font-display text-3xl leading-tight text-ink md:col-span-2 md:text-4xl">
            Working between drawing and climate.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-soft md:col-span-3 md:text-lg">
            {profile.statement}
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
          <div>
            <dt className="font-mono text-xs text-ink-soft">Studying</dt>
            <dd className="mt-1 text-sm text-ink">{profile.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink-soft">Institution</dt>
            <dd className="mt-1 text-sm text-ink">{profile.school}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink-soft">Based in</dt>
            <dd className="mt-1 text-sm text-ink">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-ink-soft">Focus</dt>
            <dd className="mt-1 text-sm text-ink">
              Tropical &amp; residential design
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}