import { motion } from "framer-motion";
import { achievements } from "../data/content";
import { colors, fonts } from "../styles/theme";

const achievementImages = import.meta.glob(
  "../assets/achievements/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, import: "default" }
);

function getAchievementImage(filename) {
  const key = Object.keys(achievementImages).find((k) => k.endsWith(`/${filename}`));
  return key ? achievementImages[key] : null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Achievements() {
  return (
    <section style={{ padding: "96px 24px 96px", maxWidth: 900, margin: "0 auto" }}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}
      >
        A-03 — Achievements
      </motion.p>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={0.1}
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginTop: 16,
          color: colors.ink,
        }}
      >
        Recognition along the way.
      </motion.h1>

      <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 40 }}>
        {achievements.map((a, i) => {
          const img = a.image ? getAchievementImage(a.image) : null;

          return (
            <motion.div
              key={a.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i * 0.15}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{
                display: "grid",
                gridTemplateColumns: img ? "minmax(140px, 200px) 1fr" : "1fr",
                gap: 28,
                alignItems: "start",
                borderTop: `1px solid ${colors.line}`,
                paddingTop: 28,
              }}
            >
              {img && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.1 }}
                  style={{
                    border: `1px solid ${colors.line}`,
                    background: colors.paperRaised,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img}
                    alt={a.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </motion.div>
              )}

              <div>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: colors.blue,
                    letterSpacing: 0.5,
                  }}
                >
                  {a.year}
                </span>
                <h2
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    color: colors.ink,
                    marginTop: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {a.title}
                </h2>
                <p style={{ marginTop: 8, fontSize: 15, color: colors.inkSoft, lineHeight: 1.6 }}>
                  {a.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}