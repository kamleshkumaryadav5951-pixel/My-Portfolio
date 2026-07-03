import { TECH_STACK } from "../constant/tech-stack";

/**
 * Configuration
 *
 * Modify the information below to customize your portfolio
 */

export const CONFIG = {
  name: {
    first: "Kamlesh",
    last: "Yadav",
  },
  email: "hi@derikn.com",
  role: "Full-stack Web Developer",
  location: "Sukabumi Regency, West Java, Indonesia",
  socials: {
    github: "https://github.com/kamleshkumaryadav5951-pixel",
    linkedin: "https://www.linkedin.com/in/kamlesh-kumar-yadav-235210303",
    instagram: "https://www.instagram.com/kamlesh_yadav6.9",
    dribbble: "https://dribbble.com/kamleshkumaryadav970",
  },
  quotes: {
    text: "This portfolio was made with heart and soul, pouring passion and creativity into every detail to bring it to life. It&apos;s not just a portfolio, it&apos;s a labor of love.",
    author: "Kamlesh Yadav",
  },
  techStacks: [
    ...Object.values(TECH_STACK),
    // you can add tech stack one by one if you don't want to use all registered tech stack
    // TECH_STACK.nextjs,
    // TECH_STACK.reactjs,
    // TECH_STACK.tailwindcss,
  ],
  resume: {
    fileName: "Kamlesh_Resume.pdf",
    downloadUrl: "/files/Kamlesh_Resume.pdf",
  },
  projects: [
    {
      title: "MERN Employee Dashboard",
      summary:
        "A comprehensive employee dashboard application built with the MERN stack. Features include task management, employee directory, and data visualization.",
      image: "/projects/mern-dashboard.png",
      techStack: [
        TECH_STACK.mongodb,
        TECH_STACK.expressjs,
        TECH_STACK.reactjs,
        TECH_STACK.nodejs,
        TECH_STACK.tailwindcss,
      ],
      urls: {
        demo: "https://mern-employee-dashboard-2fvl.vercel.app/dashboard",
        github: "https://github.com/kamleshkumaryadav5951-pixel/mern-employee-dashboard",
      },
      category: "Web App",
    },
  ],
} satisfies Config;
