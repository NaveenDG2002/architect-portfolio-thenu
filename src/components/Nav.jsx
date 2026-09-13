import { NavLink } from "react-router-dom";
import { colors, fonts } from "../styles/theme";

const links = [
  { to: "/",  label: "Cover" },
  { to: "/works", label: "Academic" },
  { to: "/process",  label: "Process" },
  { to: "/contact",  label: "Contact" },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: `1px solid ${colors.line}`,
        background: colors.paper,
        padding: "16px 24px",
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
        <NavLink to="/" style={{ fontFamily: fonts.display, fontSize: 14, color: colors.ink }}>
          Thenu Amarathunge
        </NavLink>

        <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontFamily: fonts.mono,
                fontSize: 12,
                color: isActive ? colors.blue : colors.inkSoft,
              })}
            >
              {l.code} <span style={{ fontFamily: fonts.body }}>{l.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}