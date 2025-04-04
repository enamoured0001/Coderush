import React from "react";

const features = [
  { title: "Flexible Hours", desc: "Work on your own schedule", icon: "\u{1F55B}" },
  { title: "Weekly Payments", desc: "Get paid consistently", icon: "\u{1F4B5}" },
  { title: "Skill Development", desc: "Learn as you earn", icon: "\u{1F4C8}" },
  { title: "Community Support", desc: "Connect with other students", icon: "\u{1F465}" },
];

const services = [
  { title: "Web Development", rate: "$30-50/hr", desc: "Build modern websites and applications", icon: "\u{1F4BB}" },
  { title: "Business Consulting", rate: "$25-40/hr", desc: "Help businesses grow and succeed", icon: "\u{1F4BC}" },
  { title: "Social Media", rate: "$20-35/hr", desc: "Manage and grow social presence", icon: "\u{1F4F1}" },
  { title: "Content Writing", rate: "$25-45/hr", desc: "Create engaging content that converts", icon: "\u{1F4DA}" },
];

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      <header className="flex justify-between items-center pb-6">
        <h1 className="text-xl font-bold text-pink-500">CodeRush</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-pink-500">Services</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Testimonials</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </nav>
        <div className="space-x-4 hidden md:flex">
          <button className="text-white">Log In</button>
          <button className="bg-pink-500 px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
      <section className="text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto my-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-3xl">{item.icon}</p>
              <h3 className="font-bold mt-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-3xl">{service.icon}</p>
              <h3 className="font-bold mt-3">{service.title}</h3>
              <p className="text-pink-500 font-semibold">{service.rate}</p>
              <p className="text-gray-400 text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
