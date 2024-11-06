import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface Tech {
    name: string;
    para?: string;
    logo: string;
}

interface ContentData {
    title: string;
    subtitle: string;
    skills_content: Tech[];
}

const Skills = (): ReactElement => {
    const tech: ContentData = {
        title: "Technologies",
        subtitle: "My various set of tools and frameworks to create robust, scalable, and visually engaging applications across multiple platforms or for different purposes.",
        skills_content: [
            { name: "Spring", 
                // para: "Spring Boot | Security | Data",
                 logo: "devicon:spring" },
            { name: "React", logo: "devicon:react" },
            { name: "Flutter", logo: "devicon:flutter" },
            { name: "Electron", logo: "logos:electron" },
            { name: "Python", logo: "devicon:python" },
            { name: "Java", logo: "devicon:java" },
            { name: "HTML", logo: "logos:html-5" },
            { name: "CSS", logo: "logos:css-3" },
            { name: "Javascript", logo: "logos:javascript" },
            { name: "Typescript", logo: "devicon:typescript" },
            { name: "Dart", logo: "devicon:dart" },
            { name: "TailwindCSS", logo: "devicon:tailwindcss" },
            { name: "Docker", logo: "skill-icons:docker" },
            { name: "NX Monorepo", logo: "logos:nx" },
            { name: "Git", logo: "skill-icons:git", 
                // para: "Github | Gitlab"
             },
            { name: "Selenium", logo: "skill-icons:selenium" },
            { name: "Vitest", logo: "devicon:vitest" },
            { name: "JUnit", logo: "devicon:junit" },
            { name: "Cypress", logo: "logos:cypress-icon" },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="min-h-fit bg-bg_light_primary py-10 md:py-14" id="skills">
            <div className="md:container px-5">
                <motion.section
                    className="prose-lg text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.h2 className="title text-2xl md:text-3xl font-bold" variants={itemVariants}>
                        {tech.title}
                    </motion.h2>
                    <motion.h4 className="subtitle text-base md:text-lg text-gray-600" variants={itemVariants}>
                        {tech.subtitle}
                    </motion.h4>
                </motion.section>
                <br />
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {tech.skills_content.map((skill, i) => (
                        <motion.div
                            key={i}
                            className="bg-white sm:cursor-pointer 
                            relative group flex flex-col items-center md:flex-row md:items-center
                            gap-3 p-4  max-w-[180px] self-center sm:max-w-[200px] md:max-w-xs rounded-md border-2 border-slate-200 mx-auto w-full"
                            variants={itemVariants}
                        >
                            <div>
                                <Icon icon={skill.logo} className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-125 duration-200" />
                            </div>
                            <div className="text-left">
                                <h6 className="text-sm font-semibold">{skill.name}</h6>
                                <p className="italic text-xs text-gray-600 text-lef hidden md:flex">{skill.para}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
