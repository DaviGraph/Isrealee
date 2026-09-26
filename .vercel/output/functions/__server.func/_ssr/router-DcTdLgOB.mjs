import { i as __toESM } from "../_runtime.mjs";
import { c as Slot, l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as MessageCircle, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/container-DeaMRPuO.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function Section({ className, children, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-16 sm:py-24", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-xs font-semibold tracking-[0.22em] text-cream uppercase",
		children
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DcTdLgOB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			cream: "bg-cream text-cream-fg hover:bg-fg",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-bg-subtle",
			ghost: "bg-transparent text-fg hover:bg-bg-subtle",
			muted: "bg-bg-subtle text-fg hover:bg-bg-elevated"
		},
		size: {
			sm: "h-10 px-4 text-sm [&_svg]:size-4",
			md: "h-11 px-5 text-sm [&_svg]:size-4",
			lg: "h-12 px-6 text-base [&_svg]:size-5"
		}
	},
	defaultVariants: {
		variant: "cream",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var SITE = {
	name: "Israelee Academy",
	shortName: "Israelee",
	tagline: "Learn a skill. Build your confidence. Create your opportunities.",
	description: "A practical digital skills and creative education academy. Video editing, animation, and real-world projects — with corrections, mentorship, and a certificate.",
	phoneDisplay: "0903 172 0349",
	phoneTel: "+2349031720349",
	whatsapp: "2349031720349",
	palmpay: "7073418229",
	payee: "Iwebunor Chibuzor Israel",
	fee: "₦10,000",
	duration: "10 weeks",
	students: "350+",
	founder: "Iwebunor Israel",
	founderRole: "Founder & Digital Skills Instructor"
};
function whatsappHref(message) {
	const text = encodeURIComponent(message ?? "Hello Coach Israel, I want to register for the Video Editing & Animation Masterclass at Israelee Academy.");
	return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
var socials = [
	{
		label: "YouTube",
		href: "https://www.youtube.com/@israeliwebunor"
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/it_israel_iwebunor"
	},
	{
		label: "X",
		href: "https://x.com/IsraelIwebunor"
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/iwebunor-israel-806a40281"
	},
	{
		label: "Telegram",
		href: "https://t.me/Iwebunorisrael"
	},
	{
		label: "WhatsApp Channel",
		href: "https://whatsapp.com/channel/0029VaANCCmF1YlLGbnoCG0D"
	}
];
var nav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Courses",
		to: "/courses"
	},
	{
		label: "Approach",
		to: "/approach"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Certification",
		to: "/certification"
	},
	{
		label: "Community",
		to: "/community"
	},
	{
		label: "Partnerships",
		to: "/partnerships"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var stats = [
	{
		value: "350+",
		label: "Students trained"
	},
	{
		value: "10",
		label: "Weeks of coaching"
	},
	{
		value: "₦10k",
		label: "Registration fee"
	},
	{
		value: "Live",
		label: "WhatsApp & Telegram class"
	}
];
var whyChoose = [
	{
		title: "Practical learning",
		body: "Training is built around making work, not watching tutorials. You leave with projects, not just notes."
	},
	{
		title: "Beginner-friendly",
		body: "Start from the fundamentals and build toward professional workflow, even if you have never edited before."
	},
	{
		title: "Assignments & corrections",
		body: "Classwork is submitted, reviewed, and corrected. Mistakes become part of the method."
	},
	{
		title: "Follow-up support",
		body: "Learning does not end when the live session ends. Mentorship continues through the ten weeks."
	},
	{
		title: "Collaborative projects",
		body: "Students work in groups, learn from one another, and ship ads, vlogs, and client-style briefs together."
	},
	{
		title: "Certification that follows skill",
		body: "A certificate of completion is awarded. Your portfolio is what proves what you can do."
	}
];
var steps = [
	{
		n: "01",
		title: "Learn",
		body: "Concepts, tools, techniques, and professional workflows are introduced clearly."
	},
	{
		n: "02",
		title: "Practise",
		body: "Follow demonstrations and practise immediately, on your phone or computer."
	},
	{
		n: "03",
		title: "Create",
		body: "Turn the lesson into an actual project — ads, vlogs, motion, brand films."
	},
	{
		n: "04",
		title: "Submit",
		body: "Assignments and classwork are submitted for review the same week."
	},
	{
		n: "05",
		title: "Receive corrections",
		body: "Immediate corrections, explanations, and guidance where you got stuck."
	},
	{
		n: "06",
		title: "Improve",
		body: "Revise the work. Repeat until the cut, the grade, and the story hold."
	},
	{
		n: "07",
		title: "Demonstrate",
		body: "Show the skill through practical projects and a final piece you can publish."
	}
];
var curriculum = [
	"Video editing fundamentals & workflow",
	"Cutting, arrangement, and pacing",
	"Transitions, effects, and motion graphics",
	"Animation fundamentals & text animation",
	"Visual effects",
	"Colour correction and colour grading",
	"Audio editing, sound effects, and music",
	"Composition, exporting, and rendering",
	"Creative storytelling",
	"Professional post-production workflow",
	"Practical project development"
];
var includes = [
	"Access to previous recordings of batches 1, 2, 3 and more",
	"Engaging practical live sessions and expert-led classes",
	"Facebook monetization, optimization, and strategic content",
	"10 weeks mentorship after the workshop, plus consultation during the programme",
	"Certificate of completion",
	"YouTube growth course used to grow a channel organically past 5,000 subscribers",
	"WhatsApp course on building a paying community"
];
var bonuses = [
	{
		title: "CapCut Premium",
		body: "Registered students get CapCut Pro access. Previous batches still enjoy the benefit.",
		image: "/media/bonus-capcut.jpg"
	},
	{
		title: "Graphic design course",
		body: "Learn to design on your smartphone and produce work clients actually pay for.",
		image: "/media/bonus-graphics.jpg"
	},
	{
		title: "YouTube monetization",
		body: "Build on YouTube, read analytics, and earn from your content.",
		image: "/media/bonus-youtube.jpg"
	},
	{
		title: "Facebook monetization",
		body: "Work with the algorithm and earn from Facebook — including payment setup guidance.",
		image: "/media/bonus-facebook.jpg"
	},
	{
		title: "WhatsApp course",
		body: "Build a paying community, grow status views, and sell without shouting.",
		image: "/media/bonus-whatsapp.jpg"
	},
	{
		title: "Resource vault",
		body: "Graphic design, video animation, Canva, WhatsApp automation, and premium course access.",
		image: "/media/bonus-resources.jpg"
	}
];
var programmes = [
	{
		title: "Video Editing & Animation Masterclass",
		level: "Beginner to professional",
		length: "10 weeks",
		fee: "₦10,000",
		body: "Flagship programme. Fundamentals through post-production, live classes, assignments, group projects, and a certificate.",
		featured: true
	},
	{
		title: "Smartphone Graphic Design",
		level: "Beginner to advanced",
		length: "Self-paced + live",
		fee: "Included as a bonus",
		body: "PixelLab, Canva, and professional layout — design that looks standard, not makeshift.",
		featured: false
	},
	{
		title: "YouTube Growth & Monetization",
		level: "Beginner to intermediate",
		length: "Bonus course",
		fee: "Included",
		body: "Channel setup, analytics, consistency, and the same strategies that grew Israelee TV.",
		featured: false
	},
	{
		title: "AI for Creators",
		level: "All levels",
		length: "Inside the masterclass",
		fee: "Included",
		body: "Use AI image and video tools to scale editing, ads, and animation without losing taste.",
		featured: false
	},
	{
		title: "Content Creation Masterclass",
		level: "All levels",
		length: "Workshop",
		fee: "Contact",
		body: "Make content that converts — story, hook, picture, and offer working as one.",
		featured: false
	},
	{
		title: "Digital Marketing & Social Media",
		level: "Beginner to intermediate",
		length: "Workshop",
		fee: "Contact",
		body: "Position a skill, find clients, and run ads that people actually respond to.",
		featured: false
	}
];
var values = [
	{
		title: "Excellence",
		body: "High standards in training and in the work students publish."
	},
	{
		title: "Practicality",
		body: "Skills that can be used on a brief, a client, or a personal brand this week."
	},
	{
		title: "Creativity",
		body: "Students are pushed to think, not copy. Original ideas are the point."
	},
	{
		title: "Growth",
		body: "Learning is a continuous journey. Previous batches return for free."
	},
	{
		title: "Discipline",
		body: "Consistency, deadlines, and responsibility — the same as a studio."
	},
	{
		title: "Innovation",
		body: "New tools, AI workflows, and methods are welcomed, then practised."
	},
	{
		title: "Community",
		body: "Students grow faster when they collaborate, share, and correct one another."
	},
	{
		title: "Integrity",
		body: "Professionalism, honesty, and respect in class and with clients."
	}
];
var audience = [
	"Students and undergraduates",
	"Graduates exploring a digital career",
	"Entrepreneurs and business owners",
	"Content creators and social media managers",
	"Freelancers and aspiring professionals",
	"Stay-at-home parents building a skill",
	"Pastors, teachers, doctors, lawyers, and other professionals",
	"Anyone willing to learn, practise, and improve"
];
var outcomes = [
	"Create content and personal-brand films",
	"Support businesses with ads and motion",
	"Work with clients and creative teams",
	"Freelance with a real portfolio",
	"Offer digital services professionally",
	"Start a digital business"
];
var testimonials = [
	{
		quote: "From start to finish, the course was well-structured, beginner-friendly, and incredibly impactful. It took me step-by-step through animation, storytelling, transitions, sound syncing, and even pro-level editing tricks I had never imagined I could pull off.",
		name: "Graduate, Video Animation Course"
	},
	{
		quote: "What I loved most was how practical the course was. It wasn't just theory; it pushed me to create as I learned. I saw real progress in my skills with each project.",
		name: "Content creator, student review"
	},
	{
		quote: "I walked in curious, and walked out equipped. If you've been thinking about learning animation, stop hesitating. This course is absolutely worth it.",
		name: "Batch graduate"
	},
	{
		quote: "Using the course I have been able to produce whiteboard animation, 3D animation, and 2D animation. I am developing myself as a video animator by attending other workshops and implementing on my own.",
		name: "AI content creator"
	},
	{
		quote: "Just can't believe I'm using CapCut Pro for free. I can use all the Pro features I've been wanting. The premium is sweet.",
		name: "King Nuel"
	},
	{
		quote: "Following the WhatsApp course I grew my channel from 196 to 267 in less than two weeks. Consistency and discipline pay more than perfection.",
		name: "WhatsApp marketing student"
	}
];
var graduates = [
	"Okechukwu Daberechi Ruth",
	"Akinyoye Ibukunola Esther",
	"Adaitire Oghenebrume",
	"Olarinde Oluwatobi",
	"Azeez Ololade Taiwo",
	"Balogun Sheffu",
	"Ademoh Tohibath",
	"Rebecca Charity Ayuba",
	"Eniola Michael"
];
var faqs = [
	{
		q: "How long is the masterclass?",
		a: "Ten weeks of intensive coaching, with live practical classes on WhatsApp and Telegram, assignments, and follow-up mentorship."
	},
	{
		q: "How much does it cost?",
		a: `Registration is ${SITE.fee}. Pay into Palmpay ${SITE.palmpay} (${SITE.payee}) and send proof of payment to ${SITE.phoneDisplay}.`
	},
	{
		q: "Do I need prior experience?",
		a: "No. Beginners start from the fundamentals. If you already edit, the programme still pushes you into professional workflow, AI, and client work."
	},
	{
		q: "What device do I need?",
		a: "A smartphone is enough for a large part of the training (CapCut, PixelLab, Canva). A laptop is welcome if you have one."
	},
	{
		q: "Is there a certificate?",
		a: "Yes. Students who complete the required training receive a Certificate of Completion in Video Editing and Animation from Israelee Academy."
	},
	{
		q: "Are classes live?",
		a: "Yes. Practical live classes run with students on WhatsApp and Telegram. You ask questions, submit work, and get corrections — not a folder of abandoned videos."
	},
	{
		q: "What bonuses are included?",
		a: "CapCut Premium, graphic design, YouTube and Facebook monetization, WhatsApp community building, previous batch recordings, AI tools, and more — for registered students."
	},
	{
		q: "Can previous students join a new batch?",
		a: "Yes. Students from earlier batches may join every new batch at no extra fee."
	}
];
var projects = [
	{
		title: "Classwork & assignment review",
		body: "Immediate corrections and follow-up on submitted cuts, chats, and client-style briefs.",
		image: "/media/classwork.jpg"
	},
	{
		title: "Live classes",
		body: "Practical sessions with students on WhatsApp and Telegram — attendance, feedback, and studio energy.",
		image: "/media/live-classes.jpg"
	},
	{
		title: "Student reviews",
		body: "Written testimonials after completing the video editing and animation masterclass.",
		image: "/media/reviews.jpg"
	},
	{
		title: "Client work in the wild",
		body: "A student-produced ads video that earned a real product gift from a client the editor had never met.",
		image: "/media/client-chat.jpg"
	},
	{
		title: "Batch 3",
		body: "Doctors, lawyers, teachers, pastors, creators, and business owners — one classroom.",
		image: "/media/batch3.jpg"
	},
	{
		title: "Certificates awarded",
		body: "Completion certificates in video editing, animation, and post-production.",
		image: "/media/certificates.jpg"
	}
];
var videos = [
	{
		title: "First-time student vlog",
		src: "/media/student-vlog.mp4",
		caption: "A 10-week student film on what creativity actually looks like."
	},
	{
		title: "Group A & B brand ads",
		src: "/media/group-ads.mp4",
		caption: "Team assignment: Sprite and Coca-Cola style commercials."
	},
	{
		title: "Group promo for the academy",
		src: "/media/group-promo.mp4",
		caption: "Students producing a recruitment film for the masterclass."
	},
	{
		title: "Behind the scenes",
		src: "/media/group-bts.mp4",
		caption: "Group chats, planning, cuts, and thank-you films for the tutor."
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo-mark.png",
						alt: "",
						className: "size-10 rounded-md object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm leading-none font-semibold tracking-[0.18em] sm:text-base",
							children: "ISRAELEE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[0.65rem] tracking-[0.22em] text-muted uppercase",
							children: "Academy"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("rounded-full px-3 py-2 text-sm transition-colors duration-150", pathname === item.to ? "bg-bg-subtle text-cream" : "text-muted hover:text-fg"),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappHref(),
							children: "Register"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-full text-fg xl:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-1 py-4",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: cn("rounded-lg px-3 py-3 text-base", pathname === item.to ? "bg-bg-subtle text-cream" : "text-fg"),
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappHref(),
						onClick: () => setOpen(false),
						children: ["Register · ", SITE.fee]
					})
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/logo-mark.png",
								alt: "",
								className: "size-12 rounded-md object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg tracking-[0.16em]",
								children: "ISRAELEE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted uppercase",
								children: "Academy"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
							children: SITE.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm text-muted",
							children: "Practical digital skills for video editors, animators, and AI creators. Live classes, corrections, projects, certificate."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-cream uppercase",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-muted hover:text-fg",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-cream uppercase",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${SITE.phoneTel}`,
							className: "text-muted hover:text-fg",
							children: SITE.phoneDisplay
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-muted",
							children: [
								"Palmpay ",
								SITE.palmpay,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								SITE.payee
							]
						}),
						socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-muted hover:text-fg",
							children: s.label
						}) }, s.href))
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border pb-24 sm:pb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Coach ",
					SITE.founder,
					" · Digital skills, practised in public."
				] })]
			})
		})]
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappHref(),
		target: "_blank",
		rel: "noreferrer",
		className: "fixed right-4 bottom-20 z-40 inline-flex size-14 items-center justify-center rounded-full bg-cream text-cream-fg shadow-[0_10px_30px_rgb(0_0_0_/_0.35)] transition-transform duration-150 ease-out hover:bg-fg active:scale-[0.96] sm:right-6",
		"aria-label": "Chat on WhatsApp to register",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
	});
}
var styles_default = "/assets/styles-D_M_lVYF.css";
var APP_NAME = "Israelee Academy";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Israelee Academy — a 10-week practical video editing, animation, and AI creator masterclass. Live classes, corrections, projects, and a certificate."
			},
			{
				name: "theme-color",
				content: "#08142C"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
						theme: "dark",
						position: "top-center",
						toastOptions: { className: "font-sans" }
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-LZOBmbbz.mjs");
var Route$9 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("../_-Bku-fH1N.mjs");
var Route$8 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about-DUOhBZOs.mjs");
var Route$7 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./approach-D6_Yxi7H.mjs");
var Route$6 = createFileRoute("/approach")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./certification-DdSzqxXc.mjs");
var Route$5 = createFileRoute("/certification")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./community-QY_U68UP.mjs");
var Route$4 = createFileRoute("/community")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-DTzl8Ujm.mjs");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./courses-LehgdV3d.mjs");
var Route$2 = createFileRoute("/courses")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./partnerships-DTZ5Ai9t.mjs");
var Route$1 = createFileRoute("/partnerships")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./projects-DuowCIzw.mjs");
var Route = createFileRoute("/projects")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	SplatRoute: Route$8.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	ApproachRoute: Route$6.update({
		id: "/approach",
		path: "/approach",
		getParentRoute: () => Route$10
	}),
	CertificationRoute: Route$5.update({
		id: "/certification",
		path: "/certification",
		getParentRoute: () => Route$10
	}),
	CommunityRoute: Route$4.update({
		id: "/community",
		path: "/community",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	CoursesRoute: Route$2.update({
		id: "/courses",
		path: "/courses",
		getParentRoute: () => Route$10
	}),
	PartnershipsRoute: Route$1.update({
		id: "/partnerships",
		path: "/partnerships",
		getParentRoute: () => Route$10
	}),
	ProjectsRoute: Route.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Section as C, Eyebrow as S, videos as _, curriculum as a, Button as b, includes as c, projects as d, socials as f, values as g, testimonials as h, bonuses as i, outcomes as l, steps as m, SITE as n, faqs as o, stats as p, audience as r, graduates as s, router_exports as t, programmes as u, whatsappHref as v, cn as w, Container as x, whyChoose as y };
