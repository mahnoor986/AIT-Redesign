export interface Program {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  imageGradient: string;
  skills: string[];
}

export const programs: Program[] = [
  {
    id: '1',
    slug: 'fundamentals-cit',
    title: 'Certificate in Information Technology (CIT)',
    category: 'Fundamentals (CIT)',
    duration: 'See course details',
    level: 'See course details',
    description: 'Computer literacy and the essential digital foundations to start your tech journey.',
    imageGradient: 'from-blue-500 to-cyan-400',
    skills: ['MS Office', 'Computer Basics', 'Internet Literacy', 'Typing']
  },
  {
    id: '2',
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    duration: 'See course details',
    level: 'Beginner',
    description: 'Foundation of web development for learners ready to build their first digital experiences.',
    imageGradient: 'from-primary to-emerald-400',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases']
  },
  {
    id: '3',
    slug: 'graphics-design-video-editing',
    title: 'Graphics Design & Video Editing',
    category: 'Graphics Design & Video Editing',
    duration: 'See course details',
    level: 'Beginner',
    description: 'Graphic designing fundamentals for learners building creative and visual communication skills.',
    imageGradient: 'from-purple-500 to-pink-500',
    skills: ['Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects']
  },
  {
    id: '4',
    slug: 'ai-data-science',
    title: 'AI & Data Science with Python',
    category: 'AI & Data Science with Python',
    duration: 'See course details',
    level: 'Beginner',
    description: 'Introduction to Python, data science, and AI through an accessible learning path.',
    imageGradient: 'from-indigo-600 to-blue-500',
    skills: ['Python', 'Machine Learning', 'Pandas', 'TensorFlow', 'Data Viz']
  },
  {
    id: '5',
    slug: 'digital-marketing',
    title: 'Advanced Digital Marketing',
    category: 'Digital Marketing Specialization',
    duration: 'See course details',
    level: 'Beginner',
    description: 'Digital marketing fundamentals for learners building modern communication and growth skills.',
    imageGradient: 'from-orange-500 to-amber-400',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Content Strategy']
  },
  {
    id: '6',
    slug: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    category: 'Cybersecurity',
    duration: 'See course details',
    level: 'See course details',
    description: 'Introduction to cybersecurity and the foundations of protecting digital systems.',
    imageGradient: 'from-slate-700 to-slate-900',
    skills: ['Network Security', 'Ethical Hacking', 'Risk Management', 'Cryptography']
  },
  {
    id: '7',
    slug: 'english-communication',
    title: 'Professional English Communication',
    category: 'Language: English',
    duration: 'See course details',
    level: 'See course details',
    description: 'Basic vocabulary and simple grammar to build foundational English skills.',
    imageGradient: 'from-teal-500 to-emerald-300',
    skills: ['Business Writing', 'Public Speaking', 'Interview Prep', 'Grammar']
  }
];

export const getProgramBySlug = (slug: string) => programs.find(p => p.slug === slug);

export interface ProgramShowcaseCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
}

const showcaseImages = {
  development: { src: '/ait-assets/banner2.jpg', alt: 'AIT students building a technology project' },
  design: { src: '/ait-assets/banner3.jpg', alt: 'Creative technology learning at AIT' },
  marketing: { src: '/ait-assets/banner1.jpg', alt: 'AIT students working in a practical class' },
  business: { src: '/ait-assets/banner1.jpg', alt: 'Students learning professional skills at AIT' },
  fundamentals: { src: '/ait-assets/banner1.jpg', alt: 'Students learning computer fundamentals at AIT' },
  cybersecurity: { src: '/ait-assets/banner3.jpg', alt: 'Practical technology training at AIT' },
  communication: { src: '/ait-assets/banner1.jpg', alt: 'AIT students learning together' },
};

const existingProgramImages: Record<string, ProgramShowcaseCourse['image']> = {
  'fundamentals-cit': showcaseImages.fundamentals,
  'web-development': showcaseImages.development,
  'graphics-design-video-editing': showcaseImages.design,
  'ai-data-science': showcaseImages.development,
  'digital-marketing': showcaseImages.marketing,
  cybersecurity: showcaseImages.cybersecurity,
  'english-communication': showcaseImages.communication,
};

