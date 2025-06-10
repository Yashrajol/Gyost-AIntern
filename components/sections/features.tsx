"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Zap, 
  Shield, 
  Gauge, 
  Puzzle, 
  Cloud,
  Code,
  Users,
  BarChart
} from 'lucide-react';

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that understand context and make intelligent decisions.',
      gradient: 'from-purple-electric/20 to-cyan-glow/20',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Execute thousands of workflows simultaneously with sub-second response times.',
      gradient: 'from-yellow-400/20 to-orange-500/20',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
      gradient: 'from-green-400/20 to-blue-500/20',
    },
    {
      icon: Puzzle,
      title: '500+ Integrations',
      description: 'Connect with any tool in your tech stack through our extensive integration library.',
      gradient: 'from-pink-400/20 to-purple-500/20',
    },
    {
      icon: Gauge,
      title: 'Real-time Monitoring',
      description: 'Track performance, monitor health, and get instant alerts for all your workflows.',
      gradient: 'from-blue-400/20 to-cyan-400/20',
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs.',
      gradient: 'from-indigo-400/20 to-purple-400/20',
    },
  ];

  const integrations = [
    { name: 'n8n', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-red-400' },
    { name: 'Make.com', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-blue-400' },
    { name: 'Zapier', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-orange-400' },
    { name: 'Slack', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-purple-400' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-cyan-400' },
    { name: 'HubSpot', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=60', color: 'text-green-400' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-navy-light to-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Powerful <span className="text-gradient">Features</span> for Modern Workflows
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale AI-powered automation workflows.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-gradient-to-br from-navy-dark/50 to-navy-light/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 hover:scale-105 group h-full">
                <CardHeader>
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-cyan-glow" />
                  </div>
                  <CardTitle className="text-text-primary group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Seamless <span className="text-gradient">Integrations</span>
          </h3>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
            Connect with your favorite tools and platforms. Our extensive integration library
            ensures compatibility with your existing tech stack.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-glow/10 to-purple-electric/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-glow/20 group-hover:border-cyan-glow/40">
                  <Code className={`h-8 w-8 ${integration.color}`} />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-cyan-glow transition-colors">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            <Card className="bg-gradient-to-br from-navy-dark/30 to-navy-light/30 border-cyan-glow/20">
              <CardHeader className="text-center">
                <BarChart className="h-12 w-12 text-cyan-glow mx-auto mb-4" />
                <CardTitle className="text-gradient">99.9% SLA</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-secondary">Enterprise-grade reliability with guaranteed uptime</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-dark/30 to-navy-light/30 border-cyan-glow/20">
              <CardHeader className="text-center">
                <Gauge className="h-12 w-12 text-purple-electric mx-auto mb-4" />
                <CardTitle className="text-gradient">Sub-second Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-secondary">Lightning-fast processing for time-critical workflows</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-dark/30 to-navy-light/30 border-cyan-glow/20">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-cyan-glow mx-auto mb-4" />
                <CardTitle className="text-gradient">10M+ Workflows</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-secondary">Trusted by thousands of businesses worldwide</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}