import banishFullImg from '../assets/banishfull.png';
import banishHalfImg from '../assets/banishhalf.png';

export const personalInfo = {
  name: "Mohammed Banish",
  title: "AI Educator & Digital Skills Trainer",
  subTitle: "M.Sc. Computer Science · CBSE ICT Educator · Graphic Designer",
  phone: "+91 8281 969818",
  phoneRaw: "918281969818",
  email: "baneeshbinbasheer10@gmail.com",
  instagram: "https://instagram.com/baneeshbinbasheer",
  instagramHandle: "@baneeshbinbasheer",
  whatsappUrl: "https://wa.me/918281969818",
  languages: ["English", "Malayalam", "Hindi", "Basic Arabic"],
  location: "Kerala, India",
  experienceYears: "3+",
  studentsSupported: "300+",
  teachersTrained: "20+",
  researchPapers: "2",
};

export const heroPresentations = [
  {
    id: "practical-skills",
    badge: "AI & Digital Skills Education",
    heading: "Learn AI to Thrive in Studies and Beyond.",
    highlightText: "Thrive in Studies",
    subtitle: "Hands-on training for school students in modern AI tools, Canva design, CapCut video editing, and everyday computer skills. Choose 12, 24, or 48 hours and finish with work you can proudly show.",
    image: banishFullImg,
    imageAlt: "Mohammed Banish - Full length portrait",
    imageType: "full",
    tagline: "Full-Length Showcase",
    keyHighlights: [
      "School & CBSE Aligned",
      "No Paid Software Needed",
      "1-on-1 & Small Batches",
      "Personal Project Portfolio"
    ],
    primaryCtaText: "Explore Packages",
    primaryCtaLink: "#packages",
    secondaryCtaText: "Book Free Demo",
    secondaryCtaLink: "#contact",
  },
  {
    id: "future-ready",
    badge: "Future-Ready Mentorship",
    heading: "Build Skills Today. Shape Your Future Tomorrow.",
    highlightText: "Shape Your Future",
    subtitle: "Explore practical AI capabilities, master digital creativity, and build authentic confidence under the personalized guidance of an experienced Computer Science teacher.",
    image: banishHalfImg,
    imageAlt: "Mohammed Banish - Educator portrait",
    imageType: "half",
    tagline: "Mentorship View",
    keyHighlights: [
      "Ethical AI Prompting",
      "Creative Design Skills",
      "Cyber Safety & Ethics",
      "Guaranteed Parent Showcase"
    ],
    primaryCtaText: "What Students Learn",
    primaryCtaLink: "#curriculum",
    secondaryCtaText: "Get in Touch",
    secondaryCtaLink: "#contact",
  }
];

export const coursePackages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Confident basics",
    duration: "12 hrs",
    weeks: "2 weeks",
    recommendedFor: "Beginners & younger students taking their first steps in digital tools.",
    hoursBreakdown: {
      computer: 3,
      ai: 4,
      canva: 3,
      capcut: 2,
      project: 0
    },
    modules: [
      { label: "Computer Skills", hours: "3 hrs" },
      { label: "AI Tools", hours: "4 hrs" },
      { label: "Canva Design", hours: "3 hrs" },
      { label: "CapCut Video", hours: "2 hrs" }
    ],
    outcome: "Course completion certificate and a mini digital project created in the final session.",
    popular: false,
    badge: "Quick Foundation",
    whatsappEnquiry: "Hi Mohammed, I would like to enquire about the 12-Hour Starter Package for my child."
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "School and practical skills",
    duration: "24 hrs",
    weeks: "4 weeks",
    recommendedFor: "Students wanting solid practical ability for school assignments, presentations & creative hobbies.",
    hoursBreakdown: {
      computer: 5,
      ai: 7,
      canva: 6,
      capcut: 6,
      project: 0
    },
    modules: [
      { label: "Computer Skills", hours: "5 hrs" },
      { label: "AI Tools", hours: "7 hrs" },
      { label: "Canva Design", hours: "6 hrs" },
      { label: "CapCut Video", hours: "6 hrs" }
    ],
    outcome: "Official certificate and 2 fully finished, showcase-ready creative projects.",
    popular: true,
    badge: "Most Popular",
    whatsappEnquiry: "Hi Mohammed, I would like to enquire about the 24-Hour Standard Package (Most Popular) for my child."
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Comprehensive mastery & portfolio",
    duration: "48 hrs",
    weeks: "8 weeks",
    recommendedFor: "Ambitious students who want an end-to-end digital portfolio, coding intro & presentation skills.",
    hoursBreakdown: {
      computer: 8,
      ai: 14,
      canva: 10,
      capcut: 12,
      project: 4
    },
    modules: [
      { label: "Computer Skills", hours: "8 hrs" },
      { label: "AI Tools", hours: "14 hrs" },
      { label: "Canva Design", hours: "10 hrs" },
      { label: "CapCut Video", hours: "12 hrs" },
      { label: "Final Project & Presentation", hours: "4 hrs" }
    ],
    outcome: "Certificate, comprehensive digital portfolio website, and a live demonstration showcase for parents.",
    popular: false,
    badge: "Full Mastery",
    whatsappEnquiry: "Hi Mohammed, I would like to enquire about the 48-Hour Pro Package for my child."
  }
];

