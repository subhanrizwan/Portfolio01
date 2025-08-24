"use client";
import Heading from "./Heading";
export default function EducationSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-6xl mx-auto">
                <Heading Education={"Academic Journey"} />

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
                      BS Computer Science
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Sindh Madressatul Islam University
                    </h3>
                    </div>
                    <div className="">
                     <span className="text-yellow-300 text-sm font-medium">
                      2023 - Present
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
                      Intermediate
                    </p>
                     <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white mt-2">
                      Govt. Science Islamia College
                    </h3>
                    </div>
                    <div className="">
                    <span className="text-yellow-300 text-sm font-medium">
                      2020 - 2022
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
