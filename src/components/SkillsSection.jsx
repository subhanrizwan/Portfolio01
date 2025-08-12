"use client"
import Heading from "./Heading"
export default function SkillsSection() {
  const skills = [
    { name: "English", percentage: 85 },
    { name: "French", percentage: 75 },
    { name: "Spanish", percentage: 35 },
    { name: "Japanese", percentage: 10 },
  ]

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 85 },
    { name: "Tailwind", percentage: 90 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Wordpress/Shopify", percentage: 80 },
    { name: "Node.js", percentage: 70 },
    { name: "Express.js", percentage: 70 },
    { name: "Next.js", percentage: 65 },
    { name: "MongoDB", percentage: 65 },
    { name: "MySQL", percentage: 65 },
    { name: "Firebase", percentage: 65 },
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-7xl mx-auto">
         <Heading Skills={'The Stack I Master'}/>
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2> */}
        {/* <div className="w-16 h-1 bg-yellow-300 mb-12"></div> */}

        {/* Language Skills - Circular Progress */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`}
                    className="text-yellow-300"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{skill.percentage}%</span>
                </div>
              </div>
              <h3 className="text-white font-medium">{skill.name}</h3>
            </div>
          ))}
        </div> */}

        {/* Technical Skills - Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">CODING</h3>
            {technicalSkills.slice(0, 6).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-yellow-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-yellow-300 h-1 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">DEVELOPMENT</h3>
            {technicalSkills.slice(6).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-yellow-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-yellow-300 h-1 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
