import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { workCategories } from "../data/content";
import { workImagesBySlug, backgroundBySlug } from "../utils/loadImages";
import { colors, fonts } from "../styles/theme";

function Lightbox({ images, index, onClose, onPrev, onNext, category }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(8, 9, 10, 0.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          width: 44,
          height: 44,
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.05)",
          color: "#fff",
          fontSize: 20,
          fontFamily: fonts.mono,
          cursor: "pointer",
          zIndex: 210,
        }}
      >
        ✕
      </button>

      <span
        style={{
          position: "fixed",
          top: 34,
          left: 24,
          fontFamily: fonts.mono,
          fontSize: 12,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {index + 1} / {images.length} — {category.title}
      </span>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          style={{
            position: "fixed",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 48,
            height: 48,
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            zIndex: 210,
          }}
        >
          ‹
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          style={{
            position: "fixed",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 48,
            height: 48,
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            zIndex: 210,
          }}
        >
          ›
        </button>
      )}

      <motion.img
        key={index}
        src={images[index]}
        alt={`${category.title} ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          maxWidth: "92vw",
          maxHeight: "88vh",
          objectFit: "contain",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      />
    </motion.div>
  );
}

export default function WorksCategory() {
  const { slug } = useParams();
  const category = workCategories.find((c) => c.slug === slug);
  const images = workImagesBySlug[slug] || [];
  const background = backgroundBySlug[slug];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  if (!category) {
    return (
      <p style={{ marginTop: 40, fontFamily: fonts.mono, fontSize: 13, color: colors.inkSoft }}>
        Category not found.
      </p>
    );
  }

  const paragraphs = category.description.split("\n\n");
  const useCover = category.imageFit === "cover";
  const textColor = background ? "#ffffff" : colors.ink;
  const softTextColor = background ? "rgba(255,255,255,0.85)" : colors.inkSoft;
  const lineColor = background ? "rgba(255,255,255,0.2)" : colors.line;
  const shadow = background ? "0 1px 8px rgba(0,0,0,0.6)" : "none";

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
        {category.subtitle && (
          <p
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: background ? "#a8c1e8" : colors.blue,
              marginBottom: 8,
              textShadow: shadow,
            }}
          >
            {category.subtitle}
          </p>
        )}

        {category.meta && category.meta.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 20,
              padding: "20px 0",
              marginBottom: 24,
              borderTop: `1px solid ${lineColor}`,
              borderBottom: `1px solid ${lineColor}`,
              maxWidth: 900,
            }}
          >
            {category.meta.map((m) => (
              <div key={m.label}>
                <p
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    color: background ? "rgba(255,255,255,0.6)" : colors.inkSoft,
                    margin: 0,
                  }}
                >
                  {m.label}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: textColor,
                    marginTop: 4,
                    textShadow: shadow,
                  }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: background ? "#ffffff" : colors.inkSoft,
              marginTop: i === 0 ? 0 : 18,
              maxWidth: 700,
              textShadow: shadow,
              fontFamily: p.split(" ").length <= 6 ? fonts.display : fonts.body,
              fontSize: p.split(" ").length <= 6 ? 22 : 17,
            }}
          >
            {p}
          </p>
        ))}

        {category.quote && (
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{
              margin: "36px 0",
              padding: "4px 0 4px 24px",
              borderLeft: `2px solid ${background ? "#a8c1e8" : colors.blue}`,
              maxWidth: 640,
              fontFamily: fonts.display,
              fontSize: 20,
              lineHeight: 1.5,
              fontStyle: "italic",
              color: textColor,
              textShadow: shadow,
            }}
          >
            {category.quote}
          </motion.blockquote>
        )}

        {category.keywords && category.keywords.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {category.keywords.map((k) => (
              <span
                key={k}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: "6px 12px",
                  border: `1px solid ${lineColor}`,
                  color: softTextColor,
                  textShadow: shadow,
                }}
              >
                {k}
              </span>
            ))}
          </div>
        )}

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
                color: textColor,
                textShadow: shadow,
                borderBottom: `1px solid ${lineColor}`,
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
                    borderBottom: `1px solid ${lineColor}`,
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
                        color: textColor,
                        textShadow: shadow,
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        margin: "6px 0 0",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: softTextColor,
                        textShadow: shadow,
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
              border: `1px dashed ${lineColor}`,
              padding: 40,
              textAlign: "center",
              fontFamily: fonts.mono,
              fontSize: 12,
              color: softTextColor,
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
              alignItems: useCover ? "stretch" : "start",
            }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  border: useCover ? `1px solid ${lineColor}` : "none",
                  background: useCover ? colors.paperRaised : "transparent",
                  overflow: "hidden",
                  cursor: "zoom-in",
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
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    scale: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
                  }}
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

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            category={category}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}