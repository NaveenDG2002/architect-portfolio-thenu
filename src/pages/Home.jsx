import { motion } from "framer-motion";
import { profile } from "../data/content";
import { colors, fonts } from "../styles/theme";
import profilePhoto from "../assets/profile.jpg";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div>
      {/* Hero / Cover */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          paddingTop: 96,
        }}
      >
        {/* Decorative drifting band, echoing a geological / architectural section */}
        <div
          className="agate-drift"
          style={{
            position: "absolute",
            top: "-10%",
            right: "-8%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${colors.blue}22, transparent 60%), radial-gradient(circle at 70% 70%, ${colors.redline}22, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1152,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
            padding: "0 24px",
            flex: 1,
          }}
        >
          <div>
            <p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}>
              A-00 — Cover Sheet
            </p>
            <h1
              style={{
                fontFamily: fonts.display,
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                lineHeight: 0.95,
                marginTop: 16,
                color: colors.ink,
              }}
            >
              {profile.name}
            </h1>
            <p style={{ marginTop: 24, maxWidth: 420, fontSize: 18, color: colors.inkSoft }}>
              {profile.role} at {profile.school}. Working drawings, study models, and
              studio proposals from a tropical climate.
            </p>
          </div>

          <motion.svg
            viewBox="0 0 320 320"
            fill="none"
            stroke={colors.ink}
            strokeWidth="1.2"
            initial="hidden"
            animate="visible"
            style={{ width: "100%" }}
          >
            <motion.path custom={0} variants={draw} d="M40 220 L160 260 L280 220 L160 180 Z" />
            <motion.path
              custom={1}
              variants={draw}
              d="M40 220 L40 140 L160 100 L280 140 L280 220"
            />
            <motion.path custom={2} variants={draw} d="M160 100 L160 180" />
            <motion.path
              custom={2.4}
              variants={draw}
              d="M90 190 L90 235 M230 190 L230 235"
              stroke={colors.redline}
            />
            <motion.path
              custom={3}
              variants={draw}
              d="M120 150 L200 150 L200 195 L120 195 Z"
              stroke={colors.blue}
              strokeDasharray="4 3"
            />
          </motion.svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, borderTop: `1px solid ${colors.line}` }}>
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              padding: "16px 24px",
              fontFamily: fonts.mono,
              fontSize: 11,
              color: colors.inkSoft,
            }}
          >
            <span>Sheet A-00</span>
            <span>Scale N.T.S.</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </section>

      {/* Profile, folded into the same landing page */}
      <section style={{ padding: "80px 24px 96px", maxWidth: 1152, margin: "0 auto" }}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.1}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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

          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.3}
              style={{ marginTop: 24, fontSize: 18, lineHeight: 1.65, color: colors.inkSoft, maxWidth: 560 }}
            >
              {profile.statement}
            </motion.p>

            <motion.dl
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
    </div>
  );
}