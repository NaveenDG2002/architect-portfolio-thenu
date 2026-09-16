import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { industrialCategories } from "../data/content";
import { colors, fonts } from "../styles/theme";

const industrialImages = import.meta.glob(
  "../assets/industrial/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, import: "default" }
);

function getIndustrialImage(filename) {
  const key = Object.keys(industrialImages).find((k) => k.endsWith(`/${filename}`));
  return key ? industrialImages[key] : null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

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

  const isWorkingExperience = slug === "working-experience";
  const mentorImg = category.mentorImage ? getIndustrialImage(category.mentorImage) : null;
  const logoImg = category.companyLogo ? getIndustrialImage(category.companyLogo) : null;

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: 40 }}
    >
      {isWorkingExperience ? (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ marginBottom: 32 }}
          >
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                color: colors.ink,
                margin: 0,
              }}
            >
              {category.role}
            </h2>
            <p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue, marginTop: 8 }}>
              {category.period}
            </p>
            <p style={{ fontSize: 15, color: colors.inkSoft, marginTop: 12, maxWidth: 600 }}>
              {category.mentor}
            </p>
          </motion.div>

          {(mentorImg || logoImg) && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.1}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                marginBottom: 40,
              }}
            >
              {mentorImg && (
                <div
                  style={{
                    border: `1px solid ${colors.line}`,
                    background: colors.paperRaised,
                    width: 180,
                    aspectRatio: "4 / 5",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={mentorImg}
                    alt="Arct. Ruchitha Wijegunawardhana"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              )}

              {logoImg && (
  <div
    style={{
      border: `1px solid ${colors.line}`,
      background: colors.paperRaised,
      width: 180,
      aspectRatio: "4 / 5",
      overflow: "hidden",
    }}
  >
    <img
      src={logoImg}
      alt="Sunken Construction"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  </div>
)}
            </motion.div>
          )}

          {category.points && category.points.length > 0 && (
            <div style={{ maxWidth: 700 }}>
              {category.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "12px 0",
                    borderBottom: `1px solid ${colors.line}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      color: colors.blue,
                      minWidth: 20,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: colors.inkSoft }}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </motion.div>
  );
}