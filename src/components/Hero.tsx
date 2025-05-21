import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="home" className="relative pt-20 pb-32 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full opacity-20 bg-[url('https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg')] bg-no-repeat bg-cover bg-right"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center pt-16 md:pt-32">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 font-medium text-sm">Start Your Tech Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn to Code with <span className="text-blue-600">G-Yost</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Master web development, prompt engineering, and programming languages with our industry-expert instructors. Start your journey to becoming a skilled developer today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-base">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg border border-blue-600 transition-colors duration-300 text-base">
                Get Free Demo
              </a>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1" alt="Student" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Joined by 2000+ students</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 w-24 h-24 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 w-32 h-32 rounded-full opacity-20"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                <img 
                  className="w-full object-cover" 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=750"
                  alt="Student learning"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Web Development</h3>
                  <p className="text-gray-600 mb-4">Master MERN stack development with hands-on projects and expert guidance.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">₹999</span>
                    <a href="#courses" className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;