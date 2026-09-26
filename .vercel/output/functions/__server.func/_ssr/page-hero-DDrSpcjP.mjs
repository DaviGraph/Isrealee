import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as Eyebrow, x as Container } from "./router-DcTdLgOB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DDrSpcjP.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border bg-linear-to-b from-bg to-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl font-display text-4xl font-semibold sm:text-5xl md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: lead
				})
			]
		})
	});
}
//#endregion
export { PageHero as t };
