import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Section, S as Eyebrow, b as Button, s as graduates, v as whatsappHref, x as Container } from "./router-DcTdLgOB.mjs";
import { t as PageHero } from "./page-hero-DDrSpcjP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certification-DdSzqxXc.js
var import_jsx_runtime = require_jsx_runtime();
function CertificationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Certification",
			title: "The certificate shows you finished. Your projects show what you can do.",
			lead: "Students who complete the required programme receive a Certificate of Completion in Video Editing and Animation from Israelee Academy."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/certificates.jpg",
				alt: "Certificates of completion awarded to previous students",
				className: "w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What it recognizes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Dedication and proficiency in editing, animation, and post-production."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "After the 10-week programme, graduates are recognized for the skills they have acquired — and for the work they submitted, revised, and presented."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "We believe the real value is not only the paper. The certificate is a marker. The portfolio is the proof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref(),
						children: "Enrol for the next certificate cycle"
					})
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Recent graduates" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Names from the wall."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: graduates.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg bg-bg px-4 py-4 text-sm shadow-[var(--shadow-border)]",
						children: name
					}, name))
				})
			] })
		})
	] });
}
//#endregion
export { CertificationPage as component };
