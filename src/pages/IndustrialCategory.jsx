import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { industrialCategories } from "../data/content";
import { colors, fonts } from "../styles/theme";

export default function IndustrialCategory() {
  const { slug } = useParams();
  const category = industrialCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <p style={{ marginTop: 40, fontFamily: fonts.mono, fontSize: 13, color: colors.inkSoft }}>
        Category not found.
      </p>
    );
  }

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: 40 }}
    >
      <p style={{ fontSize: 17, lineHeight: 1.75, color: colors.inkSoft, maxWidth: 700 }}>
        {category.description}
      </p>

      {category.features && category.features.length > 0 && (
        <div style={{ marginTop: 40, maxWidth: 760 }}>
          {category.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: "flex",
                gap: 16,
                padding: "16px 0",
                borderBottom: `1px solid ${colors.line}`,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: colors.blue,
                  minWidth: 24,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p style={{ margin: 0, fontSize: 15, fontFamily: fonts.display, color: colors.ink }}>
                  {f.title}
                </p>
                <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.6, color: colors.inkSoft }}>
                  {f.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}