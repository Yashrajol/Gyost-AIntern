import React, { useState } from 'react';
import { Star, Users, Clock } from 'lucide-react';
import CourseDetails from './CourseDetails';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  instructor: string;
  subcategory?: string;
}

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'prompt', name: 'Prompt Engineering' },
    { id: 'programming', name: 'Programming' }
  ];

  const coursesData: Course[] = [
    {
      id: 1,
      title: "Web Development Basics",
      description: "Learn HTML, CSS, and JavaScript fundamentals with hands-on projects.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "webdev",
      subcategory: "basic",
      rating: 4.8,
      students: 845,
      duration: "1 month",
      price: 499,
      instructor: "Yash Rajole"
    },
    {
      id: 2,
      title: "Advanced Web Development",
      description: "Master React.js and build modern web applications with real-world projects.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "webdev",
      subcategory: "advanced",
      rating: 4.9,
      students: 632,
      duration: "2 months",
      price: 799,
      instructor: "Tanvi Deore"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete MERN stack development with advanced projects and deployment.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "webdev",
      subcategory: "fullstack",
      rating: 4.9,
      students: 421,
      duration: "6 months",
      price: 999,
      instructor: "Sarthak Sonawane"
    },
    {
      id: 4,
      title: "Prompt Engineering Mastery",
      description: "Learn to craft effective prompts for AI models and create powerful AI applications.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "prompt",
      rating: 4.7,
      students: 379,
      duration: "8 weeks",
      price: 499,
      instructor: "Om Dighe"
    },
    {
      id: 5,
      title: "Programming Fundamentals",
      description: "Master C, C++, and Java programming with practical projects.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "programming",
      rating: 4.8,
      students: 582,
      duration: "12 weeks",
      price: 699,
      instructor: "Geetanjali Aher"
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <div id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your tech journey with our industry-focused courses
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto hide-scrollbar">
          <div className="inline-flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {categories.find(cat => cat.id === course.category)?.name}
                  </span>
                  <div className="flex items-center ml-auto">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-blue-600 font-bold text-lg">₹{course.price}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCourseId(`${course.category}${course.subcategory ? '-' + course.subcategory : ''}`)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">Instructor: {course.instructor}</div>
              </div>
            </div>
          ))}
        </div>

        {selectedCourseId && (
          <CourseDetails 
            courseId={selectedCourseId} 
            onClose={() => setSelectedCourseId(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default Courses;