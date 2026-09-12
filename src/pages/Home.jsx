import { motion } from "framer-motion";
import { profile } from "../data/content";
import { colors, fonts } from "../styles/theme";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.15, duration: 1.1 }, opacity: { delay: i * 0.15, duration: 0.3 } },
  }),
};

export default function Home() {
  return (
    <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}>A-00 — Cover Sheet</p>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 0.95, marginTop: 16 }}>
            {profile.name}
          </h1>
          <p style={{ marginTop: 24, maxWidth: 420, fontSize: 18, color: colors.inkSoft }}>
            {profile.role} at {profile.school}. Working drawings, study models, and studio proposals from a tropical climate.
          </p>
        </div>

        <motion.svg viewBox="0 0 320 320" fill="none" stroke={colors.ink} strokeWidth="1.2" initial="hidden" animate="visible" style={{ width: "100%" }}>
          <motion.path custom={0} variants={draw} d="M40 220 L160 260 L280 220 L160 180 Z" />
          <motion.path custom={1} variants={draw} d="M40 220 L40 140 L160 100 L280 140 L280 220" />
          <motion.path custom={2} variants={draw} d="M160 100 L160 180" />
          <motion.path custom={2.4} variants={draw} d="M90 190 L90 235 M230 190 L230 235" stroke={colors.blue} />
          <motion.path custom={3} variants={draw} d="M120 150 L200 150 L200 195 L120 195 Z" stroke={colors.redline} strokeDasharray="4 3" />
        </motion.svg>
      </div>

      <div style={{ borderTop: `1px solid ${colors.line}`, marginTop: 48, paddingTop: 16, maxWidth: 1152, marginLeft: "auto", marginRight: "auto", width: "100%", display: "flex", flexWrap: "wrap", gap: 16, fontFamily: fonts.mono, fontSize: 11, color: colors.inkSoft }}>
        <span>Sheet A-00</span>
        <span>Scale N.T.S.</span>
        <span>{profile.location}</span>
      </div>
    </section>
  );
}