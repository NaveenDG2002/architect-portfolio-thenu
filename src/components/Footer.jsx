import { colors, fonts } from "../styles/theme";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.line}`,
        padding: "32px 24px",
        marginTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.inkSoft,
        }}
      >
        <span>© {new Date().getFullYear()} Thenu Rajapakshe</span>
        <span>Developed by Naveen — Hometeam</span>
      </div>
    </footer>
  );
}