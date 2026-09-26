import { i as __toESM } from "../_runtime.mjs";
import { l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as Check, o as Copy } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as Section, S as Eyebrow, b as Button, f as socials, n as SITE, o as faqs, v as whatsappHref, w as cn, x as Container } from "./router-DcTdLgOB.mjs";
import { t as PageHero } from "./page-hero-DDrSpcjP.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DZx7ZvBy.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DTzl8Ujm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg-subtle px-4 text-base text-fg shadow-none transition-[box-shadow,background-color] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-border bg-bg-subtle px-4 py-3 text-base text-fg transition-[box-shadow,background-color] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Register, ask a question, or send proof of payment.",
			lead: "The fastest path is WhatsApp. Fill the form and we open a message to Coach Israel with your details already written."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentCard, {})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Straight answers."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: f.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
					}, f.q))
				})]
			})
		})
	] });
}
function RegisterForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)("Video Editing & Animation Masterclass");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const fullName = String(fd.get("name") || name || "(name)");
		const tel = String(fd.get("phone") || phone || "(not shared)");
		const note = String(fd.get("message") || message);
		const body = [
			`Hello Coach Israel, my name is ${fullName}.`,
			`Phone: ${tel}.`,
			`I am interested in: ${interest}.`,
			note ? `Message: ${note}` : "",
			"I would like to register / get the next steps for Israelee Academy."
		].filter(Boolean).join(" ");
		window.location.href = whatsappHref(body);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Message" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Write to the academy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Your name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "WhatsApp number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							autoComplete: "tel",
							required: true,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "0803…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "interest",
							children: "I want"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "interest",
							className: "h-11 rounded-md border border-border bg-bg-subtle px-4 text-sm text-fg",
							value: interest,
							onChange: (e) => setInterest(e.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Video Editing & Animation Masterclass" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Graphic design (bonus)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Partnership / group training" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General question" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							value: message,
							onChange: (e) => setMessage(e.target.value),
							placeholder: "Tell us where you are starting from."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full sm:w-auto",
						children: "Continue on WhatsApp"
					})
				]
			})
		]
	});
}
function PaymentCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-cream p-6 text-cream-fg sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-cream-fg/70",
					children: "Pay into"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl font-semibold",
					children: ["Registration is ", SITE.fee]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-cream-fg/70",
							children: "Palmpay"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-1 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-wide",
								children: SITE.palmpay
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
								value: SITE.palmpay,
								label: "account number"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-cream-fg/70",
							children: "Account name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-medium",
							children: SITE.payee
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-cream-fg/70",
							children: "Send proof of payment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-medium",
							children: SITE.phoneDisplay
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8 w-full bg-cream-fg text-cream hover:bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref("Hello Coach Israel, I have made payment for the masterclass. Here is my proof."),
						children: "Send proof on WhatsApp"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold",
					children: "Talk to us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Call",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-cream",
							href: `tel:${SITE.phoneTel}`,
							children: SITE.phoneDisplay
						}),
						". Follow the work while you wait."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-sm text-muted hover:text-fg",
						children: s.label
					}) }, s.href))
				})
			]
		})]
	});
}
function CopyButton({ value, label }) {
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "inline-flex size-11 items-center justify-center rounded-full bg-cream-fg/10 text-cream-fg",
		"aria-label": `Copy ${label}`,
		onClick: async () => {
			try {
				await navigator.clipboard.writeText(value);
				setDone(true);
				toast.success("Copied Palmpay number");
				window.setTimeout(() => setDone(false), 1500);
			} catch {
				toast.error("Could not copy. Long-press the number instead.");
			}
		},
		children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
	});
}
//#endregion
export { ContactPage as component };
