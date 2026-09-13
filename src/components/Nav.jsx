import { NavLink, useLocation } from "react-router-dom";
import { colors, fonts } from "../styles/theme";
import { backgroundBySlug } from "../utils/loadImages";
import { profile } from "../data/content";

const links = [
  { to: "/", label: "Cover" },
  { to: "/works", label: "Academic" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();
  const match = location.pathname.match(/^\/works\/([^/]+)/);
  const slug = match ? match[1] : null;
  const onPhotoBackground = Boolean(slug && backgroundBySlug[slug]);

  const navBg = onPhotoBackground ? "rgba(10, 11, 12, 0.35)" : colors.paper;
  const borderColor = onPhotoBackground ? "rgba(255,255,255,0.15)" : colors.line;
  const textColor = onPhotoBackground ? "#ffffff" : colors.ink;
  const softColor = onPhotoBackground ? "rgba(255,255,255,0.75)" : colors.inkSoft;
  const activeColor = onPhotoBackground ? "#a8c1e8" : colors.blue;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: `1px solid ${borderColor}`,
        background: navBg,
        backdropFilter: onPhotoBackground ? "blur(12px)" : "none",
        WebkitBackdropFilter: onPhotoBackground ? "blur(12px)" : "none",
        padding: "16px 24px",
        transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <NavLink
          to="/"
          style={{ fontFamily: fonts.display, fontSize: 14, color: textColor }}
        >
          {profile.name}
        </NavLink>

        <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontFamily: fonts.mono,
                fontSize: 12,
                color: isActive ? activeColor : softColor,
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}