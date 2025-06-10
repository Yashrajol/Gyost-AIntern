"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: '',
  });

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@flowgenieai.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nashik, Maharashtra, India',
      description: '422003',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <section ref={ref} className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss how FlowGenie AI can help you automate and scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20">
              <CardHeader>
                <CardTitle className="text-2xl text-text-primary">
                  Send us a message
                </CardTitle>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-gradient-cta text-white'
                            : 'bg-navy-light text-text-secondary border border-cyan-glow/20'
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-8 h-1 mx-2 transition-all duration-300 ${
                            currentStep > step ? 'bg-gradient-cta' : 'bg-navy-light'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-text-primary">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="bg-navy-light border-cyan-glow/20 text-text-primary"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-text-primary">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="bg-navy-light border-cyan-glow/20 text-text-primary"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-text-primary">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-navy-light border-cyan-glow/20 text-text-primary"
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="company" className="text-text-primary">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-navy-light border-cyan-glow/20 text-text-primary"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-text-primary">Your Role</Label>
                        <Select onValueChange={(value: string) => setFormData({...formData, role: value})}>
                          <SelectTrigger className="bg-navy-light border-cyan-glow/20 text-text-primary">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/Founder</SelectItem>
                            <SelectItem value="cto">CTO</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="interest" className="text-text-primary">What interests you?</Label>
                        <Select onValueChange={(value: string) => setFormData({...formData, interest: value})}>
                          <SelectTrigger className="bg-navy-light border-cyan-glow/20 text-text-primary">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automation">Workflow Automation</SelectItem>
                            <SelectItem value="integration">System Integration</SelectItem>
                            <SelectItem value="ai">AI Implementation</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="message" className="text-text-primary">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="bg-navy-light border-cyan-glow/20 text-text-primary"
                          placeholder="Tell us about your project or ask any questions..."
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        onClick={handleBack}
                        className="w-full text-text-secondary hover:text-cyan-glow hover:bg-cyan-glow/10"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type={currentStep === 3 ? "submit" : "button"}
                      onClick={currentStep === 3 ? undefined : handleNext}
                      className="bg-gradient-cta hover:scale-105 transition-all duration-300 ml-auto"
                    >
                      {currentStep === 3 ? 'Send Message' : 'Next'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-glow/20 to-purple-electric/20">
                      <info.icon className="h-6 w-6 text-cyan-glow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1">{info.title}</h4>
                      <p className="text-cyan-glow font-medium">{info.details}</p>
                      <p className="text-text-secondary text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-64 bg-gradient-to-br from-navy-light/30 to-navy-dark/30 rounded-lg border border-cyan-glow/20 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="h-12 w-12 text-cyan-glow mx-auto mb-4" />
                <p className="text-text-secondary">Interactive Map</p>
                <p className="text-sm text-text-secondary">Nashik, Maharashtra, India 422003</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg bg-gradient-to-r from-cyan-glow/10 to-purple-electric/10 border border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-cyan-glow group-hover:text-purple-electric transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}