import { NavLink } from "react-router-dom";
import { industrialCategories } from "../data/content";
import { fonts } from "../styles/theme";

export default function IndustrialSubNav() {
  const lineColor = "#cbc7bd";
  const inactiveColor = "#5a5852";
  const activeColor = "#2f4b7c";

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
      {industrialCategories.map((cat) => (
        <NavLink
          key={cat.slug}
          to={`/industrial/${cat.slug}`}
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