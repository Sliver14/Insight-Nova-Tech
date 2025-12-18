module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/our-work/[slug]/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/our-work/[slug]/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Function to generate slugs from titles
__turbopack_context__.s([
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjects",
    ()=>getProjects,
    "projectsData",
    ()=>projectsData
]);
const slugify = (text)=>text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
const projectsData = [
    {
        title: 'Reno App',
        slug: 'reno-app',
        description: 'A mobile-first crypto exchange application with instant swap functionality.',
        category: 'Fintech',
        projectType: 'Crypto Exchange App',
        overview: 'Built for fast and seamless crypto swaps with a smooth mobile UX.',
        impact: [
            'Enabled instant crypto swaps',
            'Optimized mobile trading experience'
        ],
        techStack: [
            'React Native'
        ],
        images: [
            '/reno/original-5ae26a232c2de792dde565fe8903b319.png',
            '/reno/logo22.png',
            '/reno/Screenshot_20251217_021859_Reno.jpg',
            '/reno/Screenshot_20251217_021909_Reno.jpg',
            '/reno/Screenshot_20251217_021920_Reno.jpg',
            '/reno/Screenshot_20251217_021929_Reno.jpg',
            '/reno/Screenshot_20251217_021935_Reno.jpg',
            '/reno/Screenshot_20251217_021945_Reno.jpg',
            '/reno/Screenshot_20251217_022005_Reno.jpg'
        ],
        isFeatured: true
    },
    {
        title: 'NexusChat',
        slug: 'nexuschat',
        description: 'Real-time communication platform supporting chat, group chat, and calls.',
        category: 'Communication',
        projectType: 'Chat & Calling Platform',
        overview: 'Socket-powered system enabling low-latency messaging and voice calls.',
        impact: [
            'Real-time messaging at scale',
            'Improved team and community communication'
        ],
        techStack: [
            'Next.js',
            'Node.js',
            'Socket.IO'
        ],
        images: [
            '/nexus-chat/Free Laptop & Smart Phone Mockup For Your Design Presentation2.png',
            '/nexus-chat/localhost_3000_.png',
            '/nexus-chat/localhost_3000_signin (1).png',
            '/nexus-chat/localhost_3000_signin (2).png',
            '/nexus-chat/localhost_3000_signin.png',
            '/nexus-chat/Screenshot 2025-09-25 033852.png',
            '/nexus-chat/WhatsApp Image 2025-12-18 at 09.35.31_3c1fe245.jpg',
            '/nexus-chat/WhatsApp Image 2025-12-18 at 09.35.32_1561e45f.jpg',
            '/nexus-chat/WhatsApp Image 2025-12-18 at 09.35.32_3e778a7c.jpg'
        ],
        isFeatured: true
    },
    {
        title: 'Insight Bot Trader',
        slug: 'insight-bot-trader',
        description: 'Automated P2P crypto trading bot for ad placement and payment fulfillment.',
        category: 'Fintech',
        projectType: 'P2P Trading Automation',
        overview: 'Automates P2P trading flow from ad placement to payment confirmation.',
        impact: [
            'Reduced manual P2P trading effort',
            'Improved trade execution speed'
        ],
        techStack: [
            'Node.js'
        ],
        images: [
            '/insight bot/Blog - Baytech Consulting.jpeg',
            '/insight bot/Screenshot_20251218_112832_Bybit.jpg',
            '/insight bot/Screenshot_20251218_112920_Bybit.jpg'
        ],
        isFeatured: false
    },
    {
        title: 'Bloomty',
        slug: 'bloomty',
        description: 'A multi-platform service marketplace and business management solution.',
        category: 'Business',
        projectType: 'Marketplace Platform',
        overview: 'Web and mobile solution supporting service listings, bookings, and payments.',
        impact: [
            'Centralized service management',
            'Improved customer booking flow'
        ],
        techStack: [
            'Next.js',
            'Node.js',
            'React Native'
        ],
        images: [
            '/bloomty/beauty-mockup.png',
            '/bloomty/Bloom-Ty - Google Chrome 18-Dec-25 11_32_09 AM.png',
            '/bloomty/Bloom-Ty - Google Chrome 18-Dec-25 11_32_09 AM.png',
            '/bloomty/bloom-ty.vercel.app_ (1).png',
            '/bloomty/bloom-ty.vercel.app_.png',
            '/bloomty/222.png',
            '/bloomty/221.png',
            '/bloomty/Screenshot_20251218_113457_Chrome.jpg',
            '/bloomty/Screenshot_20251218_113515_Chrome.jpg',
            '/bloomty/Screenshot_20251218_113522_Chrome.jpg',
            '/bloomty/Screenshot_20251218_113616_Chrome.jpg',
            '/bloomty/Screenshot_20251218_113622_Chrome.jpg'
        ],
        isFeatured: true
    },
    // {
    //   title: 'Hotel Management System',
    //   slug: 'hotel-management-system',
    //   description: 'A property management system tailored for hotels and short-stay businesses.',
    //   category: 'Hospitality',
    //   projectType: 'Hotel Property Management System',
    //   overview: 'Manages reservations, rooms, billing, and operational reporting.',
    //   impact: ['Streamlined hotel operations', 'Reduced manual booking errors'],
    //   techStack: ['Next.js', 'Node.js'],
    //   images: [
    //     'https://picsum.photos/seed/omnia-pms-1/800/600',
    //     'https://picsum.photos/seed/omnia-pms-2/800/600',
    //     'https://picsum.photos/seed/omnia-pms-3/800/600',
    //     'https://picsum.photos/seed/omnia-pms-4/800/600',
    //     'https://picsum.photos/seed/omnia-pms-5/800/600',
    //     'https://picsum.photos/seed/omnia-pms-6/800/600',
    //   ],
    //   isFeatured: false,
    // },
    // {
    //   title: 'Klimars Space Gym',
    //   slug: 'klimars-space-gym',
    //   description: 'QR-enabled gym management system for access control and member tracking.',
    //   category: 'Fitness',
    //   projectType: 'Gym Management System',
    //   overview: 'Handles memberships, attendance, and mobile access using QR codes.',
    //   impact: ['Improved member check-in efficiency', 'Automated attendance tracking'],
    //   techStack: ['Next.js', 'Node.js', 'React Native'],
    //   images: [
    //     'https://picsum.photos/seed/klimars-gym-1/800/600',
    //     'https://picsum.photos/seed/klimars-gym-2/800/600',
    //     'https://picsum.photos/seed/klimars-gym-3/800/600',
    //     'https://picsum.photos/seed/klimars-gym-4/800/600',
    //     'https://picsum.photos/seed/klimars-gym-5/800/600',
    //     'https://picsum.photos/seed/klimars-gym-6/800/600',
    //   ],
    //   isFeatured: false,
    // },
    {
        title: 'Lampsiheirs',
        slug: 'lampsiheirs',
        description: 'Corporate and brand-focused website with a modern UI.',
        category: 'Corporate',
        projectType: 'Business Website',
        overview: 'Clean and professional web presence for brand communication.',
        impact: [
            'Enhanced online brand credibility'
        ],
        techStack: [
            'Next.js'
        ],
        images: [
            '/lampsi heirs/Bloom-Ty - Google Chrome 18-Dec-25 12_00_10 PM.png',
            '/lampsi heirs/Bloom-Ty - Google Chrome 18-Dec-25 12_00_23 PM.png',
            '/lampsi heirs/Bloom-Ty - Google Chrome 18-Dec-25 12_00_38 PM.png',
            '/lampsi heirs/Bloom-Ty - Google Chrome 18-Dec-25 12_00_52 PM.png',
            '/lampsi heirs/Bloom-Ty - Google Chrome 18-Dec-25 12_01_09 PM.png',
            '/lampsi heirs/Screenshot_20251218_114714_Chrome.jpg',
            '/lampsi heirs/Screenshot_20251218_114744_Chrome.jpg',
            '/lampsi heirs/Screenshot_20251218_114804_Chrome.jpg',
            '/lampsi heirs/Screenshot_20251218_114815_Chrome.jpg',
            '/lampsi heirs/www.lampsiheirs.com_ (1).png',
            '/lampsi heirs/www.lampsiheirs.com_.png'
        ],
        isFeatured: false
    },
    {
        title: 'Efemena Construction',
        slug: 'efemena-construction',
        description: 'Company website showcasing construction projects and services.',
        category: 'Corporate',
        projectType: 'Construction Company Website',
        overview: 'Designed to present projects, services, and company profile clearly.',
        impact: [
            'Improved client trust and inquiries'
        ],
        techStack: [
            'Next.js'
        ],
        images: [
            '/efemena construction/Bloom-Ty - Google Chrome 18-Dec-25 11_58_13 AM.png',
            '/efemena construction/Bloom-Ty - Google Chrome 18-Dec-25 11_58_27 AM.png',
            '/efemena construction/Bloom-Ty - Google Chrome 18-Dec-25 11_58_35 AM.png',
            '/efemena construction/efemena-construction.vercel.app_.png',
            '/efemena construction/Screenshot_20251218_114606_Chrome.jpg',
            '/efemena construction/Screenshot_20251218_114614_Chrome.jpg',
            '/efemena construction/Screenshot_20251218_114622_Chrome.jpg',
            '/efemena construction/Screenshot_20251218_114631_Chrome.jpg',
            '/efemena construction/Screenshot_20251218_114637_Chrome.jpg',
            '/efemena construction/Screenshot_20251218_114657_Chrome.jpg'
        ],
        isFeatured: false
    },
    {
        title: 'Creative Emmy',
        slug: 'creative-emmy',
        description: 'Portfolio website for a creative brand and digital services.',
        category: 'Creative',
        projectType: 'Portfolio Website',
        overview: 'Showcases creative works with a visually engaging layout.',
        impact: [
            'Stronger personal brand presence'
        ],
        techStack: [
            'Next.js'
        ],
        images: [
            '/creative emmy/Bloom-Ty - Google Chrome 18-Dec-25 11_57_37 AM.png',
            '/creative emmy/Bloom-Ty - Google Chrome 18-Dec-25 11_57_23 AM.png',
            '/creative emmy/Bloom-Ty - Google Chrome 18-Dec-25 11_57_44 AM.png',
            '/creative emmy/Bloom-Ty - Google Chrome 18-Dec-25 11_57_57 AM.png',
            '/creative emmy/creatie-emmy.vercel.app_.png',
            '/creative emmy/Screenshot_20251218_114327_Chrome.jpg',
            '/creative emmy/Screenshot_20251218_114333_Chrome.jpg',
            '/creative emmy/Screenshot_20251218_114402_Chrome.jpg',
            '/creative emmy/Screenshot_20251218_114410_Chrome.jpg',
            '/creative emmy/Screenshot_20251218_114419_Chrome.jpg',
            '/creative emmy/Screenshot_20251218_114430_Chrome.jpg'
        ],
        isFeatured: false
    },
    {
        title: 'Learning Management System',
        slug: 'learning-management-system',
        description: 'Comprehensive system for managing school operations and learning flow.',
        category: 'EdTech',
        projectType: 'Learning Management System',
        overview: 'Supports student management, classes, assessments, and progress tracking.',
        impact: [
            'Digitized academic workflows',
            'Improved student performance tracking'
        ],
        techStack: [
            'Next.js',
            'Node.js'
        ],
        images: [
            '/lms/online-school-olive.vercel.app_ (12).png',
            // '/lms/online-school-olive.vercel.app_ (10).png',
            '/lms/online-school-olive.vercel.app_ (11).png',
            '/lms/online-school-olive.vercel.app_ (13).png',
            '/lms/Screenshot_20251218_114906_Chrome.jpg',
            '/lms/Screenshot_20251218_114954_Chrome.jpg',
            '/lms/Screenshot_20251218_115012_Chrome.jpg',
            '/lms/Screenshot_20251218_115023_Chrome.jpg'
        ],
        isFeatured: true
    },
    {
        title: 'Doi Creative',
        slug: 'doi-creative',
        description: 'Creative agency website highlighting services and past works.',
        category: 'Creative',
        projectType: 'Agency Website',
        overview: 'Modern agency site focused on conversions and visual storytelling.',
        impact: [
            'Increased client engagement'
        ],
        techStack: [
            'Next.js'
        ],
        images: [
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_03 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_46_56 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_09 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_17 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_26 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_34 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_43 PM.png',
            '/doi creative/Bloom-Ty - Google Chrome 18-Dec-25 12_47_48 PM.png',
            '/doi creative/Screenshot_20251218_114503_Chrome.jpg',
            '/doi creative/Screenshot_20251218_114524_Chrome.jpg'
        ],
        isFeatured: false
    }
];
const getProjects = ()=>projectsData;
const getFeaturedProjects = ()=>projectsData.filter((p)=>p.isFeatured).slice(0, 4);
const getProjectBySlug = (slug)=>projectsData.find((p)=>p.slug === slug);
}),
"[project]/components/contactCTASection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/contactCTASection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/contactCTASection.tsx <module evaluation>", "default");
}),
"[project]/components/contactCTASection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/contactCTASection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/contactCTASection.tsx", "default");
}),
"[project]/components/contactCTASection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contactCTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/contactCTASection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contactCTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/contactCTASection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contactCTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/footer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/footer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/footer.tsx <module evaluation>", "default");
}),
"[project]/components/footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/footer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/footer.tsx", "default");
}),
"[project]/components/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/header.tsx <module evaluation>", "default");
}),
"[project]/components/header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/header.tsx", "default");
}),
"[project]/components/header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/our-work/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contactCTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/contactCTASection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return [
        {
            slug: 'ascent-property-manager'
        },
        {
            slug: 'educatelink-platform'
        }
    ];
}
async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Project Not Found"
    }, void 0, false, {
        fileName: "[project]/app/our-work/[slug]/page.tsx",
        lineNumber: 22,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/our-work/[slug]/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 md:px-8 py-12 md:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm md:text-base text-neutral-500 font-medium uppercase tracking-widest mb-2",
                        children: [
                            "Category: ",
                            project.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] mb-6 md:mb-8 leading-tight",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 md:mb-12 relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] rounded-xl overflow-hidden shadow-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: project.images[0],
                            alt: `${project.title} main view`,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/our-work/[slug]/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed mb-12 max-w-4xl",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2",
                                                children: "Project Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base md:text-base text-[#666666] leading-relaxed",
                                                children: project.overview
                                            }, void 0, false, {
                                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2",
                                                children: "Key Impact"
                                            }, void 0, false, {
                                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-2 text-sm sm:text-base md:text-base text-[#666666]",
                                                children: project.impact.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: item
                                                    }, index, false, {
                                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "lg:col-span-1 bg-gray-50 p-4 sm:p-5 md:p-6 rounded-xl h-fit lg:sticky top-24 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base sm:text-lg md:text-xl font-semibold text-[#1A1A1A]",
                                        children: "Tech Stack Used"
                                    }, void 0, false, {
                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#4D4DFF]/10 text-neutral-600 text-xs sm:text-sm md:text-sm font-medium px-3 py-1.5 rounded-full",
                                                children: tech
                                            }, tech, false, {
                                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-6",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4",
                                children: project.images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: img,
                                            alt: `${project.title} screenshot ${index + 1}`,
                                            width: 800,
                                            height: 1200,
                                            className: "w-full h-auto object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/our-work/[slug]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/our-work/[slug]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/our-work/[slug]/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/our-work/[slug]/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contactCTASection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/our-work/[slug]/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/our-work/[slug]/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/our-work/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/our-work/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7b4442ef._.js.map