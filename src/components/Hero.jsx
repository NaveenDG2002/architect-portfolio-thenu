import { motion } from "framer-motion";
import { profile } from "../data/content";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, duration: 1.1, ease: "easeInOut" },
      opacity: { delay: i * 0.15, duration: 0.3 },
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="a-00"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24"
    >
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 px-6 md:grid-cols-5 md:px-10">
        <div className="md:col-span-3">
          <p className="font-mono text-xs text-blue">A-00 &mdash; Cover Sheet</p>
          <h1 className="mt-4 font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink md:text-[5.2vw]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            {profile.role} at {profile.school}. Working drawings, study
            models, and studio proposals from a tropical climate.
          </p>
        </div>

        {/* Animated line drawing: a simplified courtyard-house axonometric */}
        <div className="hidden md:col-span-2 md:block">
          <motion.svg
            viewBox="0 0 320 320"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
            className="w-full"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              custom={0}
              variants={draw}
              d="M40 220 L160 260 L280 220 L160 180 Z"
            />
            <motion.path
              custom={1}
              variants={draw}
              d="M40 220 L40 140 L160 100 L280 140 L280 220"
            />
            <motion.path
              custom={2}
              variants={draw}
              d="M160 100 L160 180"
            />
            <motion.path
              custom={2.4}
              variants={draw}
              d="M90 190 L90 235 M230 190 L230 235"
              stroke="var(--color-blue)"
            />
            <motion.path
              custom={3}
              variants={draw}
              d="M120 150 L200 150 L200 195 L120 195 Z"
              stroke="var(--color-redline)"
              strokeDasharray="4 3"
            />
          </motion.svg>
        </div>
      </div>

      {/* Title block, matching a real drawing-sheet footer */}
      <div className="relative border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-4 font-mono text-[11px] text-ink-soft md:grid-cols-4 md:px-10">
          <span>Sheet A-00</span>
          <span>Scale N.T.S.</span>
          <span>{profile.location}</span>
          <span className="text-right md:text-left">
            Rev. {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}