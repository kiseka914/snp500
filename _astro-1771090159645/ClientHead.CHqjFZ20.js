import {
  _ as c,
  d,
  a as l,
  o as m,
} from "./_plugin-vue_export-helper.OdBywvhY.js";
import { _ as p } from "./siteModulesConstants.oOf1HLbO.js";
import {
  c as u,
  a as g,
  g as f,
  e as w,
  f as s,
} from "./addDocumentElements.DQi7Fjlb.js";
const _ = [".zyrosite.space", ".zyrosite.com"],
  h = ({ domain: e, pageNoindex: t }) => {
    const o = window.origin.includes("https://latest-user-app.zyro.com"),
      n = _.some((a) => window.origin.includes(a)),
      i = p.some((a) => window.origin.includes(a)),
      r = !!t || ((n || i) && !0);
    return {
      shouldRedirectToCanonical:
        e &&
        e.toLowerCase() !== window.location.hostname.toLowerCase() &&
        !n &&
        !i &&
        !0 &&
        !u() &&
        !o,
      noindex: r,
    };
  },
  x = d({
    props: {
      pageNoindex: { type: Boolean, default: !1 },
      domain: { type: String, default: "" },
      canonicalUrl: { type: String, default: "" },
      siteMeta: { type: Object, default: null },
    },
    setup(e) {
      const { shouldRedirectToCanonical: t, noindex: o } = h({
        domain: e.domain,
        pageNoindex: e.pageNoindex,
      });
      if (e.siteMeta) {
        const n = g(window.location.hostname),
          i = f(`z-cookies-consent-${n}`) !== "0";
        w({ siteMeta: e.siteMeta, areCookiesAllowed: i });
      }
      return (
        !e.pageNoindex &&
          o &&
          s({
            type: "element",
            tagName: "meta",
            properties: { name: "robots", content: "noindex" },
          }),
        t &&
          s({
            type: "element",
            tagName: "meta",
            properties: {
              "http-equiv": "refresh",
              content: `0; url=${e.canonicalUrl}`,
            },
          }),
        s({
          type: "element",
          tagName: "meta",
          properties: {
            name: "generator",
            content: "Hostinger Website builder",
          },
        }),
        { shouldRedirectToCanonical: t, noindex: o }
      );
    },
  });
function y(e, t, o, n, i, r) {
  return m(), l("div");
}
const W = c(x, [["render", y]]);
export { W as default };
