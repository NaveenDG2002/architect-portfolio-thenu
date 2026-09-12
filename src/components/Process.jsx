import { process } from "../data/content";

export default function Process() {
  return (
    <section id="a-03" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs text-blue">A-03 &mdash; Process</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
          From site sketch to construction set.
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {process.map((step) => (
            <div
              key={step.label}
              className="grid grid-cols-1 gap-2 py-6 md:grid-cols-4 md:items-baseline md:gap-8"
            >
              <h3 className="font-display text-lg text-ink md:col-span-1">
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft md:col-span-3">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}