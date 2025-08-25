"use client";

import Heading from "./Heading";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CasesIcon from "@mui/icons-material/Cases";
import GridViewIcon from "@mui/icons-material/GridView";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import { motion } from "framer-motion";

export default function AboutSection() {
  const services = [
    {
      icon: <FlipToFrontIcon className="w-8 h-8" />,
      title: "Front-End Development",
      description: "Modern, responsive websites using React.js & Tailwind CSS.",
    },
    {
      icon: <ScreenshotMonitorIcon className="w-8 h-8" />,
      title: "Back-End Development",
      description:
        "Node.js, Express.js API development Database integration MongoDB, MySQL, etc",
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "Complete solutions with backend integration & database management",
    },
    {
      icon: <DeveloperModeIcon className="w-8 h-8" />,
      title: "Website Customization & Maintenance",
      description:
        "Theme customization (Shopify/WordPress), Regular updates & security fixes",
    },
    {
      icon: <GridViewIcon className="w-8 h-8" />,
      title: "UI/UX Design to Code",
      description: "Converting Figma/PSD designs into functional websites",
    },
    {
      icon: <CasesIcon className="w-8 h-8" />,
      title: "Portfolio & Business Websites",
      description: "Company profile & services websites",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-8 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
        <Heading Services={"How I Can Help"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group md:border-r-[0.2px] md:border-yellow-300 "
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-yellow-300 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
