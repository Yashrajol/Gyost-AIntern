import React from 'react';
import { Briefcase, Users, Clock, Award, Building, TrendingUp } from 'lucide-react';

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
      icon: <Briefcase className="w-6 h-6" />,
      title: "Quality Internships",
      description: "Access to verified internship opportunities with top companies across various industries."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals and experienced mentors throughout your internship journey."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Duration",
      description: "Choose from internships ranging from 2 weeks to 6 months based on your availability and goals."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn industry-recognized certificates upon successful completion of your internship program."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Top Companies",
      description: "Partner with leading startups and established companies offering real-world work experience."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Build your professional network and gain valuable skills that accelerate your career development."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose G-Yost Internships?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive internship experiences designed to help you succeed in today's competitive job market.
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