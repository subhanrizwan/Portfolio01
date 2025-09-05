import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Socialicons from "../components/SocialIcon.jsx";
import Image from "../assets/images/profile.png";
import { Link, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Customize your contact details
  const Details = {
    ProfileImage: Image,
    Profiletitle: "Write me",
    ProfileSubtitle: "Let's discuss your next project",
    WhatsappIcon: <FaPhone className="text-yellow-300 text-1xl" />,
    whatsapp: "+00 123 4567890",
    EmailIcon: <FaEnvelope className="text-yellow-300 text-1xl" />,
    email: "example@email.com",
    LocationIcon: <FaMapMarkerAlt className="text-yellow-300 " />,
    address: "Your City, Country",
    Follow: "Follow us",
    FormHeading: "Or fill this form",
    SubmitBtnText: "Send",
  };

  const form = useRef();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-12 md:py-20 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      {/* Decorative circles */}
      <div
        className="absolute w-20 h-20 rounded-full top-10 left-4 bg-yellow-400/30 opacity-60 animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute w-16 h-16 delay-1000 rounded-full bottom-10 right-4 bg-yellow-300/40 opacity-60 animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute w-12 h-12 rounded-full opacity-50 top-1/2 left-2 bg-yellow-500/20 animate-bounce"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute w-8 h-8 delay-500 rounded-full top-1/4 right-2 bg-yellow-400/25 opacity-40 animate-pulse" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center mb-8 gap-x-6">
              <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-yellow-300 rounded-full">
                <img src={Details.ProfileImage} alt="John Doe" />
              </div>
              <div>
                <h2 className="mb-0 text-2xl font-bold">
                  {Details.Profiletitle}
                </h2>
                <h2 className="mb-0 text-lg font-bold">
                  {Details.ProfileSubtitle}
                </h2>
              </div>
            </div>

            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                {Details.WhatsappIcon}
                <span className="text-sm text-gray-300">
                  {Details.whatsapp}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {Details.EmailIcon}
                <span className="text-sm text-gray-300 break-all">
                  {Details.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {Details.LocationIcon}
                <span className="text-sm text-gray-300">{Details.address}</span>
              </div>
            </div>

            <h3 className="mb-8 text-2xl font-bold">{Details.Follow}</h3>
            <Socialicons />
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="mb-8 text-2xl font-bold">{Details.FormHeading}</h2>
            <form ref={form} className="space-y-8">
              <TextField
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="filled"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: { borderBottom: "1px solid #4b5563", color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#9ca3af",
                    "&.Mui-focused": { color: "#facc15" },
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                variant="filled"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: { borderBottom: "1px solid #4b5563", color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#9ca3af",
                    "&.Mui-focused": { color: "#facc15" },
                  },
                }}
              />
              <TextField
                label="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={8}
                fullWidth
                InputProps={{
                  sx: {
                    color: "#4b5563",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4b5563",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4b5563",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: " 1px solid #4b5563",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#9ca3af",
                    "&.Mui-focused": { color: "#facc15" }, // label ka color focus par yellow
                  },
                }}
              />

              <button className="relative inline-block p-0 bg-transparent border-0 cursor-pointer font-inherit group">
                {/* Circle */}
                <span className="relative block h-12 w-12 rounded-full bg-yellow-300 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-48">
                  {/* Arrow line */}
                  <span className="absolute left-3 top-1/2 -translate-y-[55%] h-0.5 w-4 bg-transparent transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-4 group-hover:bg-black">
                    {/* Arrow head */}
                    <span className="absolute right-0 -top-[0.25rem] block h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-black"></span>
                  </span>
                </span>

                {/* Button Text */}
                <span className="absolute inset-0 ml-24 text-sm flex items-center justify-center font-bold uppercase tracking-wide text-white whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-black">
                  {Details.SubmitBtnText}
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="pt-8 mt-16 border-t border-gray-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-gray-400 md:mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">John Doe</span> — All rights
              reserved.
            </div>
            <p className="flex cursor-pointer gap-x-3">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map(
                (data) => (
                  <Link
                    key={data}
                    onClick={() => scrollToSection(data.toLowerCase())}
                    className="!text-gray-400 !no-underline hover:!text-yellow-300 duration-300"
                  >
                    {data}
                  </Link>
                )
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
