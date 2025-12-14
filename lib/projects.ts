// Function to generate slugs from titles
const slugify = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export const projectsData = [
  {
    title: 'Ascent Property Manager',
    slug: slugify('Ascent Property Manager'),
    description: 'A comprehensive web and mobile solution for modernizing rental management, combining landlord and tenant portals.',
    category: 'Combination',
    projectType: 'Property Management System',
    overview: 'Reduced manual overhead by 70%. Features include automated rent collection, maintenance request tracking, and real-time reporting dashboards.',
    impact: ['Increased on-time rent payment rate by 25%', 'Reduced maintenance resolution time by 40 hours/month.'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'React Native', 'AWS'],
    images: ['/original-9f009863488e25d67fc00f72d276e721.webp', '/logo only.png', '/logo only.png'],
    isFeatured: true,
  },
  {
    title: 'EducateLink Platform',
    slug: slugify('EducateLink Platform'),
    description: 'Cloud-based platform simplifying administration, e-learning, and parent communication for educational institutions.',
    category: 'Web App',
    projectType: 'School Management System',
    overview: 'Centralized student records, staff payroll, online admissions, and an integrated virtual classroom module.',
    impact: ['Improved teacher-parent communication by 80%', 'Streamlined the admissions process, saving 150 administrative hours yearly.'],
    techStack: ['Next.js', 'Django', 'MongoDB', 'Vercel'],
    images: ['/Futuristic side view portrait of young african-american woman wearing vr headset against purple background _ Premium Photo.jpeg', '/images/school-admin.jpg'],
    isFeatured: true,
  },
  {
    title: 'PrimeBuild Contractors Site',
    slug: slugify('PrimeBuild Contractors Site'),
    description: 'A high-impact, responsive digital showcase designed to capture leads and highlight project expertise.',
    category: 'Website',
    projectType: 'Construction Company Website',
    overview: 'Full-screen hero video, dedicated project portfolio, detailed service breakdown, and integrated "Request a Quote" form.',
    impact: ['Generated 4x more qualified lead submissions within the first quarter post-launch.'],
    techStack: ['Webflow/Custom HTML/CSS', 'GSAP', 'Figma'],
    images: ['/images/const-main.jpg', '/images/const-portfolio.jpg'],
    isFeatured: false,
  },
  {
    title: 'Automata P2P Bot Service',
    slug: slugify('Automata P2P Bot Service'),
    description: 'A secure, scalable Banking-as-a-Service system for automating peer-to-peer crypto-to-fiat transactions.',
    category: 'Web App',
    projectType: 'Automated P2P Bot BaaS',
    overview: 'Built on a secure blockchain layer, offering instant settlement, KYC verification, and a developer API for integration.',
    impact: ['Processed over $5M in transactions in the first 6 months', '99.99% uptime and zero security breaches.'],
    techStack: ['Python (FastAPI)', 'Solidity', 'AWS Lambda', 'Redis'],
    images: ['/images/bot-main.jpg', '/images/bot-api.jpg'],
    isFeatured: false,
  },
];

export const getProjects = () => projectsData;
export const getFeaturedProjects = () => projectsData.filter(p => p.isFeatured).slice(0, 2);
export const getProjectBySlug = (slug) => projectsData.find(p => p.slug === slug);