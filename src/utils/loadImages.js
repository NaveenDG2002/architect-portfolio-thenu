const workModules = import.meta.glob("../assets/works/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const industrialModules = import.meta.glob("../assets/industrial/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const backgroundModules = import.meta.glob("../assets/backgrounds/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

function groupBySlug(modules) {
  const grouped = {};
  for (const path in modules) {
    const match = path.match(/\/([^/]+)\/[^/]+\.(jpg|jpeg|png|webp)$/i);
    const slug = match ? match[1] : "misc";
    if (!grouped[slug]) grouped[slug] = [];
    grouped[slug].push(modules[path]);
  }
  return grouped;
}

// Backgrounds are one file per category, named after the slug directly
// (e.g. src/assets/backgrounds/room-design.jpg), so this keys by filename instead.
function mapByFilename(modules) {
  const map = {};
  for (const path in modules) {
    const match = path.match(/\/([^/]+)\.(jpg|jpeg|png|webp)$/i);
    if (match) map[match[1]] = modules[path];
  }
  return map;
}

export const workImagesBySlug = groupBySlug(workModules);
export const industrialImagesBySlug = groupBySlug(industrialModules);
export const backgroundBySlug = mapByFilename(backgroundModules);