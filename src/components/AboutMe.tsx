import { ReactElement } from "react";
import { motion } from "framer-motion";
import Me from "../assets/me.png";

const AboutMe = (): ReactElement => {
    const text = "I’m a software engineer and an ongoing student. I possess a diverse skill set that allows me to independently craft websites, design software systems, and create effective database models. I'm passionate about building scalable solutions to deliver outstanding user experiences, with knowledge in Machine/Deep Learning. Committed to continuous learning, I stay updated on the latest technologies and best practices in the field. I'm currently also advancing my skills in the DevOps process to enhance development workflows and streamline deployments.".split(" ");

    return (
        <motion.section
            className="bg-bg_light_primary py-14"
            id="about"
            initial={{ opacity: 0 }}  // Initial state when out of view
            whileInView={{ opacity: 1 }}  // State when in view
            transition={{ duration: 0.6 }}  // Transition duration
            viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the section is in view
        >
            <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0 max-w-xs md:w-1/3 w-full relative">
                    <div className="before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-400/25 before:top-0 before:left-0 before:-translate-x-5 before:-translate-y-5 before:rounded-lg hover:before:translate-x-0 hover:before:translate-y-0 hover:scale-110 delay-100 duration-300 before:duration-150">
                        <img
                            src={Me}
                            alt="About Me"
                            className="w-full h-auto rounded-lg shadow-md object-cover relative "
                        />
                    </div>
                </div>
                <div className="md:w-2/3 w-full text-left">
                    <motion.h2
                        className="text-3xl font-semibold mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Get to Know Me
                    </motion.h2>
                    <motion.p
                        className="text-base text-gray-700 leading-relaxed text-justify"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {text.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;
