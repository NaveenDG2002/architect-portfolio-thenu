import { process } from "../data/content";
import { colors, fonts } from "../styles/theme";

export default function Process() {
  return (
    <section style={{ padding: "64px 24px", maxWidth: 1152, margin: "0 auto" }}>
      <p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}>A-03 — Process</p>
      <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginTop: 16, maxWidth: 480 }}>
        From site sketch to construction set.
      </h2>
      <div style={{ marginTop: 48, borderTop: `1px solid ${colors.line}` }}>
        {process.map((step) => (
          <div key={step.label} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, padding: "24px 0", borderBottom: `1px solid ${colors.line}` }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: 18 }}>{step.label}</h3>
            <p style={{ fontSize: 14, color: colors.inkSoft, lineHeight: 1.5, gridColumn: "span 3" }}>{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}