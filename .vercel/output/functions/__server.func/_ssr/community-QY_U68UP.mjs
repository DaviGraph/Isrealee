import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Section, S as Eyebrow, b as Button, f as socials, h as testimonials, n as SITE, x as Container } from "./router-DcTdLgOB.mjs";
import { t as PageHero } from "./page-hero-DDrSpcjP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-QY_U68UP.js
var import_jsx_runtime = require_jsx_runtime();
function CommunityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Community",
			title: "A classroom that stays open after the session ends.",
			lead: "Live classes on WhatsApp and Telegram, group project rooms, Israelee TV tutorials, and a network of people who already walked the ten weeks."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/community-whatsapp.jpg",
				alt: "WhatsApp community channels for Israelee students",
				className: "h-80 w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/live-classes.jpg",
				alt: "Students in a live video class",
				className: "h-80 w-full rounded-xl object-cover"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Reviews" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: "Students, in their own words."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "rounded-xl bg-bg p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-5 text-xs tracking-wide text-cream uppercase",
							children: t.name
						})]
					}, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"/media/chat-1.jpg",
						"/media/chat-2.jpg",
						"/media/chat-3.jpg",
						"/media/chat-4.jpg",
						"/media/chat-5.jpg",
						"/media/reviews.jpg"
					].map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "Student chat testimonial",
						className: "h-64 w-full rounded-xl object-cover"
					}, src))
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/israelee-tv.png",
					alt: "Israelee TV",
					className: "h-16 w-auto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Israelee TV" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: "Daily tutorials for people who want the skill, even before they pay for class."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Graphic design on a smartphone, video animation, folktales, YouTube knowledge, and AI walkthroughs. Smash subscribe — the button is friendly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.youtube.com/@israeliwebunor",
						target: "_blank",
						rel: "noreferrer",
						children: "Watch Israelee TV"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/youtube-channel.jpg",
						alt: "Israelee TV YouTube channel",
						className: "h-56 w-full rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/youtube-subs.jpg",
						alt: "YouTube subscriber community",
						className: "h-56 w-full rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/youtube-reviews.jpg",
						alt: "YouTube comments and reviews",
						className: "h-56 w-full rounded-xl object-cover sm:col-span-2"
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Batch 3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Doctors, lawyers, teachers, pastors, creators."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "Profile of a recent classroom — and a reminder that your background is not a barrier. You are next to fill a box in the new batch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/batch3.jpg",
					alt: "Batch 3 student profiles of Israelee Academy",
					className: "mt-8 w-full rounded-xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"Register: ",
						SITE.phoneDisplay,
						". Then join the rooms where the work actually happens."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: socials.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							children: s.label
						})
					}, s.href))
				})
			] })
		})
	] });
}
//#endregion
export { CommunityPage as component };