export const curriculumTracks = [
  {
    id: "computer",
    title: "Computer Skills",
    subtitle: "The strong bedrock every digital skill relies upon",
    color: "#2F54EB",
    bgLight: "bg-blue-50 text-blue-700 border-blue-200",
    badgeColor: "bg-blue-600 text-white",
    barColor: "bg-blue-600",
    icon: "Monitor",
    description: "Build effortless confidence with everyday computing, professional productivity apps, and online hygiene.",
    coreTopics: [
      "File management, folder hierarchy & speed typing",
      "Google Docs, Sheets & Slides / MS Office suite",
      "Safe internet browsing & digital footprints",
      "Recognizing phishing emails & password security practices"
    ],
    proBonus: "Windows troubleshooting, networking fundamentals, introductory Python & HTML structure."
  },
  {
    id: "ai",
    title: "AI Tools",
    subtitle: "Use AI to learn faster, think deeper, not to copy",
    color: "#7C4DFF",
    bgLight: "bg-purple-50 text-purple-700 border-purple-200",
    badgeColor: "bg-purple-600 text-white",
    barColor: "bg-purple-600",
    icon: "Bot",
    description: "Transform artificial intelligence into a personal 24/7 learning tutor while mastering prompt engineering and ethics.",
    coreTopics: [
      "Prompt engineering with ChatGPT, Claude & Google Gemini",
      "AI for school research, book summaries & exam study plans",
      "Creative generative AI images & multimedia assets",
      "Ethics, academic honesty & identifying deepfakes / fake news"
    ],
    proBonus: "AI-assisted coding, building custom mini-GPTs, and an autonomous student AI project."
  },
  {
    id: "canva",
    title: "Canva Design",
    subtitle: "Visual design that looks sharp, engaging & professional",
    color: "#0E9F8E",
    bgLight: "bg-teal-50 text-teal-700 border-teal-200",
    badgeColor: "bg-teal-600 text-white",
    barColor: "bg-teal-600",
    icon: "Palette",
    description: "Learn the fundamentals of color theory, typography, and visual hierarchy using modern design tools.",
    coreTopics: [
      "School project posters, infographics & social graphics",
      "Color theory, font pairing & custom logo concepts",
      "Interactive presentations & animated slide decks",
      "Harnessing Canva's built-in Magic Studio AI tools"
    ],
    proBonus: "Complete brand kit creation, resume design, and personal student creative portfolio."
  },
  {
    id: "capcut",
    title: "CapCut Video Editing",
    subtitle: "Modern short-form video storytelling people love to watch",
    color: "#F0504F",
    bgLight: "bg-rose-50 text-rose-700 border-rose-200",
    badgeColor: "bg-rose-600 text-white",
    barColor: "bg-rose-600",
    icon: "Video",
    description: "Produce dynamic videos for school clubs, science exhibitions, storytelling, and digital content.",
    coreTopics: [
      "Video trimming, rhythm-based cutting, pacing & background music",
      "Cinematic transitions, kinetic text captions & stickers",
      "Vertical formats optimized for Reels, Shorts & presentations",
      "Color grading, keyframe motion & audio voiceover mixing"
    ],
    proBonus: "Automated captions, green screen/background removal, and a full-length promotional video."
  }
];

