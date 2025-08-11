"use client"

import { Web, PhoneAndroid, TrendingUp, Inventory, Settings, Group } from "@mui/icons-material"

export default function AboutSection() {
  const services = [
    {
      icon: <Web className="w-8 h-8" />,
      title: "Web Sites and Applications",
      description: "Professional web development services",
    },
    {
      icon: <PhoneAndroid className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategy and Branding",
      description: "Brand strategy and visual identity",
    },
    {
      icon: <Inventory className="w-8 h-8" />,
      title: "Product Research",
      description: "Market research and product analysis",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "App Optimization",
      description: "Performance and user experience optimization",
    },
    {
      icon: <Group className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Social media strategy and content management",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I do</h2>
        <div className="w-16 h-1 bg-lime-400 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="text-lime-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
