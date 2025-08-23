"use client";
import { Link, TextField, Button } from "@mui/material";
import Image from "../assets/images/profile.png";
import Socialicons from "../components/SocialIcon.jsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { IoLogoWhatsapp, IoIosSend } from "react-icons/io";

export default function ContactSection() {
  const Details = {
    welcome: "console.log('Welcome to my Portfolio!')",
    name: "I am John Doe",
    ima: "Creative ",
    position: "Web Developer",
    phone: "+00 123 4567890",
    email: "example@email.com",
    address: "Your City, Country",
    description:
      "I am a Front-End Web Developer with 1+ year of experience in React.js and Tailwind CSS, creating modern, responsive, and high-performance websites. I also freelance on WordPress and Shopify, building custom websites and e-commerce stores. With creativity and technical skills, I deliver clean, user-friendly, and impactful digital experiences.",
  };

  const form = useRef();

  const sendEmail = (e) => {
    let empty = document.getElementById("input");
    e.preventDefault();

    emailjs
      .sendForm("service_qu0z6wr", "template_xq9hs4o", form.current, {
        publicKey: "Bym6hQFgTyWWzhc95",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          empty.innerHTML = "";
          //  setName("");
          // setEmail("");
          // setPhone("");
          // setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          //    setName("");
          //   setEmail("");
          //   setPhone("");
          //   setMessage("");
        }
      );
  };

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
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      {/* Decorative elements - Updated to yellow theme */}
      <div
        className="absolute top-10 left-4 md:-top-0 md:left-0 w-20 h-20 md:w-32 md:h-32 bg-yellow-400/30 rounded-full opacity-60 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-16 h-16 md:w-24 md:h-24 bg-yellow-300/40 rounded-full opacity-60 animate-bounce delay-1000"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-2 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-yellow-500/20 rounded-full opacity-50 animate-bounce"
        style={{ animationDuration: "4s" }}
      ></div>
      <div className="absolute top-1/4 right-2 md:right-16 w-8 h-8 md:w-16 md:h-16 bg-yellow-400/25 rounded-full opacity-40 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <div className="flex items-center gap-x-6 mb-8">
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
            {/* <div className="mb-12 mt-12">
              <Link
                href="mailto:developersubhanahmed@gmail.com"
                className="!text-white text-lg hover:text-yellow-300 transition-colors"
              >
                developersubhanahmed@gmail.com
              </Link>
            </div> */}
            <div className="space-y-3 md:space-y-4 mb-6  md:mb-8">
              <div className="flex items-center  lg:justify-start gap-3">
                <IoLogoWhatsapp className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm md:text-sm">
                  {Details.phone}
                </span>
              </div>
              <div className="flex items-center  lg:justify-start gap-3">
                <Email className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm md:text-sm break-all">
                  {Details.email}
                </span>
              </div>
              <div className="flex items-center lg:justify-start gap-3">
                <LocationOn className="text-yellow-300 text-2xl" />
                <span className="text-gray-300 text-sm md:text-sm">
                  {Details.address}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Follow us</h3>
            <Socialicons />
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Or fill this form</h2>
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <TextField
                id="filled-password-input"
                label="Name"
                name="name"
                type="text"
                autoComplete="current-password"
                variant="filled"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "#9ca3af",
                    fontSize: "0.8rem",
                    "&.Mui-focused": {
                      color: "#facc15",
                    },
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #4b5563",
                    color: "white",
                    "&::placeholder": {
                      color: "#9ca3af",
                      opacity: 1,
                    },
                    "&:focus-within": {
                      borderBottomColor: "#facc15",
                    },
                    transition: "all 0.3s ease",
                  },
                }}
              />
              <div>
                <TextField
                  id="filled-password-input"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="current-password"
                  variant="filled"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "#9ca3af",
                      fontSize: "0.8rem",
                      "&.Mui-focused": {
                        color: "#facc15",
                      },
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      backgroundColor: "transparent",
                      borderBottom: "1px solid #4b5563",
                      color: "white",
                      "&::placeholder": {
                        color: "#9ca3af",
                        opacity: 1,
                      },
                      "&:focus-within": {
                        borderBottomColor: "#facc15",
                      },
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  name="description"
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={12}
                  className="w-full bg-Fieldbg rounded"
                  InputLabelProps={{
                    sx: {
                      color: "#9ca3af",
                      fontSize: "0.8rem",
                      "&.Mui-focused": {
                        color: "#facc15", // focus pe label yellow
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4b5563", // default gray
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4b5563", // hover par same gray
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #facc15", // focus par yellow
                      },
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  className="gap-x-2 !px-8 !py-3"
                  sx={{
                    backgroundColor: "#facc15",
                    color: "black",
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                  variant="outlined"
                >
                  Send <IoIosSend fontSize={"large"} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">John Doe</span> — All rights
              reserved.
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
        <div style={{
          backgroundImage:`url(')`
        }} className="page-bottom-bg absolute w-screen h-[218px] bg-center bg-no-repeat left-1/2 bottom-0 -translate-x-1/2 pointer-events-none" />
      </div>
    </section>
  );
}