export const qualifications = [
  {
    degree: "M.Sc. Computer Science",
    institution: "St. Thomas College (Autonomous), University of Calicut",
    period: "2021 – 2023",
    note: "Degree apostille-attested (Feb 2025). Advanced research in Machine Learning feature selection."
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "MES Ponnani College, University of Calicut",
    period: "2018 – 2021",
    note: "Strong foundation in data structures, algorithms, database management, and programming."
  },
  {
    degree: "Diploma in Graphic Designing",
    institution: "GrapesGenix",
    period: "2025",
    note: "Photoshop, Illustrator, Premiere Pro, Lightroom, DaVinci Resolve, and Canva."
  }
];

export const experience = [
  {
    role: "ICT Teacher",
    organization: "BrightLine English School",
    period: "Jun 2025 – Nov 2025",
    description: "Delivered interactive computer education and modern computing concepts for high school students."
  },
  {
    role: "ICT Teacher, PRO & Graphic Designer",
    organization: "Peace Public School (CBSE)",
    period: "Jun 2023 – Mar 2025",
    description: "Managed the digital learning platform for 300+ students, trained 20+ teachers on ERP and smartboard systems, and designed institutional promotional media."
  }
];

export const certificates = [
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2026",
    category: "AI & Data"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    year: "2026",
    category: "AI & Data"
  },
  {
    title: "Ethical Hackery",
    issuer: "Cisco Networking Academy",
    year: "2026",
    category: "Security"
  },
  {
    title: "Digital Safety and Security Awareness",
    issuer: "Cisco Networking Academy",
    year: "2026",
    category: "Security"
  },
  {
    title: "Networking",
    issuer: "Cisco Networking Academy",
    year: "2026",
    category: "Infrastructure"
  },
  {
    title: "Digital Teaching",
    issuer: "Canva",
    year: "2026",
    category: "Design & Teaching"
  },
  {
    title: "AI for Educators Workshop",
    issuer: "Edapt / Hello AI",
    year: "2024",
    category: "AI & Teaching"
  },
  {
    title: "Cybersecurity Training",
    issuer: "Ehackify",
    year: "2023",
    category: "Security"
  },
  {
    title: "International Conference Paper Presentation",
    issuer: "Academic Conference",
    year: "2023",
    category: "Research"
  },
  {
    title: "NCC 'B' & 'C' Certificates",
    issuer: "National Cadet Corps, India",
    year: "2021",
    category: "Leadership"
  },
  {
    title: "Entrepreneurial Skill Development",
    issuer: "University of Calicut",
    year: "2021",
    category: "Professional"
  },
  {
    title: "English, Duolingo Certified",
    issuer: "Score 100 · CEFR B2 Proficiency",
    year: "Certified",
    category: "Languages"
  }
];

export const researchPapers = [
  {
    id: "phishing-research",
    title: "Phishing in the Digital Age: Threats, Prevention, and Legal Remedies",
    year: "2025",
    author: "Mohammed Banish",
    summary: "In-depth analysis of evolving phishing mechanisms, real-world case studies, global social engineering trends, and legal protection under India's IT Act 2000.",
    impact: "This academic research directly informs the digital safety, cyber hygiene, and phishing awareness curriculum taught to students in every course package."
  },
  {
    id: "salp-swarm-research",
    title: "Review of the Enhanced Salp Swarm Algorithm for Feature Selection",
    year: "2023",
    author: "Mohammed Banish & Prinzon P.T.",
    institution: "St. Thomas College (Autonomous)",
    summary: "A hybrid meta-heuristic optimization study examining bio-inspired feature selection algorithms to boost classification accuracy in machine learning pipelines.",
    impact: "Reflects deep understanding of foundational machine learning algorithms, data science logic, and algorithmic efficiency."
  }
];

export const teachingPillars = [
  {
    title: "100% Free Software",
    desc: "We prioritize accessible, free tools like ChatGPT, Claude, Gemini, Canva Free, and CapCut so families never incur unexpected software subscriptions.",
    icon: "ShieldCheck"
  },
  {
    title: "Project-Based Learning",
    desc: "Students don't memorize slides—they build real posters, video promos, AI research assistants, and digital portfolios.",
    icon: "Sparkles"
  },
  {
    title: "Safety & Ethics First",
    desc: "Grounded in published cyber safety research, training students to navigate the web securely, detect fake content, and use AI ethically.",
    icon: "Lock"
  },
  {
    title: "Parent Showcase",
    desc: "Every package concludes with demonstrable proof of learning: certificates, tangible creations, and live presentations.",
    icon: "Award"
  }
];
