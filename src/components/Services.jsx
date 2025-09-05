import Heading from "./Heading";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaLaptop,
  FaThLarge,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Services Offered
const services = [
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Front-End Development",
    description: "Modern, responsive websites using React.js & Tailwind CSS.",
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "Back-End Development",
    description:
      "Node.js, Express.js API development Database integration MongoDB, MySQL, etc",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Full Stack Development",
    description:
      "Complete solutions with backend integration & database management",
  },
  {
    icon: <FaLaptop className="w-8 h-8" />,
    title: "Website Customization & Maintenance",
    description:
      "Theme customization (Shopify/WordPress), Regular updates & security fixes",
  },
  {
    icon: <FaThLarge className="w-8 h-8" />,
    title: "UI/UX Design to Code",
    description: "Converting Figma/PSD designs into functional websites",
  },
  {
    icon: <FaBriefcase className="w-8 h-8" />,
    title: "Portfolio & Business Websites",
    description: "Company profile & services websites",
  },
];

export default function AboutSection() {
  return (
    <section
      id="services"
      className="px-8 py-12 md:py-20 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Heading Services={"How I Can Help"} />

          <div className="grid grid-cols-1 gap-8 cursor-pointer md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group md:border-r-[0.2px] md:border-yellow-300 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 text-yellow-300">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-yellow-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
