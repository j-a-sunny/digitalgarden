require("dotenv").config();

/**
 * The path the site is served from: "" at a domain root, or something like
 * "/digitalgarden" on a GitHub Pages project site. The garden writes every
 * asset and internal link as a root-absolute path ("/styles/...", "/notes/..."),
 * which only resolves when the site sits at the root of its domain.
 *
 * Sources, in order: an explicit PATH_PREFIX (may be "/garden" or "garden"),
 * then the path component of SITE_BASE_URL (the value actions/configure-pages
 * hands to the build as base_url).
 */
function resolvePathPrefix(env = process.env) {
  let raw = (env.PATH_PREFIX || env.SITE_BASE_URL || "").trim();
  if (!raw) return "";
  if (/^(https?:)?\/\//i.test(raw)) {
    try {
      raw = new URL(raw).pathname;
    } catch {
      return "";
    }
  }
  raw = raw.replace(/\/+$/, "");
  if (raw === "" || raw === "/") return "";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

module.exports = { resolvePathPrefix, PATH_PREFIX: resolvePathPrefix() };
