"use client"

import { Avatar } from "@mui/material"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Louis L. Martin",
      avatar: "/professional-man.png",
      text: "I would gladly pay over 600 dollars for executive. Executive has really helped our business. I like executive more and more each day because it makes my life a lot easier.",
    },
    {
      id: 2,
      name: "Louis L. Martin",
      avatar: "/professional-woman-diverse.png",
      text: "I would gladly pay over 600 dollars for executive. Executive has really helped our business. I like executive more and more each day because it makes my life a lot easier.",
    },
    {
      id: 3,
      name: "Louis L. Martin",
      avatar: "/professional-person.png",
      text: "I would gladly pay over 600 dollars for executive. Executive has really helped our business. I like executive more and more each day because it makes my life a lot easier.",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What The People Say'ng</h2>
        <div className="w-16 h-1 bg-yellow-300 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-300 text-2xl">99</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Avatar src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10" />
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
