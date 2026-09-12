import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { workCategories } from "../data/content";
import { workImagesBySlug, backgroundBySlug } from "../utils/loadImages";
import { colors, fonts } from "../styles/theme";

export default function WorksCategory() {
  const { slug } = useParams();
  const category = workCategories.find((c) => c.slug === slug);
  const images = workImagesBySlug[slug] || [];
  const background = backgroundBySlug[slug];

  if (!category) {
    return (
      <p style={{ marginTop: 40, fontFamily: fonts.mono, fontSize: 13, color: colors.inkSoft }}>
        Category not found.
      </p>
    );
  }

  const paragraphs = category.description.split("\n\n");

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        marginTop: 40,
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        position: "relative",
      }}
    >
      {background && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -2,
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background:
                "linear-gradient(180deg, rgba(10,11,12,0.78) 0%, rgba(10,11,12,0.6) 40%, rgba(10,11,12,0.72) 100%)",
            }}
          />
        </>
      )}

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: background ? "64px 24px 96px" : "0 0",
        }}
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: background ? "#ffffff" : colors.inkSoft,
              marginTop: i === 0 ? 0 : 18,
              maxWidth: 700,
              textShadow: background ? "0 1px 8px rgba(0,0,0,0.6)" : "none",
              fontFamily: p.split(" ").length <= 6 ? fonts.display : fonts.body,
              fontSize: p.split(" ").length <= 6 ? 22 : 17,
            }}
          >
            {p}
          </p>
        ))}

        {images.length === 0 ? (
          <div
            style={{
              marginTop: 32,
              border: `1px dashed ${background ? "rgba(255,255,255,0.35)" : colors.line}`,
              padding: 40,
              textAlign: "center",
              fontFamily: fonts.mono,
              fontSize: 12,
              color: background ? "#f0eee8" : colors.inkSoft,
            }}
          >
            Add images to src/assets/works/{category.slug}/
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 32,
              marginTop: 48,
              alignItems: "start",
            }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                                style={{
                  border: "none",
                  background: "transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                <motion.img
                  src={src}
                  alt={`${category.title} ${i + 1}`}
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}