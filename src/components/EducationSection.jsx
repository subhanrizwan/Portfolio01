"use client"

export default function ResumeSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-300"></div>

          <div className="space-y-12">
            {/* University */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-start items-start mb-2">
                    <span className="text-yellow-300 text-sm">2023 - Present</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-start">
                    BS Computer Science - Sindh Madressatul Islam University
                  </h3>
                  <p className="text-gray-400 text-start">
                    Currently pursuing a Bachelor's degree in Computer Science with a focus on web development,
                    full-stack technologies, and problem-solving skills.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Intermediate */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-300 text-sm">2021 - 2022</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Intermediate - Govt. Science Islamia College
                  </h3>
                  <p className="text-gray-400">
                    Completed Intermediate education in Computer Science, building a strong foundation
                    in programming and IT concepts.
                  </p>
                </div>
              </div>
            </div>    

           

          </div>
        </div>
      </div>
    </section>
  )
}
