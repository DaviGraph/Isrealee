import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Section, S as Eyebrow, b as Button, n as SITE, v as whatsappHref, x as Container } from "./router-DcTdLgOB.mjs";
import { t as PageHero } from "./page-hero-DDrSpcjP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partnerships-DTZ5Ai9t.js
var import_jsx_runtime = require_jsx_runtime();
var offers = [
	{
		title: "Businesses & organisations",
		body: "Corporate digital skills, video production training, digital literacy, youth empowerment, group training, workshops, bootcamps, and creative project collaboration."
	},
	{
		title: "Schools & students",
		body: "Practical skills alongside academic education. Help learners explore creative and digital career paths without abandoning their studies."
	},
	{
		title: "Institutions & communities",
		body: "Digital entrepreneurship programmes, industry partnerships, and custom curricula as technology and hiring needs change."
	}
];
function PartnershipsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Partnerships",
			title: "Bring the studio into your team, school, or community.",
			lead: "Israelee Academy works with organisations that want digital skills inside their people — not a one-off motivational talk."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "grid gap-6 md:grid-cols-3",
			children: offers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: o.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: o.body
				})]
			}, o.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Start a conversation" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Tell us who you train, and what they need to ship."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Call or WhatsApp ",
							SITE.phoneDisplay,
							". Ask for institutional training, a workshop, or a custom batch. We will reply with a practical plan — duration, outcomes, and how corrections work at group scale."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappHref("Hello Coach Israel, I represent an organisation and would like to discuss partnership or group training with Israelee Academy."),
							children: "Partner with us"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { PartnershipsPage as component };
