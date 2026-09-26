import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Section, S as Eyebrow, b as Button, m as steps, v as whatsappHref, x as Container } from "./router-DcTdLgOB.mjs";
import { t as PageHero } from "./page-hero-DDrSpcjP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approach-D6_Yxi7H.js
var import_jsx_runtime = require_jsx_runtime();
function ApproachPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our approach",
			title: "Learn. Practise. Create. Receive feedback. Improve. Demonstrate.",
			lead: "Practical learning sits at the centre of the academy. Students are not asked to memorise a tool. They are asked to make work, get it marked, and make it better."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4 lg:grid-cols-2",
			children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[auto_1fr] gap-5 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl font-semibold text-cream",
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: s.body
				})] })]
			}, s.n))
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Project-based" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold sm:text-4xl",
						children: "Every week should produce something you can show."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Promotional videos, social cuts, short-form content, motion graphics, animated designs, business films, personal-brand pieces, and collaborative group ads. Projects give learners something practical to demonstrate their ability."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappHref(),
								children: "Join the next batch"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								children: "See student projects"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/live-classes.jpg",
					alt: "Live classroom with students on a video call and a lesson outline",
					className: "h-80 w-full rounded-xl object-cover"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: "Career & freelancing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Portfolio, personal branding, outreach, pitching, client communication, delivery, and turning a skill into income. Learning the tool is one half. Positioning it is the other."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: "Follow-up support"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Mentorship continues after the live session. Students receive guidance through the ten weeks — and previous batches return for new classes at no extra fee."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: "Collaborative rooms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Group A and Group B briefs, shared workspaces, and peer review. Teamwork is part of the curriculum, because client work is rarely solo."
				})] })
			]
		}) })
	] });
}
//#endregion
export { ApproachPage as component };
