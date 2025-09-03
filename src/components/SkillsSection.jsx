
import { motion } from "framer-motion"
import Heading from "./Heading"

// Customize your technical skills
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 85 },
    { name: "Tailwind", percentage: 90 },
    { name: "Bootstrap", percentage: 80 },
  ]

export default function SkillsSection() {

  // animation variants
  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section
      id="skills"
      className="px-6 py-12 md:py-20 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="mx-auto max-w-7xl">
           <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
        {/* Heading */}
        <Heading Skills={"The Stack I Master"} />

        {/* Technical Skills - Circular Progress */}
        <div className="grid grid-cols-2 gap-8 mb-0 md:grid-cols-5">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg
                  className="w-24 h-24 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40}`}
                    className="text-yellow-300"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    whileInView={{
                      strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.percentage / 100),
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{skill.percentage}%</span>
                </div>
              </div>
              <h3 className="font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  )
}
