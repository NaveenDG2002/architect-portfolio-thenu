import { profile } from "../data/content";
import { colors, fonts } from "../styles/theme";

export default function Contact() {
  const mailtoLink = "mailto:" + profile.email;
  return (
    <section style={{ padding: "64px 24px", maxWidth: 1152, margin: "0 auto" }}>
      <p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue }}>A-04 — Contact</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginTop: 32 }}>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 5vw, 3rem)", maxWidth: 420 }}>
          Open to internships and studio collaborations.
        </h2>
        <a href={mailtoLink} style={{ border: `1px solid ${colors.ink}`, padding: "12px 24px", fontSize: 14 }}>
          {profile.email}
        </a>
      </div>
      <div style={{ display: "flex", gap: 24, borderTop: `1px solid ${colors.line}`, paddingTop: 32, marginTop: 48 }}>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.inkSoft }}>
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}