"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Write me</h2>
            <div className="mb-12">
              <a
                href="mailto:hello@mosbycreative.com"
                className="text-white text-lg hover:text-yellow-300 transition-colors"
              >
                hello@mosbycreative.com
              </a>
            </div>

            <h3 className="text-2xl font-bold mb-8">My office</h3>
            <div className="mb-12">
              <p className="text-white text-lg leading-relaxed">
                1444 S. Alameda Street Los Angeles,
                <br />
                California 90021
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8">Follow us</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  Facebook.
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  Twitter.
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  Behance.
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  Dribbble.
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  Instagram.
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  LinkedIn.
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Or fill this form</h2>
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-yellow-300 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-yellow-300 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-yellow-300 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell me about your project"
                  rows={6}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-yellow-300 focus:outline-none resize-none transition-colors"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Brand Logos Section */}
        {/* <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-white text-2xl font-bold">gleam</div>
            <div className="text-white text-2xl font-bold">
              check
              <br />
              this
            </div>
            <div className="text-white text-2xl font-bold tracking-wider">EXIMIA</div>
            <div className="text-white text-2xl font-bold tracking-widest">M A M O K O</div>
          </div>
        </div> */}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">Copyright 2025 - All right reserved</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
