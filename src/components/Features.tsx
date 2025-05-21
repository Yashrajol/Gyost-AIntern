import React from 'react';
import { BookOpen, Compass, Clock, Award, Users, RefreshCw } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with real-world experience and proven expertise."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Career Guidance",
      description: "Get personalized career advice and job placement assistance after course completion."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to course materials and resources."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn industry-recognized certifications to showcase your skills to employers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join a community of learners and professionals for networking and collaboration."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Regular Updates",
      description: "Course content is regularly updated to reflect the latest industry trends and technologies."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose G-Yost?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive learning experiences designed to help you succeed in today's competitive job market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;