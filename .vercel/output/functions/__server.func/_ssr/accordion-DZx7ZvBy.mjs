import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, l as require_react, n as Header, r as Item, t as Content2, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as ChevronDown } from "../_libs/lucide-react.mjs";
import { w as cn } from "./router-DcTdLgOB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accordion-DZx7ZvBy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold transition-colors hover:text-cream [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 text-muted transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
//#endregion
export { AccordionTrigger as i, AccordionContent as n, AccordionItem as r, Accordion as t };
