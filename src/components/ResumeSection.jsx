"use client"

export default function ResumeSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
        <div className="w-16 h-1 bg-lime-400 mb-12"></div>

        <div className="flex justify-center mb-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Work Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-lime-400"></div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lime-400 text-sm">2019 - 2020</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Art Director - Facebook Inc</h3>
                  <p className="text-gray-400">
                    I would gladly pay over 600 dollars for executive. Executive has really helped our business. I like
                    executive more and more each day because it makes my life a lot easier.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full"></div>
              <div className="flex-1 pl-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lime-400 text-sm">2020 - 2021</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Senior Designer - Google</h3>
                  <p className="text-gray-400">
                    I would gladly pay over 600 dollars for executive. Executive has really helped our business. I like
                    executive more and more each day because it makes my life a lot easier.
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
