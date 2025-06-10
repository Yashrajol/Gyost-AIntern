"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TeamSocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const team = [
    {
      name: 'Sarthak Sonawane',
      role: 'Founder and CEO',
      image: '/images/sarthak-ceo.jpg',
      bio: 'Skilled Fullstack web dev and android dev with programming and AI tools expert.',
    },
    {
      name: 'Yash Rajole',
      role: 'CTO',
      image: '',
      bio: 'Full stack web dev expert and skilled with various programming languages like Java, C, C++ etc.',
    },
    {
      name: 'Tanvi Deore',
      role: 'CFO',
      image: '',
      bio: 'Front end dev with mastery in C++ and having prior knowledge in n8n AI workflows.',
    },
    {
      name: 'Om Dighe',
      role: 'COO',
      image: '',
      bio: 'Skilled programmer with management skills manages the team smoothly.',
    },
    {
      name: 'Geetanjali Ahire',
      role: 'CMO',
      image: '',
      bio: 'Marketing head and expertise in digital marketing.',
    },
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Operations Director',
      company: 'TechCorp Inc.',
      content: 'FlowGenie AI transformed our operations completely. We\'ve automated 80% of our manual processes and seen a 300% increase in efficiency.',
      rating: 5,
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Michael Thompson',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The AI capabilities are incredible. Our team can now focus on innovation instead of repetitive tasks. ROI was evident within the first month.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Ana Silva',
      role: 'Marketing Manager',
      company: 'GrowthCo',
      content: 'Our marketing campaigns are now fully automated and personalized. Customer engagement increased by 250% since implementing FlowGenie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const clients = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'StartupXYZ', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'GrowthCo', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'InnovateLab', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'ScaleTech', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'FutureCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-navy-dark to-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-16">
            Led by industry veterans from Google, Tesla, and Amazon, our team brings decades of experience in AI and automation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 hover:scale-105 group text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-cyan-glow text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h3>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with FlowGenie AI.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-br from-cyan-glow/5 to-purple-electric/5 border-cyan-glow/20 p-8">
            <CardContent className="text-center">
              <Quote className="h-12 w-12 text-cyan-glow mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-text-primary mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                  <AvatarFallback>{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-text-primary">{testimonials[currentTestimonial].name}</div>
                  <div className="text-text-secondary text-sm">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h4 className="text-lg text-text-secondary mb-8">Trusted by leading companies worldwide</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-12 object-contain mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}