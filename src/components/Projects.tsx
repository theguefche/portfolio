import { ReactElement } from "react";
import { motion } from "framer-motion";
import apparivo from "../assets/apparivo.png";
import regico from "../assets/Regico.png";
import booking from "../assets/booking.png";
import navigi from "../assets/navigi.jpg";

const projectsList = [
    {
        id: "1",
        title: "Equipment Management And Monitoring System",
        img: apparivo, // Add the project image path here
        desc: "Apparivo is a website platform that comes with a dedicated mobile application for managing faculty resources, automating inventory checks, tracking allocations, and reporting. Effortless access to accurate data and real-time notifications.",
        link: "https://drive.google.com/file/d/1cb3AemkbL0AIYL5iN3QKVk-QNSHh4mwa/view?usp=drive_link"
    },
    {
        id: "2",
        title: "Business Register Submission",
        img: regico, // Add the project image path here
        desc: "Regico is a mobile app that digitizes the submission process, offering a user-friendly interface, multi-language support, live chat with support, and real-time notifications on submission status.",
        link: "https://drive.google.com/file/d/1TdXMyFnqED_vwr54_vk0hr1RgMw4XAvn/view?usp=drive_link"
    },
    {
        id: "3",
        title: "Freelancer/Client Service",
        img: navigi, // Add the project image path here
        desc: "Navigi is a low budget mobile application prototype, offering users the ability to hire service providers based on their profiles, featuring live chat and notifications.",
        link: "https://drive.google.com/file/d/1UAzY3_mCQ140OqiNG7fn70Qh_CM-utwg/view?usp=drive_link"
    },
    {
        id: "4",
        title: "Booking Service",
        img: booking, // Add the project image path here
        desc: "This is a side website that I mainly did to experiment with new libraries and it is a progressing idea to make booking budget stays an easy task for both clients and owners of dormitories, apartments, and hotel rooms.",
        link: "https://drive.google.com/file/d/1AoRGXoSOE2dlADqvEcMqk4pjIuKuTlLH/view?usp=drive_link"
    },
];

const Projects = (): ReactElement => {

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
        <div className="container mx-auto px-4">
            {/* Heading Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-8"
            >
                <motion.section
                    className="prose-lg text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.h2 className="title text-2xl md:text-3xl font-bold" variants={itemVariants}>
                        My Favorite Projects
                    </motion.h2>
                    <motion.h4 className="subtitle text-base md:text-lg text-gray-600" variants={itemVariants}>

                    </motion.h4>
                </motion.section>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projectsList.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2, // Staggering the animation based on index
                        }}
                    >
                        <ProjectCard project={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

interface Project {
    id: string;
    title: string;
    img: string;
    desc: string;
    link?: string;
    github?: string;
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps): ReactElement {
    return (
        <a href={project.link || "#"} target="_blank" rel="noreferrer">
            <div className="max-w-md mx-auto flex flex-col items-center md:items-start md:justify-start hover:ring-2 ring-0 ring-offset-8 transition-all rounded-sm p-2 group cursor-pointer">
                <img
                    className="w-full rounded-md h-[204px] object-cover group-hover:scale-95 transition-all duration-100"
                    src={project.img}
                    alt={project.title}
                />
                <div className="w-full mt-4 group-hover:scale-95 transition-all duration-100">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold ">{project.title}</h3>
                        <div className="space-x-2">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="text-gray-600 text-left text-sm">{project.desc}</p>
                </div>
            </div>
        </a>
    );
}

export default Projects;
