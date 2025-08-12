"use client";
import { Link } from "@mui/material";
import Image from "../assets/images/Subhan.png";
import Socialicons from "../components/SocialIcon.jsx";
export default function ContactSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <div className="flex items-center gap-x-6">
              <div className="w-24 h-24 bg-yellow-300 rounded-full flex justify-center items-center overflow-hidden">
                <img src={Image} alt="Subhan's image" srcset="" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-0">Write me</h2>
                <h2 className="text-1xl font-bold mb-0">
                  Let's discuss your next project
                </h2>
              </div>
            </div>
            <div className="mb-12 mt-12">
              <Link
                href="mailto:developersubhanahmed@gmail.com"
                className="!text-white text-lg hover:text-yellow-300 transition-colors"
              >
                developersubhanahmed@gmail.com
              </Link>
            </div>
            <h3 className="text-2xl font-bold mb-8">Follow us</h3>
            <Socialicons />
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
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              Copyright 2025 - All right reserved
            </div>
            <p className="flex gap-x-3 cursor-pointer">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map(
                (data) => (
                  <Link
                    key={data}
                    onClick={() => scrollToSection(data.toLowerCase())}
                    className="!text-gray-400 !no-underline hover:!text-yellow-300 duration-300"
                  >
                    {data}{" "}
                  </Link>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