const additionalShowcaseCourses: ProgramShowcaseCourse[] = [
  { id: 'course-html', title: 'HTML', category: 'Development', duration: 'See course details', level: 'Beginner', description: 'Learn the building blocks of clear, semantic web pages.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-css', title: 'CSS', category: 'Development', duration: 'See course details', level: 'Beginner', description: 'Create responsive, polished interfaces with modern styling techniques.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-javascript', title: 'JavaScript', category: 'Development', duration: 'See course details', level: 'Beginner', description: 'Add interactive behavior and real-world logic to web experiences.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-react', title: 'React', category: 'Development', duration: 'See course details', level: 'Intermediate', description: 'Build component-driven interfaces for modern web applications.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-nextjs', title: 'Next.js', category: 'Development', duration: 'See course details', level: 'Intermediate', description: 'Create production-ready React experiences with a modern framework.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-nodejs', title: 'Node.js', category: 'Development', duration: 'See course details', level: 'Intermediate', description: 'Develop server-side applications and APIs with JavaScript.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-python', title: 'Python', category: 'Development', duration: 'See course details', level: 'Beginner', description: 'Learn versatile programming foundations for data and automation.', href: '/programs/ai-data-science', image: showcaseImages.development },
  { id: 'course-php', title: 'PHP', category: 'Development', duration: 'See course details', level: 'Beginner', description: 'Build dynamic web applications with practical backend foundations.', href: '/programs/web-development', image: showcaseImages.development },
  { id: 'course-ui-ux', title: 'UI/UX Design', category: 'Design', duration: 'See course details', level: 'Beginner', description: 'Design intuitive digital journeys focused on real user needs.', href: '/programs/graphics-design-video-editing', image: showcaseImages.design },
  { id: 'course-figma', title: 'Figma', category: 'Design', duration: 'See course details', level: 'Beginner', description: 'Create collaborative interface designs and interactive prototypes.', href: '/programs/graphics-design-video-editing', image: showcaseImages.design },
  { id: 'course-graphic-design', title: 'Graphic Design', category: 'Design', duration: 'See course details', level: 'Beginner', description: 'Build visual communication skills for digital and print media.', href: '/programs/graphics-design-video-editing', image: showcaseImages.design },
  { id: 'course-web-design', title: 'Web Design', category: 'Design', duration: 'See course details', level: 'Beginner', description: 'Combine layout, typography, and visual hierarchy for the web.', href: '/programs/graphics-design-video-editing', image: showcaseImages.design },
  { id: 'course-digital-marketing', title: 'Digital Marketing', category: 'Marketing', duration: 'See course details', level: 'Beginner', description: 'Plan practical campaigns for modern digital audiences.', href: '/programs/digital-marketing', image: showcaseImages.marketing },
  { id: 'course-seo', title: 'SEO', category: 'Marketing', duration: 'See course details', level: 'Beginner', description: 'Understand search visibility, content discovery, and optimization.', href: '/programs/digital-marketing', image: showcaseImages.marketing },
  { id: 'course-social-media', title: 'Social Media Marketing', category: 'Marketing', duration: 'See course details', level: 'Beginner', description: 'Develop content and campaign strategies for social platforms.', href: '/programs/digital-marketing', image: showcaseImages.marketing },
  { id: 'course-content-marketing', title: 'Content Marketing', category: 'Marketing', duration: 'See course details', level: 'Beginner', description: 'Create useful content that supports audience growth and trust.', href: '/programs/digital-marketing', image: showcaseImages.marketing },
  { id: 'course-business-management', title: 'Business Management', category: 'Business', duration: 'See course details', level: 'Beginner', description: 'Learn practical planning, organization, and team leadership basics.', href: '/contact', image: showcaseImages.business },
  { id: 'course-entrepreneurship', title: 'Entrepreneurship', category: 'Business', duration: 'See course details', level: 'Beginner', description: 'Explore how ideas become structured, sustainable ventures.', href: '/contact', image: showcaseImages.business },
  { id: 'course-business-communication', title: 'Business Communication', category: 'Business', duration: 'See course details', level: 'Beginner', description: 'Communicate with clarity and confidence in professional settings.', href: '/programs/english-communication', image: showcaseImages.business },
];

export const programShowcaseCourses: ProgramShowcaseCourse[] = [
  ...programs.map((program) => ({
    id: `program-${program.id}`,
    title: program.title,
    category: program.category,
    duration: program.duration,
    level: program.level,
    description: program.description,
    href: `/programs/${program.slug}`,
    image: existingProgramImages[program.slug],
  })),
  ...additionalShowcaseCourses,
];