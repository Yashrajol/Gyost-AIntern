"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  Mail, 
  Database, 
  ShoppingCart, 
  Users, 
  FileText, 
  Calendar, 
  BarChart,
  Filter
} from 'lucide-react';

export function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState('all');

  const useCases = [
    {
      id: 1,
      category: 'marketing',
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Create personalized email campaigns that respond to customer behavior and preferences automatically.',
      features: ['Smart segmentation', 'A/B testing', 'Performance analytics'],
    },
    {
      id: 2,
      category: 'sales',
      icon: ShoppingCart,
      title: 'Lead Qualification',
      description: 'Automatically score and route leads to the right sales representatives based on AI analysis.',
      features: ['Lead scoring', 'Route optimization', 'CRM integration'],
    },
    {
      id: 3,
      category: 'operations',
      icon: Database,
      title: 'Data Processing',
      description: 'Transform and migrate data between systems while maintaining accuracy and compliance.',
      features: ['Data validation', 'Format conversion', 'Error handling'],
    },
    {
      id: 4,
      category: 'support',
      icon: Bot,
      title: 'Customer Support',
      description: 'Resolve common inquiries instantly with AI-powered chatbots and ticket routing.',
      features: ['24/7 availability', 'Multi-language', 'Escalation rules'],
    },
    {
      id: 5,
      category: 'operations',
      icon: FileText,
      title: 'Document Processing',
      description: 'Extract, validate, and process information from documents using advanced AI.',
      features: ['OCR processing', 'Data extraction', 'Workflow automation'],
    },
    {
      id: 6,
      category: 'marketing',
      icon: BarChart,
      title: 'Analytics Reporting',
      description: 'Generate comprehensive reports from multiple data sources automatically.',
      features: ['Multi-source data', 'Custom dashboards', 'Scheduled reports'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' },
    { id: 'operations', label: 'Operations' },
    { id: 'support', label: 'Support' },
  ];

  const filteredUseCases = activeFilter === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.category === activeFilter);

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
            <span className="text-gradient">Use Cases</span> for Every Industry
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
            Discover how FlowGenie AI transforms workflows across different business functions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-cta text-white'
                    : 'border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filteredUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 hover:scale-105 hover:glow-cyan group h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-glow/20 to-purple-electric/20 group-hover:from-cyan-glow/30 group-hover:to-purple-electric/30 transition-all duration-300">
                      <useCase.icon className="h-6 w-6 text-cyan-glow" />
                    </div>
                    <div className="text-xs font-mono text-purple-electric uppercase tracking-wider">
                      {useCase.category}
                    </div>
                  </div>
                  <CardTitle className="text-text-primary group-hover:text-gradient transition-all duration-300">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-cyan-glow rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-6 text-cyan-glow hover:bg-cyan-glow/10 group-hover:bg-gradient-cta group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}