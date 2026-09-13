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
  const useCover = category.imageFit === "cover";

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

        {category.features && category.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: 40, maxWidth: 760 }}
          >
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: 20,
                color: background ? "#ffffff" : colors.ink,
                textShadow: background ? "0 1px 8px rgba(0,0,0,0.6)" : "none",
                borderBottom: `1px solid ${background ? "rgba(255,255,255,0.25)" : colors.line}`,
                paddingBottom: 12,
              }}
            >
              Key Design Features
            </h2>
            <div style={{ marginTop: 8 }}>
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
                    borderBottom: `1px solid ${background ? "rgba(255,255,255,0.12)" : colors.line}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      color: background ? "#a8c1e8" : colors.blue,
                      minWidth: 24,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 15,
                        fontFamily: fonts.display,
                        color: background ? "#ffffff" : colors.ink,
                        textShadow: background ? "0 1px 6px rgba(0,0,0,0.5)" : "none",
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        margin: "6px 0 0",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: background ? "rgba(255,255,255,0.85)" : colors.inkSoft,
                        textShadow: background ? "0 1px 6px rgba(0,0,0,0.5)" : "none",
                      }}
                    >
                      {f.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

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
              gridTemplateColumns: useCover
                ? "repeat(auto-fit, minmax(340px, 1fr))"
                : "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 32,
              marginTop: 48,
              alignItems: useCover ? "stretch" : "start",
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
                  border: useCover
                    ? `1px solid ${background ? "rgba(255,255,255,0.2)" : colors.line}`
                    : "none",
                  background: useCover ? colors.paperRaised : "transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  aspectRatio: useCover ? "4 / 3" : undefined,
                  width: useCover ? "auto" : "fit-content",
                  margin: useCover ? 0 : "0 auto",
                }}
              >
                <motion.img
                  src={src}
                  alt={`${category.title} ${i + 1}`}
                  initial={{ scale: useCover ? 1.15 : 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: "100%",
                    height: useCover ? "100%" : "auto",
                    maxHeight: useCover ? "none" : "80vh",
                    objectFit: useCover ? "cover" : "contain",
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