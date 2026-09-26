export const SITE = {
  name: "Israelee Academy",
  shortName: "Israelee",
  tagline: "Learn a skill. Build your confidence. Create your opportunities.",
  description:
    "A practical digital skills and creative education academy. Video editing, animation, and real-world projects — with corrections, mentorship, and a certificate.",
  phoneDisplay: "0903 172 0349",
  phoneTel: "+2349031720349",
  whatsapp: "2349031720349",
  palmpay: "7073418229",
  payee: "Iwebunor Chibuzor Israel",
  fee: "₦10,000",
  duration: "10 weeks",
  students: "350+",
  founder: "Iwebunor Israel",
  founderRole: "Founder & Digital Skills Instructor",
} as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hello Coach Israel, I want to register for the Video Editing & Animation Masterclass at Israelee Academy.",
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@israeliwebunor" },
  { label: "Instagram", href: "https://www.instagram.com/it_israel_iwebunor" },
  { label: "X", href: "https://x.com/IsraelIwebunor" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iwebunor-israel-806a40281" },
  { label: "Telegram", href: "https://t.me/Iwebunorisrael" },
  { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VaANCCmF1YlLGbnoCG0D" },
] as const;

export const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Courses", to: "/courses" as const },
  { label: "Approach", to: "/approach" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Certification", to: "/certification" as const },
  { label: "Community", to: "/community" as const },
  { label: "Partnerships", to: "/partnerships" as const },
  { label: "Contact", to: "/contact" as const },
] as const;

export const stats = [
  { value: "350+", label: "Students trained" },
  { value: "10", label: "Weeks of coaching" },
  { value: "₦10k", label: "Registration fee" },
  { value: "Live", label: "WhatsApp & Telegram class" },
] as const;

export const whyChoose = [
  {
    title: "Practical learning",
    body: "Training is built around making work, not watching tutorials. You leave with projects, not just notes.",
  },
  {
    title: "Beginner-friendly",
    body: "Start from the fundamentals and build toward professional workflow, even if you have never edited before.",
  },
  {
    title: "Assignments & corrections",
    body: "Classwork is submitted, reviewed, and corrected. Mistakes become part of the method.",
  },
  {
    title: "Follow-up support",
    body: "Learning does not end when the live session ends. Mentorship continues through the ten weeks.",
  },
  {
    title: "Collaborative projects",
    body: "Students work in groups, learn from one another, and ship ads, vlogs, and client-style briefs together.",
  },
  {
    title: "Certification that follows skill",
    body: "A certificate of completion is awarded. Your portfolio is what proves what you can do.",
  },
] as const;

export const steps = [
  { n: "01", title: "Learn", body: "Concepts, tools, techniques, and professional workflows are introduced clearly." },
  { n: "02", title: "Practise", body: "Follow demonstrations and practise immediately, on your phone or computer." },
  { n: "03", title: "Create", body: "Turn the lesson into an actual project — ads, vlogs, motion, brand films." },
  { n: "04", title: "Submit", body: "Assignments and classwork are submitted for review the same week." },
  { n: "05", title: "Receive corrections", body: "Immediate corrections, explanations, and guidance where you got stuck." },
  { n: "06", title: "Improve", body: "Revise the work. Repeat until the cut, the grade, and the story hold." },
  { n: "07", title: "Demonstrate", body: "Show the skill through practical projects and a final piece you can publish." },
] as const;

export const curriculum = [
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
  "Practical project development",
] as const;

export const includes = [
  "Access to previous recordings of batches 1, 2, 3 and more",
  "Engaging practical live sessions and expert-led classes",
  "Facebook monetization, optimization, and strategic content",
  "10 weeks mentorship after the workshop, plus consultation during the programme",
  "Certificate of completion",
  "YouTube growth course used to grow a channel organically past 5,000 subscribers",
  "WhatsApp course on building a paying community",
] as const;

export const bonuses = [
  {
    title: "CapCut Premium",
    body: "Registered students get CapCut Pro access. Previous batches still enjoy the benefit.",
    image: "/media/bonus-capcut.jpg",
  },
  {
    title: "Graphic design course",
    body: "Learn to design on your smartphone and produce work clients actually pay for.",
    image: "/media/bonus-graphics.jpg",
  },
  {
    title: "YouTube monetization",
    body: "Build on YouTube, read analytics, and earn from your content.",
    image: "/media/bonus-youtube.jpg",
  },
  {
    title: "Facebook monetization",
    body: "Work with the algorithm and earn from Facebook — including payment setup guidance.",
    image: "/media/bonus-facebook.jpg",
  },
  {
    title: "WhatsApp course",
    body: "Build a paying community, grow status views, and sell without shouting.",
    image: "/media/bonus-whatsapp.jpg",
  },
  {
    title: "Resource vault",
    body: "Graphic design, video animation, Canva, WhatsApp automation, and premium course access.",
    image: "/media/bonus-resources.jpg",
  },
] as const;

export const programmes = [
  {
    title: "Video Editing & Animation Masterclass",
    level: "Beginner to professional",
    length: "10 weeks",
    fee: "₦10,000",
    body: "Flagship programme. Fundamentals through post-production, live classes, assignments, group projects, and a certificate.",
    featured: true,
  },
  {
    title: "Smartphone Graphic Design",
    level: "Beginner to advanced",
    length: "Self-paced + live",
    fee: "Included as a bonus",
    body: "PixelLab, Canva, and professional layout — design that looks standard, not makeshift.",
    featured: false,
  },
  {
    title: "YouTube Growth & Monetization",
    level: "Beginner to intermediate",
    length: "Bonus course",
    fee: "Included",
    body: "Channel setup, analytics, consistency, and the same strategies that grew Israelee TV.",
    featured: false,
  },
  {
    title: "AI for Creators",
    level: "All levels",
    length: "Inside the masterclass",
    fee: "Included",
    body: "Use AI image and video tools to scale editing, ads, and animation without losing taste.",
    featured: false,
  },
  {
    title: "Content Creation Masterclass",
    level: "All levels",
    length: "Workshop",
    fee: "Contact",
    body: "Make content that converts — story, hook, picture, and offer working as one.",
    featured: false,
  },
  {
    title: "Digital Marketing & Social Media",
    level: "Beginner to intermediate",
    length: "Workshop",
    fee: "Contact",
    body: "Position a skill, find clients, and run ads that people actually respond to.",
    featured: false,
  },
] as const;

export const values = [
  { title: "Excellence", body: "High standards in training and in the work students publish." },
  { title: "Practicality", body: "Skills that can be used on a brief, a client, or a personal brand this week." },
  { title: "Creativity", body: "Students are pushed to think, not copy. Original ideas are the point." },
  { title: "Growth", body: "Learning is a continuous journey. Previous batches return for free." },
  { title: "Discipline", body: "Consistency, deadlines, and responsibility — the same as a studio." },
  { title: "Innovation", body: "New tools, AI workflows, and methods are welcomed, then practised." },
  { title: "Community", body: "Students grow faster when they collaborate, share, and correct one another." },
  { title: "Integrity", body: "Professionalism, honesty, and respect in class and with clients." },
] as const;

export const audience = [
  "Students and undergraduates",
  "Graduates exploring a digital career",
  "Entrepreneurs and business owners",
  "Content creators and social media managers",
  "Freelancers and aspiring professionals",
  "Stay-at-home parents building a skill",
  "Pastors, teachers, doctors, lawyers, and other professionals",
  "Anyone willing to learn, practise, and improve",
] as const;

export const outcomes = [
  "Create content and personal-brand films",
  "Support businesses with ads and motion",
  "Work with clients and creative teams",
  "Freelance with a real portfolio",
  "Offer digital services professionally",
  "Start a digital business",
] as const;

export const testimonials = [
  {
    quote:
      "From start to finish, the course was well-structured, beginner-friendly, and incredibly impactful. It took me step-by-step through animation, storytelling, transitions, sound syncing, and even pro-level editing tricks I had never imagined I could pull off.",
    name: "Graduate, Video Animation Course",
  },
  {
    quote:
      "What I loved most was how practical the course was. It wasn't just theory; it pushed me to create as I learned. I saw real progress in my skills with each project.",
    name: "Content creator, student review",
  },
  {
    quote:
      "I walked in curious, and walked out equipped. If you've been thinking about learning animation, stop hesitating. This course is absolutely worth it.",
    name: "Batch graduate",
  },
  {
    quote:
      "Using the course I have been able to produce whiteboard animation, 3D animation, and 2D animation. I am developing myself as a video animator by attending other workshops and implementing on my own.",
    name: "AI content creator",
  },
  {
    quote:
      "Just can't believe I'm using CapCut Pro for free. I can use all the Pro features I've been wanting. The premium is sweet.",
    name: "King Nuel",
  },
  {
    quote:
      "Following the WhatsApp course I grew my channel from 196 to 267 in less than two weeks. Consistency and discipline pay more than perfection.",
    name: "WhatsApp marketing student",
  },
] as const;

export const graduates = [
  "Okechukwu Daberechi Ruth",
  "Akinyoye Ibukunola Esther",
  "Adaitire Oghenebrume",
  "Olarinde Oluwatobi",
  "Azeez Ololade Taiwo",
  "Balogun Sheffu",
  "Ademoh Tohibath",
  "Rebecca Charity Ayuba",
  "Eniola Michael",
] as const;

export const faqs = [
  {
    q: "How long is the masterclass?",
    a: "Ten weeks of intensive coaching, with live practical classes on WhatsApp and Telegram, assignments, and follow-up mentorship.",
  },
  {
    q: "How much does it cost?",
    a: `Registration is ${SITE.fee}. Pay into Palmpay ${SITE.palmpay} (${SITE.payee}) and send proof of payment to ${SITE.phoneDisplay}.`,
  },
  {
    q: "Do I need prior experience?",
    a: "No. Beginners start from the fundamentals. If you already edit, the programme still pushes you into professional workflow, AI, and client work.",
  },
  {
    q: "What device do I need?",
    a: "A smartphone is enough for a large part of the training (CapCut, PixelLab, Canva). A laptop is welcome if you have one.",
  },
  {
    q: "Is there a certificate?",
    a: "Yes. Students who complete the required training receive a Certificate of Completion in Video Editing and Animation from Israelee Academy.",
  },
  {
    q: "Are classes live?",
    a: "Yes. Practical live classes run with students on WhatsApp and Telegram. You ask questions, submit work, and get corrections — not a folder of abandoned videos.",
  },
  {
    q: "What bonuses are included?",
    a: "CapCut Premium, graphic design, YouTube and Facebook monetization, WhatsApp community building, previous batch recordings, AI tools, and more — for registered students.",
  },
  {
    q: "Can previous students join a new batch?",
    a: "Yes. Students from earlier batches may join every new batch at no extra fee.",
  },
] as const;

export const projects = [
  {
    title: "Classwork & assignment review",
    body: "Immediate corrections and follow-up on submitted cuts, chats, and client-style briefs.",
    image: "/media/classwork.jpg",
  },
  {
    title: "Live classes",
    body: "Practical sessions with students on WhatsApp and Telegram — attendance, feedback, and studio energy.",
    image: "/media/live-classes.jpg",
  },
  {
    title: "Student reviews",
    body: "Written testimonials after completing the video editing and animation masterclass.",
    image: "/media/reviews.jpg",
  },
  {
    title: "Client work in the wild",
    body: "A student-produced ads video that earned a real product gift from a client the editor had never met.",
    image: "/media/client-chat.jpg",
  },
  {
    title: "Batch 3",
    body: "Doctors, lawyers, teachers, pastors, creators, and business owners — one classroom.",
    image: "/media/batch3.jpg",
  },
  {
    title: "Certificates awarded",
    body: "Completion certificates in video editing, animation, and post-production.",
    image: "/media/certificates.jpg",
  },
] as const;

export const videos = [
  {
    title: "First-time student vlog",
    src: "/media/student-vlog.mp4",
    caption: "A 10-week student film on what creativity actually looks like.",
  },
  {
    title: "Group A & B brand ads",
    src: "/media/group-ads.mp4",
    caption: "Team assignment: Sprite and Coca-Cola style commercials.",
  },
  {
    title: "Group promo for the academy",
    src: "/media/group-promo.mp4",
    caption: "Students producing a recruitment film for the masterclass.",
  },
  {
    title: "Behind the scenes",
    src: "/media/group-bts.mp4",
    caption: "Group chats, planning, cuts, and thank-you films for the tutor.",
  },
] as const;
