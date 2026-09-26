import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Check, r as Play, s as Clapperboard, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as Section, S as Eyebrow, b as Button, h as testimonials, i as bonuses, m as steps, n as SITE, o as faqs, p as stats, v as whatsappHref, x as Container, y as whyChoose } from "./router-DcTdLgOB.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DZx7ZvBy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LZOBmbbz.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flagship, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApproachPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BonusPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/founder-hero.jpg",
				alt: "",
				className: "h-full w-full object-cover object-[center_20%] opacity-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-bg/75 via-bg/55 to-bg" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "anim-in mb-5 inline-flex items-center gap-2 rounded-full bg-bg-subtle/80 px-3 py-1.5 text-xs tracking-[0.18em] text-cream uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { className: "size-3.5" }), "10-week intensive · Video · Animation · AI"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "anim-in font-display text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl",
					children: [
						"Learn a skill.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-cream",
							children: "Build your confidence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block",
							children: "Create your opportunities."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "anim-in-delay mt-6 max-w-xl text-lg text-muted",
					children: "Israelee Academy is a practical digital skills studio. You learn by doing — classwork, corrections, live sessions, and projects you can show a client."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "anim-in-delay mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappHref(),
							children: ["Join the masterclass", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							children: "Explore courses"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-sm text-muted",
					children: [
						SITE.fee,
						" · ",
						SITE.duration,
						" · Send proof of payment to ",
						SITE.phoneDisplay
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/founder.jpg",
						alt: `${SITE.founder}, founder of Israelee Academy`,
						className: "aspect-[4/5] w-full rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3 px-3 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold",
							children: SITE.founder
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: SITE.founderRole
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.youtube.com/@israeliwebunor",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex size-11 items-center justify-center rounded-full bg-cream text-cream-fg",
							"aria-label": "Watch Israelee TV on YouTube",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-4" })
						})]
					})]
				})
			})]
		})]
	});
}
function Ticker() {
	const items = [
		"Now enrolling — Video Editing & Animation Masterclass",
		"Live classes on WhatsApp and Telegram",
		"CapCut Premium included",
		"Certificate of completion",
		"Previous batches join new batches free"
	];
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border bg-cream text-cream-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker flex w-max gap-10 py-3 text-sm font-semibold tracking-wide uppercase",
			children: row.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10",
				children: [t, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-crimson",
					children: "/"
				})]
			}, `${t}-${i}`))
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "grid grid-cols-2 gap-6 sm:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold text-cream sm:text-4xl",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: s.label
				})]
			}, s.label))
		})
	});
}
function AboutStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who we are" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold sm:text-4xl md:text-5xl",
				children: "A studio-school for people who want to make work, not collect certificates."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Israelee Academy equips students, professionals, entrepreneurs, and creators with practical skills for a digital economy. Training combines structured instruction with hands-on practice, assignments, projects, feedback, and mentorship." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not believe students should simply watch tutorials. The path is learn, practise, create, receive feedback, improve, and demonstrate." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							children: ["About the academy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				]
			})]
		})
	});
}
function Flagship() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Flagship programme" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl font-display text-3xl font-semibold sm:text-4xl md:text-5xl",
				children: "Video Editing & Animation Masterclass"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-md text-muted",
				children: [
					"Ten weeks. Live coaching. Immediate corrections. Group projects. ",
					SITE.fee,
					" to register."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				"Editing workflow, cutting, and arrangement",
				"Motion graphics, text, and visual effects",
				"Colour correction and grading",
				"Audio, sound design, and music",
				"Storytelling for ads, vlogs, and brands",
				"Export, portfolio, and client delivery"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-cream" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed",
					children: item
				})]
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/courses",
					children: ["Full curriculum & bonuses", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		})
	] }) });
}
function ApproachPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we teach" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
				children: "Learn. Practise. Create. Improve."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: steps.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-bg-elevated p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-cream",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: s.body
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/approach",
						children: ["The full method", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			})
		] })
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Israelee" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
			children: "Education should not end with knowledge. It should lead to ability."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: whyChoose.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: w.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: w.body
				})]
			}, w.title))
		})
	] }) });
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Student work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: "Made in class. Shown in public."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					children: ["All projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/classwork.jpg",
					alt: "Classwork and assignment submissions with live corrections",
					className: "h-64 w-full rounded-xl object-cover md:col-span-2 md:h-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/live-classes.jpg",
					alt: "Practical live classes with students on WhatsApp and Telegram",
					className: "h-64 w-full rounded-xl object-cover md:h-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/batch3.jpg",
					alt: "Batch 3 students of the Video Editing Masterclass",
					className: "h-56 w-full rounded-xl object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/certificates.jpg",
					alt: "Certificates of completion awarded to graduates",
					className: "h-56 w-full rounded-xl object-cover md:col-span-2"
				})
			]
		})] })
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Student voices" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: "What happens after the first assignment."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "flex flex-col justify-between rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: [
						"“",
						t.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-6 text-xs tracking-wide text-cream uppercase",
					children: t.name
				})]
			}, t.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/community",
					children: ["More reviews", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		})
	] }) });
}
function BonusPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Included with registration" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl font-display text-3xl font-semibold sm:text-4xl",
				children: "Bonuses that used to be separate courses."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: bonuses.slice(0, 3).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl bg-bg shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: b.image,
						alt: "",
						className: "h-44 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: b.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: b.body
						})]
					})]
				}, b.title))
			})
		] })
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: "Before you send proof of payment."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "w-full",
			children: faqs.slice(0, 5).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: f.q,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
			}, f.q))
		})]
	}) });
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-xl bg-cream px-6 py-12 text-cream-fg sm:px-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.22em] uppercase",
					children: "Ready when you are"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-5xl",
					children: "Start the ten weeks. Leave with a skill you can charge for."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-xl text-sm sm:text-base",
					children: [
						"Pay ",
						SITE.fee,
						" to Palmpay ",
						SITE.palmpay,
						" · ",
						SITE.payee,
						". Then send your receipt to",
						" ",
						SITE.phoneDisplay,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "bg-cream-fg text-cream hover:bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappHref(),
							children: ["Register on WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-cream-fg/20 text-cream-fg hover:bg-cream-fg/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Payment details"
						})
					})]
				})
			]
		}) })
	});
}
//#endregion
export { Home as component };
