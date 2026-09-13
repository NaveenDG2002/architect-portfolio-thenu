import { Outlet, useParams } from "react-router-dom";
import WorksSubNav from "../components/WorksSubNav";
import { backgroundBySlug } from "../utils/loadImages";

export default function Works() {
  const { slug } = useParams();
  const hasBackground = Boolean(backgroundBySlug[slug]);

  return (
    <section style={{ padding: "96px 24px 64px", maxWidth: 1152, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <WorksSubNav light={hasBackground} />
      </div>

      <Outlet />
    </section>
  );
}