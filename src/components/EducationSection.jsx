;
import { motion } from "framer-motion";
import Heading from "./Heading";

// Customize your education details
const educationData = [
  {
    id: 1,
    degree: "Bachelor in Computer Science",
    institution: "ABC University",
    duration: "2022 - Present",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "XYZ College",
    duration: "2020 - 2022",
  },
];

export default function EducationSection() {
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
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Heading */}
          <Heading Education={"Academic Journey"} />
          {/* Desktop Timeline */}
          <div className="p-3">
            <div className="relative">
              <div className="space-y-3">
                {/* Experience Item 1 */}
                {educationData.map((item) => (
                  <motion.div
                    className="relative flex items-center hover:!scale-[1.02] duration-[0.8s]"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="flex-1 ">
                      <div className="flex justify-between items-center flex-wrap backdrop-blur-10 bg-white/10 border border-white/10 p-6 lg:p-8 rounded-lg shadow-lg text-left">
                        <div className="">
                          <p className="text-yellow-300 font-medium mb-3">
                            {item.degree}
                          </p>
                          <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                            {item.institution}
                          </h3>
                        </div>
                        <div className="">
                          <span className="text-yellow-300 text-sm font-medium">
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
        </motion.div>
      </div>
    </section>
  );
}
