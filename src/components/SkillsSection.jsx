"use client"

export default function SkillsSection() {
  const skills = [
    { name: "English", percentage: 85 },
    { name: "French", percentage: 75 },
    { name: "Spanish", percentage: 35 },
    { name: "Japanese", percentage: 10 },
  ]

  const technicalSkills = [
    { name: "Photoshop", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Python", percentage: 70 },
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-16 h-1 bg-lime-400 mb-12"></div>

        {/* Language Skills - Circular Progress */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
                    className="text-lime-400"
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
        </div>

        {/* Technical Skills - Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">CODING</h3>
            {technicalSkills.slice(0, 3).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-lime-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">DESIGN</h3>
            {technicalSkills.slice(3).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-lime-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full transition-all duration-1000"
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
