import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";


interface ServiceContent {
    logo: string;
    name: string;
    para: string;
}

interface Services {
    title: string;
    subtitle: string;
    service_content: ServiceContent[];
}


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

const Services = () => {
    const services: Services = {
        title: "Services",
        subtitle: "What I can do for you. Providing cutting-edge solutions for various needs, including design, development, and more.",
        service_content: [
            { name: "Web Development", para: "Crafting dynamic, responsive, and high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices.", logo: "icon-park:browser" },
            { name: "Mobile Development", para: "Creating cross-platform apps for iOS and Android, delivering an intuitive user experience with cross-platform compatibility.", logo: "flat-color-icons:smartphone-tablet" },
            { name: "Software Architecture", para: "Designing future-proof and scalable system architectures that ensure efficiency, maintainability, and ease of integration for complex business solutions metting your needs.", logo: "icon-park-solid:system" },
            { name: "Testing & QA", para: "Guaranteeing software quality through comprehensive testing strategies, combining automated and manual testing to deliver flawless, bug-free products.", logo: "fluent-emoji-flat:test-tube" },
        ],
    };

    return (
        <section id="services">
            <div className="md:container px-5 py-14">
                <motion.section
                    className="prose-lg text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <motion.h2 className="title text-2xl md:text-3xl font-bold" variants={itemVariants}>
                        {services.title}
                    </motion.h2>
                    <motion.h4 className="subtitle text-base md:text-lg text-gray-600" variants={itemVariants}>
                        {services.subtitle}
                    </motion.h4>
                </motion.section>
                <br />
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2  gap-5 justify-between group"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {services.service_content.map((service, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
                            variants={itemVariants}
                        >
                            <Icon icon={service.logo} className="w-10 h-10 sm:w-9 sm:h-9 group-hover:scale-125 duration-200 mx-auto text-indigo-400" />
                            <h6 className="my-3 font-semibold">{service.name}</h6>
                            <p className="leading-7 text-sm text-gray-600">{service.para}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
