import { motion } from "framer-motion";
import { profile } from "../data/content";
import { colors, fonts } from "../styles/theme";
import profilePhoto from "../assets/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Profile() {
  return (
    <section style={{ padding: "96px 24px 64px", maxWidth: 1152, margin: "0 auto" }}>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 0.5, color: colors.blue }}
      >
        A-01 — Profile
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 320px) 1fr",
          gap: 64,
          marginTop: 40,
          alignItems: "start",
        }}
      >
        {/* Photo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          style={{
            border: `1px solid ${colors.line}`,
            background: colors.paperRaised,
            aspectRatio: "4 / 5",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={profilePhoto}
            alt={profile.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "grayscale(15%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              fontFamily: fonts.mono,
              fontSize: 10,
              color: colors.inkSoft,
              background: colors.paper,
              padding: "2px 6px",
            }}
          >
            Fig. 01
          </span>
        </motion.div>

        {/* Text */}
        <div>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            style={{
              fontFamily: fonts.display,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              lineHeight: 1.1,
              color: colors.ink,
              margin: 0,
            }}
          >
            Working between drawing and climate.
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            style={{
              marginTop: 24,
              fontSize: 18,
              lineHeight: 1.65,
              color: colors.inkSoft,
              maxWidth: 560,
            }}
          >
            {profile.statement}
          </motion.p>

          <motion.dl
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              borderTop: `1px solid ${colors.line}`,
              paddingTop: 28,
              marginTop: 40,
            }}
          >
            {[
              ["Studying", profile.role],
              ["Institution", profile.school],
              ["Based in", profile.location],
              ["Focus", "Tropical & residential design"],
            ].map(([dt, dd]) => (
              <div key={dt}>
                <dt
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    color: colors.inkSoft,
                  }}
                >
                  {dt}
                </dt>
                <dd style={{ marginTop: 6, fontSize: 15, color: colors.ink }}>{dd}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}