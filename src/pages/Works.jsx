import { Outlet, useParams } from "react-router-dom";
import WorksSubNav from "../components/WorksSubNav";
import { backgroundBySlug } from "../utils/loadImages";
import { colors, fonts } from "../styles/theme";

export default function Works() {
  const { slug } = useParams();
  const hasBackground = Boolean(backgroundBySlug[slug]);

  return (
    <section style={{ padding: "96px 24px 64px", maxWidth: 1152, margin: "0 auto", position: "relative" }}>
      <p
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          color: hasBackground ? "#a8c1e8" : colors.blue,
          position: "relative",
          zIndex: 1,
        }}
      >
        A-02 — Selected Works
      </p>
      <h1
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginTop: 16,
          maxWidth: 560,
          color: hasBackground ? "#ffffff" : colors.ink,
          position: "relative",
          zIndex: 1,
          textShadow: hasBackground ? "0 2px 12px rgba(0,0,0,0.5)" : "none",
        }}
      >
        Studio work across scale and typology
      </h1>

      <div style={{ position: "relative", zIndex: 1 }}>
        <WorksSubNav light={hasBackground} />
      </div>

      <Outlet />
    </section>
  );
}