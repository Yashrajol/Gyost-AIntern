"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, Zap, CheckCircle, Cpu } from 'lucide-react';

export function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const problems = [
    {
      icon: AlertCircle,
      title: 'Manual Repetitive Tasks',
      description: 'Your team spends hours on mundane, repetitive work that drains productivity and creativity.',
    },
    {
      icon: AlertCircle,
      title: 'Disconnected Systems',
      description: 'Data silos and incompatible tools create bottlenecks and increase error rates.',
    },
    {
      icon: AlertCircle,
      title: 'Scaling Challenges',
      description: 'Growing businesses struggle to maintain efficiency as complexity increases.',
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that handle complex tasks with human-like decision making.',
    },
    {
      icon: CheckCircle,
      title: 'Seamless Integration',
      description: 'Connect any tool, API, or system with our universal integration platform.',
    },
    {
      icon: Cpu,
      title: 'Adaptive Scaling',
      description: 'Workflows that automatically adjust and optimize as your business grows.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-navy-dark to-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            From <span className="text-red-400">Problems</span> to{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stop struggling with inefficient processes. Transform your operations with AI-driven automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-8">The Problems You Face</h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-red-500/5 border border-red-500/20"
              >
                <problem.icon className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-text-secondary">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8">Our AI Solutions</h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-to-r from-cyan-glow/5 to-purple-electric/5 border border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300"
              >
                <solution.icon className="h-6 w-6 text-cyan-glow mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-text-secondary">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}