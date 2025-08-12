"use client"
import Heading from "./Heading.jsx"
export default function ResumeSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-6xl mx-auto">
            <Heading Resume={'Journey So Far'}/>
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">My Resume</h2> */}
        {/* <div className="w-16 h-1 bg-yellow-300 mb-8 md:mb-12"></div> */}

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base">
            Work Experience
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
                  <span className="text-yellow-300  text-xs font-medium">10/2023 - 12/2023</span>
                  <h3 className="text-lg font-bold mb-2 text-white mt-1">Frontend Developer Intern</h3>
                  <p className="text-yellow-300 text-sm font-medium mb-2">SMIT</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Worked on responsive UI designs and frontend features using HTML, CSS, JavaScript, and React.js.
                    Focused on creating accessible and mobile-friendly layouts.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative">
                <div className="absolute -left-6 top-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <span className="text-yellow-300 text-xs font-medium">06/2024 - 07/2024</span>
                  <h3 className="text-lg font-bold mb-2 text-white mt-1">Web Developer Intern</h3>
                  <p className="text-yellow-300 text-sm font-medium mb-2">Coders Cave</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed and optimized websites for performance and responsiveness. Worked with HTML, CSS,
                    JavaScript, React, and Firebase to build functional projects.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative">
                <div className="absolute -left-6 top-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <span className="text-yellow-300 text-xs font-medium">09/2024 - 05/2025</span>
                  <h3 className="text-lg font-bold mb-2 text-white mt-1">Frontend Developer</h3>
                  <p className="text-yellow-300 text-sm font-medium mb-2">A Bit Much Co</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Created modern, responsive web pages and implemented interactive UI components. Used React.js,
                    Tailwind CSS, and API integrations to deliver engaging user experiences.
                  </p>
                </div>
              </div>

              {/* Experience Item 4 */}
              <div className="relative">
                <div className="absolute -left-6 top-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <span className="text-yellow-300 text-xs font-medium">06/2025 - Present</span>
                  <h3 className="text-lg font-bold mb-2 text-white mt-1">Freelance Web Developer</h3>
                  <p className="text-yellow-300 text-sm font-medium mb-2">WordPress / Shopify</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Providing freelance services in WordPress and Shopify development, including custom theme
                    customization, store setup, and optimization. Focused on creating professional, responsive, and
                    high-performing eCommerce websites.
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
              {/* Experience Item 1 - Left */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 lg:pr-12">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <span className="text-yellow-300 text-sm font-medium">10/2023 - 12/2023</span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">Frontend Developer Intern</h3>
                    <p className="text-yellow-300 font-medium mb-3">SMIT</p>
                    <p className="text-gray-300 leading-relaxed">
                      Worked on responsive UI designs and frontend features using HTML, CSS, JavaScript, and React.js.
                      Focused on creating accessible and mobile-friendly layouts.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-300 rounded-full border-4 border-black shadow-lg"></div>
                <div className="flex-1 pl-8 lg:pl-12"></div>
              </div>

              {/* Experience Item 2 - Right */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 lg:pr-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-300 rounded-full border-4 border-black shadow-lg"></div>
                <div className="flex-1 pl-8 lg:pl-12">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg">
                    <span className="text-yellow-300 text-sm font-medium">06/2024 - 07/2024</span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">Web Developer Intern</h3>
                    <p className="text-yellow-300 font-medium mb-3">Coders Cave</p>
                    <p className="text-gray-300 leading-relaxed">
                      Developed and optimized websites for performance and responsiveness. Worked with HTML, CSS,
                      JavaScript, React, and Firebase to build functional projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Item 3 - Left */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 lg:pr-12">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <span className="text-yellow-300 text-sm font-medium">09/2024 - 05/2025</span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">Frontend Developer</h3>
                    <p className="text-yellow-300 font-medium mb-3">A Bit Much Co</p>
                    <p className="text-gray-300 leading-relaxed">
                      Created modern, responsive web pages and implemented interactive UI components. Used React.js,
                      Tailwind CSS, and API integrations to deliver engaging user experiences.
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
                    <span className="text-yellow-300 text-sm font-medium">06/2025 - Present</span>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">Freelance Web Developer</h3>
                    <p className="text-yellow-300 font-medium mb-3">WordPress / Shopify</p>
                    <p className="text-gray-300 leading-relaxed">
                      Providing freelance services in WordPress and Shopify development, including custom theme
                      customization, store setup, and optimization. Focused on creating professional, responsive, and
                      high-performing eCommerce websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
