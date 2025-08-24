"use client";
import Heading from "./Heading.jsx";
export default function ResumeSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-7xl mx-auto">
        <Heading Resume={"Journey So Far"} />
        <div className="flex justify-center mb-0">
          {/* <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base">
            Work Experience
          </button> */}
        </div>
        {/* Desktop Timeline */}
        <div className="p-3">
          <div className="relative">
            <div className="space-y-6 lg:space-y-6">
               {/* Experience Item 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 ">
                  <div className="flex justify-between items-center flex-wrap backdrop-blur-10 bg-white/10 border border-white/10 p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <div className="">
                    <p className="text-yellow-300 font-medium mb-3">
                      Coders Cave
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Web Developer Intern
                    </h3>
                    </div>
                    <div className="">
                     <span className="text-yellow-300 text-sm font-medium">
                      06/2024 - 07/2024
                    </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Item 3 - Left */}
              <div className="relative flex items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-center flex-wrap backdrop-blur-10 bg-white/10 border border-white/10 p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <div className="">
                    <p className="text-yellow-300 font-medium mb-3">
                      A Bit Much Co
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Frontend Developer
                    </h3>
                    </div>
                    <div className="">
                    <span className="text-yellow-300 text-sm font-medium">
                      09/2024 - 05/2025
                    </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Item 4 - Left */}
              <div className="relative flex items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-center flex-wrap backdrop-blur-10 bg-white/10 border border-white/10 p-6 lg:p-8 rounded-lg shadow-lg text-left">
                    <div className="">
                    <p className="text-yellow-300 font-medium mb-3">
                      WordPress / Shopify
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Freelance Web Developer
                    </h3>
                    </div>
                    <div className="">
                    <span className="text-yellow-300 text-sm font-medium">
                      06/2025 - Present
                    </span>
                    </div>
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
