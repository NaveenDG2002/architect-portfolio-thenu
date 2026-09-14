import { colors, fonts } from "../styles/theme";

export default function DevCredit() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        right: 16,
        zIndex: 50,
        fontFamily: fonts.mono,
        fontSize: 11,
        color: colors.inkSoft,
        background: "rgba(14, 16, 19, 0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        padding: "6px 10px",
        border: `1px solid ${colors.line}`,
        pointerEvents: "none",
      }}
    >
      Developer — Naveen @Hometeam
    </div>
  );
}