import { NavLink } from "react-router-dom";
import { workCategories } from "../data/content";
import { fonts } from "../styles/theme";

export default function WorksSubNav({ light }) {
  const lineColor = light ? "rgba(255,255,255,0.25)" : "#cbc7bd";
  const inactiveColor = light ? "rgba(255,255,255,0.75)" : "#5a5852";
  const activeColor = light ? "#ffffff" : "#2f4b7c";

  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        borderBottom: `1px solid ${lineColor}`,
        marginTop: 40,
      }}
    >
      {workCategories.map((cat) => (
        <NavLink
          key={cat.slug}
          to={`/works/${cat.slug}`}
          style={({ isActive }) => ({
            fontFamily: fonts.mono,
            fontSize: 12,
            padding: "10px 14px",
            color: isActive ? activeColor : inactiveColor,
            borderBottom: isActive ? `2px solid ${activeColor}` : "2px solid transparent",
            marginBottom: -1,
          })}
        >
          {cat.title}
        </NavLink>
      ))}
    </nav>
  );
}