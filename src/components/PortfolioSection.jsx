;
import PortfolioSlider from "./PortfolioSlider";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";
import PortfolioCard from "./PortfolioCard";
import { motion } from "framer-motion";
import Heading from "./Heading";

// Portfolio Projects Data
const portfolioData = [
  {
    id: 1,
    title: "Project 1",
    image: proj1,
    demo: "https://demo1.com",
    git: "https://github.com/demo1",
  },
  {
    id: 2,
    title: "Project 2",
    image: proj2,
    demo: "https://demo2.com",
    git: "https://github.com/demo2",
  },
  {
    id: 3,
    title: "Project 3",
    image: proj3,
    demo: "https://demo3.com",
    git: "https://github.com/demo3",
  },
  {
    id: 4,
    title: "Project 4",
    image: proj4,
    demo: "https://demo4.com",
    git: "https://github.com/demo4",
  },
  {
    id: 5,
    title: "Project 5",
    image: proj5,
    demo: "https://demo5.com",
    git: "https://github.com/demo5",
  },
  {
    id: 6,
    title: "Project 6",
    image: proj6,
    demo: "https://demo6.com",
    git: "https://github.com/demo6",
  },
];

export default function PortfolioSection() {

  return (
    <motion.section
      id="portfolio"
      className="py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
      initial={{ opacity: 0, y: 100 }}      
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}  
    >
      <div className="max-w-7xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

