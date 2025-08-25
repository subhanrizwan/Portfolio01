"use client";
import { Link, TextField, Button } from "@mui/material";
import Image from "../assets/images/profile.png";
import Socialicons from "../components/SocialIcon.jsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { IoLogoWhatsapp, IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const Details = {
    name: "I am John Doe",
    position: "Web Developer",
    phone: "+00 123 4567890",
    email: "example@email.com",
    address: "Your City, Country",
    description:
      "I am a Front-End Web Developer with 1+ year of experience in React.js and Tailwind CSS...",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qu0z6wr", "template_xq9hs4o", form.current, {
        publicKey: "Bym6hQFgTyWWzhc95",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-4 w-20 h-20 bg-yellow-400/30 rounded-full opacity-60 animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute bottom-10 right-4 w-16 h-16 bg-yellow-300/40 rounded-full opacity-60 animate-bounce delay-1000" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/2 left-2 w-12 h-12 bg-yellow-500/20 rounded-full opacity-50 animate-bounce" style={{ animationDuration: "4s" }} />
      <div className="absolute top-1/4 right-2 w-8 h-8 bg-yellow-400/25 rounded-full opacity-40 animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center gap-x-6 mb-8">
              <div className="w-24 h-24 bg-yellow-300 rounded-full flex justify-center items-center overflow-hidden">
                <img src={Image} alt="John Doe" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-0">Write me</h2>
                <h2 className="text-lg font-bold mb-0">
                  Let's discuss your next project
                </h2>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <IoLogoWhatsapp className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm">{Details.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Email className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm break-all">{Details.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOn className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm">{Details.address}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8">Follow us</h3>
            <Socialicons />
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">Or fill this form</h2>
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
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
                  sx: { color: "#9ca3af", "&.Mui-focused": { color: "#facc15" } },
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
                  sx: { color: "#9ca3af", "&.Mui-focused": { color: "#facc15" } },
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
                  sx: { color: "white", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#4b5563" } },
                }}
                InputLabelProps={{
                  sx: { color: "#9ca3af", "&.Mui-focused": { color: "#facc15" } },
                }}
              />
              <Button
                type="submit"
                className="gap-x-2 !px-8 !py-3"
                sx={{
                  backgroundColor: "#facc15",
                  color: "black",
                  borderRadius: "50px",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                Send <IoIosSend fontSize="large" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} <span className="font-semibold">John Doe</span> — All rights reserved.
            </div>
            <p className="flex gap-x-3 cursor-pointer">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map((data) => (
                <Link
                  key={data}
                  onClick={() => scrollToSection(data.toLowerCase())}
                  className="!text-gray-400 !no-underline hover:!text-yellow-300 duration-300"
                >
                  {data}
                </Link>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
