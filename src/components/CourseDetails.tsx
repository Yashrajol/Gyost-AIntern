import React from 'react';
import { Clock, Users, BookOpen, Award, CheckCircle2, ArrowLeft } from 'lucide-react';

interface CourseDetailsProps {
  courseId: string;
  onClose: () => void;
}

const CourseDetails = ({ courseId, onClose }: CourseDetailsProps) => {
  const courseDetails = {
    'webdev-basic': {
      title: "Web Development Basics",
      price: 499,
      duration: "1 month",
      level: "Beginner",
      instructor: "yash Rajole",
      description: "Start your web development journey with HTML, CSS, and JavaScript fundamentals.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "8+ live lectures",
        "2 minor projects",
        "24/7 doubt support",
        "Lifetime access to course material",
        "Project-based learning",
        "Industry-relevant curriculum",
        "Internship Certificate upon completion"
      ],
      learningOutcomes: [
        "Build responsive websites using HTML5 and CSS3",
        "Create interactive web pages with JavaScript",
        "Understand web development fundamentals",
        "Complete 2 real-world projects",
        "Master modern CSS techniques",
        "Learn debugging and developer tools"
      ],
      curriculum: [
        {
          week: "Week 1",
          topics: ["HTML5 fundamentals", "Document structure", "Forms and validation", "Semantic HTML"]
        },
        {
          week: "Week 2",
          topics: ["CSS3 basics", "Flexbox", "Grid layout", "Responsive design"]
        },
        {
          week: "Week 3",
          topics: ["JavaScript fundamentals", "DOM manipulation", "Events handling"]
        },
        {
          week: "Week 4",
          topics: ["Project work", "Code review", "Best practices", "Deployment"]
        }
      ]
    },
    'webdev-advanced': {
      title: "Advanced Web Development",
      price: 799,
      duration: "2 months",
      level: "Intermediate",
      instructor: "Tanvi Deore",
      description: "Master modern web development with React.js and build professional applications.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "16+ live lectures",
        "2 minor projects",
        "2 major projects",
        "1-on-1 mentoring",
        "Resume building",
        "Interview preparation",
        "Internship Certificate upon completion"
      ],
      learningOutcomes: [
        "Build modern web applications with React.js",
        "Master state management and hooks",
        "Create responsive UI components",
        "Implement authentication and routing",
        "Handle API integration",
        "Deploy applications to production"
      ],
      curriculum: [
        {
          week: "Week 1-2",
          topics: ["React fundamentals", "Components", "Props and state", "JSX"]
        },
        {
          week: "Week 3-4",
          topics: ["Hooks in depth", "Custom hooks", "Context API", "State management"]
        },
        {
          week: "Week 5-6",
          topics: ["Routing", "API integration", "Authentication", "Form handling"]
        },
        {
          week: "Week 7-8",
          topics: ["Major projects", "Performance optimization", "Deployment", "Best practices"]
        }
      ]
    },
    'webdev-fullstack': {
      title: "Full Stack Development",
      price: 999,
      duration: "6 months",
      level: "Advanced",
      instructor: "Sarthak Sonawane",
      description: "Become a complete full-stack developer with MERN stack expertise.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "26+ live lectures",
        "4 minor projects",
        "2 major projects",
        "1-on-1 mentoring",
        "Interview preparation",
        "Job assistance",
        "Internship Certificate upon completion"
      ],
      learningOutcomes: [
        "Master full-stack development with MERN stack",
        "Build complete web applications",
        "Implement complex backend systems",
        "Create RESTful APIs",
        "Handle database operations",
        "Deploy full-stack applications"
      ],
      curriculum: [
        {
          week: "Month 1",
          topics: ["Frontend fundamentals", "HTML5", "CSS3", "JavaScript ES6+"]
        },
        {
          week: "Month 2",
          topics: ["React.js", "Components", "Hooks", "State management"]
        },
        {
          week: "Month 3",
          topics: ["Node.js", "Express.js", "RESTful APIs"]
        },
        {
          week: "Month 4",
          topics: ["MongoDB", "Mongoose", "Database design"]
        },
        {
          week: "Month 5",
          topics: ["Authentication", "Authorization", "Security"]
        },
        {
          week: "Month 6",
          topics: ["Major projects", "Deployment", "Testing", "Best practices"]
        }
      ]
    },
    prompt: {
      title: "Prompt Engineering Mastery",
      price: 499,
      duration: "2 Months",
      level: "Intermediate",
      instructor: "Om Dighe",
      description: "Learn to craft effective prompts for AI models and create powerful AI applications.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Weekly live sessions",
        "Hands-on exercises",
        "Real-world applications",
        "Industry case studies",
        "Internship Certificate upon completion"
      ],
      learningOutcomes: [
        "Understand AI model capabilities",
        "Master prompt engineering techniques",
        "Create effective prompts",
        "Build AI applications",
        "Optimize prompt results",
        "Handle complex scenarios"
      ],
      curriculum: [
        {
          week: "Week 1-2",
          topics: ["AI fundamentals", "Basic prompting"]
        },
        {
          week: "Week 3-4",
          topics: ["Advanced techniques", "Context handling"]
        },
        {
          week: "Week 5-6",
          topics: ["System prompts", "Chain-of-thought"]
        },
        {
          week: "Week 7-8",
          topics: ["Applications", "Best practices"]
        }
      ]
    },
    programming: {
      title: "Programming Fundamentals",
      price: 699,
      duration: "3 Months",
      level: "Beginner",
      instructor: "Geetangali Ahire",
      description: "Master C, C++, and Java programming with practical projects.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Regular assignments",
        "Practice problems",
        "Code reviews",
        "Project guidance",
        "Internship Certificate upon completion"
      ],
      learningOutcomes: [
        "Understand programming basics",
        "Master core concepts",
        "Learn OOP principles",
        "Build applications",
        "Solve coding problems",
        "Debug effectively"
      ],
      curriculum: [
        {
          week: "Week 1-4",
          topics: ["C basics", "Functions", "Pointers"]
        },
        {
          week: "Week 5-8",
          topics: ["C++ OOP", "STL", "Templates"]
        },
        {
          week: "Week 9-12",
          topics: ["Java basics", "Collections", "GUI"]
        }
      ]
    }
  };

  const course = courseDetails[courseId as keyof typeof courseDetails];

  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full mx-auto my-8 relative">
        <div className="max-h-[90vh] overflow-y-auto p-6">
          <div className="flex justify-between items-start mb-6">
            <button 
              onClick={onClose}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Courses
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">{course.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Course Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{module.week}</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">₹{course.price}</div>
                    <button 
                      onClick={() => alert("Enrollment coming soon!")} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                    ><a href='https://docs.google.com/forms/d/e/1FAIpQLSdJG4Rt0cBCbMVVOP9w6UGfAgNUnyp1Xlib2LRjMFRxbAV_RQ/viewform?usp=header'>
                      Enroll Now</a>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-gray-600">{course.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <div className="font-medium">Level</div>
                        <div className="text-gray-600">{course.level}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <div className="font-medium">Instructor</div>
                        <div className="text-gray-600">{course.instructor}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <div className="font-medium">Certificates</div>
                        <div className="text-gray-600">
                          - Course Completion<br />
                          - Internship Certificate
                        </div>
                      </div>
                    </div>
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

export default CourseDetails;