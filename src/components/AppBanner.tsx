import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'
import { Icon } from "@iconify/react";
import developerLight from '../assets/developer.svg';
const AppBanner = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold  text-5xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light "
				>
					Hi, There 👋 
				</motion.p>

				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					<span className='my-2'>Iam LEGUEFCHE </span><br /> <span className='capitalize'> Alaa Eddine</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					<Typewriter
						options={{
							strings: [
								"Full Stack Developer",
								"Software Engineer",
								"Student",
							],
							autoStart: true,
							loop: true,
							deleteSpeed: 50,
						}}
					/>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="LEGUEFCHE-AlaaEddine-Resume.pdf"
						href="https://drive.usercontent.google.com/download?id=1kMyEHlH9fhfbiu-Vq3XbHzLwsw-3Vz3S&export=download&authuser=0&confirm=t&uuid=42963576-d7a1-4588-89a0-62c2879d212c&at=AENtkXZlBEqcn0rxMYDfO8ocKX7E:1730926853019"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<Icon icon={"hugeicons:download-circle-01"} className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						developerLight
						//   : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
