import { motion } from "framer-motion";
import { colors } from "../styles/theme";

export default function ArchBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Drifting blueprint grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: "-50px",
          backgroundImage: `
            linear-gradient(${colors.line} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.line} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.28,
        }}
      />

      {/* Slow ambient glow, drifting */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.blue}1f, transparent 65%)`,
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.redline}22, transparent 65%)`,
        }}
      />

      {/* Scanning line, like a drafting light sweeping the sheet */}
      <motion.div
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${colors.blue}55, transparent)`,
        }}
      />

      {/* Floating drafting compass */}
      <motion.svg
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: "8%", right: "6%", width: 220, height: 220, opacity: 0.14 }}
      >
        <circle cx="100" cy="100" r="70" fill="none" stroke={colors.ink} strokeWidth="0.6" />
        <circle cx="100" cy="100" r="45" fill="none" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="100" y1="20" x2="100" y2="180" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="20" y1="100" x2="180" y2="100" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="100" y1="100" x2="165" y2="60" stroke={colors.blue} strokeWidth="1.4" />
        <circle cx="100" cy="100" r="3" fill={colors.blue} />
        <circle cx="165" cy="60" r="3" fill={colors.blue} />
      </motion.svg>

      {/* Floating T-square, gently bobbing */}
      <motion.svg
        viewBox="0 0 220 140"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "12%", left: "5%", width: 200, opacity: 0.12 }}
      >
        <path
          d="M10 120 L10 20 L210 20 L210 45 L35 45 L35 120 Z"
          fill="none"
          stroke={colors.ink}
          strokeWidth="1.2"
        />
        <line x1="35" y1="55" x2="35" y2="120" stroke={colors.ink} strokeWidth="0.5" />
        <line x1="45" y1="55" x2="45" y2="110" stroke={colors.ink} strokeWidth="0.5" />
        <line x1="55" y1="55" x2="55" y2="110" stroke={colors.ink} strokeWidth="0.5" />
      </motion.svg>

      {/* Floating floor-plan fragment */}
      <motion.svg
        viewBox="0 0 240 200"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "48%", left: "-2%", width: 260, opacity: 0.1 }}
      >
        <rect x="20" y="20" width="200" height="160" fill="none" stroke={colors.ink} strokeWidth="1" />
        <line x1="20" y1="90" x2="120" y2="90" stroke={colors.ink} strokeWidth="0.6" />
        <line x1="120" y1="20" x2="120" y2="180" stroke={colors.ink} strokeWidth="0.6" />
        <circle cx="170" cy="130" r="18" fill="none" stroke={colors.blue} strokeWidth="0.8" />
      </motion.svg>
    </div>
  );
}