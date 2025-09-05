import Rectangle from "./Rectangle";
import Image from "../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion";

// Customize your personal details
const Details = {
  welcome: "console.log('Welcome to my Portfolio!')",
  name: "I am John Doe",
  ima: "Creative ",
  position1: "Web Developer",
  position2: "React Js Developer",
  position3: "Freelancer",
  ProfileImage: Image,
  description:
    "I am a Front-End Web Developer with 1+ year of experience in React.js and Tailwind CSS, creating modern, responsive, and high-performance websites. I also freelance on WordPress and Shopify, building custom websites and e-commerce stores. With creativity and technical skills, I deliver clean, user-friendly, and impactful digital experiences.",
  ResumeButton: "Resume",
  ResumeLink:'/public/SubhanAhmed.pdf'
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-20 h-20 rounded-full top-10 left-4 md:top-20 md:left-20 md:w-32 md:h-32 bg-yellow-400/30 opacity-60"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-16 h-16 rounded-full bottom-10 right-4 md:bottom-20 md:right-20 md:w-24 md:h-24 bg-yellow-300/40 opacity-60"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 px-4 py-10 mx-auto md:px-6 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="order-2 px-4 lg:order-1 text-start lg:text-left lg:ml-20"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="flex items-center justify-start gap-2 mb-4 lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Rectangle />
              <span className="text-sm text-gray-300 md:text-base">
                {Details.welcome}
              </span>
            </motion.div>

            <motion.h1
              className="text-[0.9em] md:text-[1em] font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {Details.name}
            </motion.h1>

            <motion.h2
              className="mb-6 text-2xl font-bold text-white md:text-3xl md:mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {Details.ima}{" "}
              <span className="text-yellow-300 text-[0.9em] md:text-[1em]">
                <TypeAnimation
                  sequence={[
                    Details.position1,
                    1200,
                    Details.position2,
                    1200,
                    Details.position3,
                    1200
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>

            {/* Personal Information with stagger */}
            <motion.div
            onClick={()=>window.open(Details.ResumeLink,'_blank')}
              className="mb-6 space-y-3 md:space-y-4 md:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
                <button className="relative inline-block p-0 bg-transparent border-0 cursor-pointer font-inherit group">
                  {/* Circle */}
                  <span className="relative block h-12 w-12 rounded-full bg-yellow-300 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-48">
                    {/* Arrow line */}
                    <span className="absolute left-3 top-1/2 -translate-y-[55%] h-0.5 w-4 bg-transparent transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-4 group-hover:bg-black">
                      {/* Arrow head */}
                      <span className="absolute right-0 -top-[0.25rem] block h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-black"></span>
                    </span>
                  </span>

                  {/* Button Text */}
                  <span className="absolute inset-0 ml-24 text-sm flex items-center justify-center font-bold uppercase tracking-wide text-white whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-black">
                    {Details.ResumeButton}
                  </span>
                </button>
                
            </motion.div>

            <motion.p
              className="text-gray-400 !text-left leading-relaxed text-sm md:text-base lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            >
              {Details.description}
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative order-1 py-20 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 transform bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 transform bg-gradient-to-br from-yellow-300/80 to-yellow-500/60 rounded-3xl -rotate-3"></div>

              <motion.div
                className="relative w-full h-full p-3 overflow-hidden shadow-2xl rounded-3xl bg-black/20 md:p-4"
                animate={{ y: [0, -10, 0] }}
              >
                <img
                  src={Details.ProfileImage}
                  alt="John Doe"
                  className="object-contain w-full h-full rounded-2xl"
                />
              </motion.div>

              <div className="absolute p-2 bg-white rounded-full shadow-lg -top-2 -right-2 md:-top-4 md:-right-4 md:p-4 ">
                <span className="text-lg md:text-2xl">🚀</span>
              </div>
              <div className="absolute p-2 bg-white rounded-full shadow-lg -bottom-2 -left-2 md:-bottom-4 md:-left-4 md:p-4 ">
                <span className="text-lg md:text-2xl">👨🏻‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
