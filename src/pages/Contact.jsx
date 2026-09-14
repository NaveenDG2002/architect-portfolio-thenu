import { motion } from "framer-motion";
import { Mail, MessageSquare, Link2 } from "lucide-react";
import { profile } from "../data/content";
import { colors, fonts } from "../styles/theme";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const contactLines = [
  { icon: Mail, label: "Email", value: profile.email, href: "mailto:" + profile.email },
  { icon: MessageSquare, label: "WhatsApp", value: profile.whatsapp, href: profile.whatsappLink },
  { icon: Link2, label: "LinkedIn", value: "View profile", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        padding: "96px 24px 64px",
      }}
    >
      {/* Blueprint grid backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(${colors.line} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.line} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />

      {/* Slow drifting radial glow, echoing a drafting lamp */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.blue}22, transparent 65%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Rotating drafting compass, the one signature motion element */}
      <motion.svg
        viewBox="0 0 200 200"
        style={{
          position: "absolute",
          bottom: -40,
          right: -40,
          width: 320,
          height: 320,
          opacity: 0.18,
          zIndex: 0,
          pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="70" fill="none" stroke={colors.ink} strokeWidth="0.6" />
        <circle cx="100" cy="100" r="45" fill="none" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="100" y1="20" x2="100" y2="180" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="20" y1="100" x2="180" y2="100" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="100" y1="100" x2="165" y2="60" stroke={colors.blue} strokeWidth="1.4" />
        <circle cx="100" cy="100" r="3" fill={colors.blue} />
        <circle cx="165" cy="60" r="3" fill={colors.blue} />
      </motion.svg>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1152, margin: "0 auto" }}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}
        >
          A-05 — Contact
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0.1}
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            marginTop: 16,
            maxWidth: 520,
            color: colors.ink,
            lineHeight: 1.1,
          }}
        >
          Open to internships and studio collaborations.
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.25}
          style={{ marginTop: 56, borderTop: `1px solid ${colors.line}`, maxWidth: 640 }}
        >
          {contactLines.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "22px 4px",
                borderBottom: `1px solid ${colors.line}`,
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Icon size={18} color={colors.blue} />
                <span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.inkSoft }}>
                  {label}
                </span>
              </div>
              <span style={{ fontSize: 16, color: colors.ink }}>{value}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0.5}
          style={{
            marginTop: 64,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 24px",
            fontFamily: fonts.mono,
            fontSize: 11,
            color: colors.inkSoft,
          }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}