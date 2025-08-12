"use client";

export default function EducationSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">My Resume</h2> */}
        {/* <div className="w-16 h-1 bg-yellow-300 mb-8 md:mb-12"></div> */}

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base">
            Education
          </button>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-300"></div>

            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative">
                <div className="absolute -left-6 top-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-start items-start mb-2">
                    <span className="text-yellow-300 text-sm">
                      2023 - Present
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-start">
                    BS Computer Science - Sindh Madressatul Islam University
                  </h3>
                  <p className="text-gray-400 text-start">
                    Currently pursuing a Bachelor's degree in Computer Science
                    with a focus on web development, full-stack technologies,
                    and problem-solving skills.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative">
                <div className="absolute -left-6 top-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-300 text-sm">2021 - 2022</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Intermediate - Govt. Science Islamia College
                  </h3>
                  <p className="text-gray-400">
                    Completed Intermediate education in Computer Science,
                    building a strong foundation in programming and IT concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-300"></div>

            <div className="space-y-12 lg:space-y-16">
            
              {/* Experience Item 3 - Left */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 lg:pr-12">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <span className="text-yellow-300 text-sm font-medium">
                      2023 - Present
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Sindh Madressatul Islam University
                    </h3>
                    <p className="text-yellow-300 font-medium mb-3">
                      BS Computer Science
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Currently pursuing a Bachelor's degree in Computer Science
                      with a focus on web development, full-stack technologies,
                      and problem-solving skills.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-300 rounded-full border-4 border-black shadow-lg"></div>
                <div className="flex-1 pl-8 lg:pl-12"></div>
              </div>

              {/* Experience Item 4 - Right */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-300 rounded-full border-4 border-black shadow-lg"></div>
                <div className="flex-1 pl-8 lg:pl-12">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg">
                    <span className="text-yellow-300 text-sm font-medium">
                      2020 - 2022
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Govt. Science Islamia College
                    </h3>
                    <p className="text-yellow-300 font-medium mb-3">
                      Intermediate
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Completed Intermediate education in Computer Science,
                      building a strong foundation in programming and IT
                      concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
