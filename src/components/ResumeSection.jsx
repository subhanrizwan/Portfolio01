
"use client"

export default function ResumeSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
        <div className="w-16 h-1 bg-yellow-300 mb-12"></div>

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Work Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-300"></div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-start items-start mb-2">
                    <span className="text-yellow-300 text-sm">10/2023 - 12/2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-start">Frontend Developer Intern - SMIT</h3>
                  <p className="text-gray-400 text-start">
                    Worked on responsive UI designs and frontend features using HTML, CSS, JavaScript, and React.js.
                    Focused on creating accessible and mobile-friendly layouts.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-300 text-sm">06/2024 - 07/2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Developer Intern - Coders Cave</h3>
                  <p className="text-gray-400">
                    Developed and optimized websites for performance and responsiveness. Worked with HTML, CSS, 
                    JavaScript, React, and Firebase to build functional projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-300 text-sm">09/2024 - 05/2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-start">Frontend Developer - A Bit Much Co</h3>
                  <p className="text-gray-400 text-start">
                    Created modern, responsive web pages and implemented interactive UI components. Used React.js, 
                    Tailwind CSS, and API integrations to deliver engaging user experiences.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Experience Item 4 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="flex-1 pl-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-300 text-sm">06/2025 - Present</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Freelance Web Developer - WordPress / Shopify</h3>
                  <p className="text-gray-400">
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
    </section>
  )
}
