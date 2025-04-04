import { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col px-6 relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 50 },
            move: { speed: 1 },
            color: { value: "#ffffff" },
            size: { value: 2 },
          },
        }}
      />
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-black bg-opacity-40 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-pink-500">CodeRush</h1>
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">Services</a>
          <Link to="/about" className="relative after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">About</Link>
          <Link to="/Testimonial" className="relative after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">Testimonials</Link>
          <a href="#" className="relative after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          <Link to="/login" className="relative after:block after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">Log In</Link>
          <button className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-pink-600 shadow-lg shadow-pink-500/30"><Link to="/Signup">  Sign Up</Link>
          
          </button>
        </div>
        <button 
          className="md:hidden text-pink-500 text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900 absolute top-16 left-0 w-full">
          <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-5 text-white text-3xl">✕</button>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Testimonials</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Log In</a>
          <button className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-pink-600 shadow-lg shadow-pink-500/30">
            Sign Up
          </button>
        </div>
      )}
      <div className="text-center flex-grow flex flex-col justify-center items-center max-w-xl mx-auto px-4">
        <button className="bg-gray-800 px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm mb-4">
          ⭐ Join 10,000+ student freelancers ➤
        </button>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Turn Your Skills Into <br /> <span className="text-pink-500">Income While Studying</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-sm md:text-base mt-3 md:mt-4"
        >
          The ultimate platform for students to freelance, learn, and earn. Join a
          community of ambitious students turning their skills into success
          stories.
        </motion.p>
      </div>
    </div>
  );
}
