import { motion } from "framer-motion";
import Heading from "./Heading.jsx";

// Customize your work experience
const resumeData = [
  {
    id: 1,
    company: "TechWave Solutions",
    position: "Frontend Developer",
    duration: "01/2023 - 12/2023",
  },
  {
    id: 2,
    company: "Creative Minds Agency",
    position: "React.js Developer",
    duration: "02/2024 - 07/2024",
  },
  {
    id: 3,
    company: "PixelCraft Studio",
    position: "Web Developer Intern",
    duration: "08/2024 - Present",
  },
];
export default function ResumeSection() {

  // animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 py-12 md:py-20 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="mx-auto max-w-7xl">
        {/* Heading with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Heading Resume={"Journey So Far"} />
        </motion.div>

        {/* Desktop Timeline */}
        <div className="p-3">
          <div className="relative space-y-3">
            {/* Experience Item 1 */}
            {resumeData.map((item) => (
              <motion.div
                className="relative flex items-center hover:!scale-[1.02] duration-[0.8s]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                key={item.id}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between p-6 text-left border rounded-lg shadow-lg backdrop-blur-10 bg-white/10 border-white/10 lg:p-8">
                    <div>
                      <p className="mb-3 font-medium text-yellow-300">
                        {item.company}
                      </p>
                      <h3 className="mt-2 mb-2 text-xl font-bold text-white lg:text-2xl">
                        {item.position}
                      </h3>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-yellow-300">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
