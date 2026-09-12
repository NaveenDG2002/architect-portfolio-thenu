import { motion } from "framer-motion";
import { works } from "../data/content";
import WorkSheet from "./WorkSheet";

export default function Works() {
  return (
    <section id="a-02" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-xs text-blue">A-02 &mdash; Selected Works</p>
          <p className="font-mono text-xs text-ink-soft">{works.length} sheets</p>
        </div>

        <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
          Studio work, 2023&ndash;2025
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {works.map((work) => (
            <WorkSheet key={work.code} work={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}