import PortfolioSlider from "./PortfolioSlider";
import proj3 from "../assets/images/proj3.png";
import PortfolioCard from "./PortfolioCard";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "./Heading";

// Portfolio Projects Data
const portfolioData = [
  {
    id: 1,
    image: proj3,
    title: "Project 1",
    demo: "",
    git: "",
    githubIcon: <FaCode fontSize={"medium"} />,
    demoIcon: <IoMdEye fontSize={"medium"} />,
  },
  {
    id: 2,
    image: proj3,
    title: "Project 2",
    demo: "",
    git: "",
    githubIcon: <FaCode fontSize={"medium"} />,
    demoIcon: <IoMdEye fontSize={"medium"} />,
  },
  {
    id: 3,
    image: proj3,
    title: "Project 3",
    demo: "",
    git: "",
    githubIcon: <FaCode fontSize={"medium"} />,
    demoIcon: <IoMdEye fontSize={"medium"} />,
  },
];

export default function PortfolioSection() {
  return (
    <motion.section
      id="portfolio"
      className="px-6 py-12 md:py-20 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Heading Portfolio={"Code Meets Creativity"} />
        </motion.div>

        {/* For Desktop and Tablet */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <PortfolioCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For Mobile */}
        <motion.div
          className="block md:hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PortfolioSlider />
        </motion.div>
      </div>
    </motion.section>
  );
}
