"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Crown } from 'lucide-react';

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        '1,000 workflow executions/month',
        '10 active workflows',
        'Basic integrations',
        'Email support',
        'Standard templates',
      ],
      popular: false,
      icon: Star,
    },
    {
      name: 'Professional',
      description: 'For growing businesses and teams',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        '10,000 workflow executions/month',
        'Unlimited workflows',
        'All integrations',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Team collaboration',
      ],
      popular: true,
      icon: Crown,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        'Unlimited executions',
        'Unlimited workflows',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced security',
        'SLA guarantee',
        'Custom training',
      ],
      popular: false,
      icon: Crown,
    },
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
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business. All plans include our core features and 24/7 support.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-gradient-cta"
            />
            <span className={`text-lg ${isAnnual ? 'text-text-primary' : 'text-text-secondary'}`}>
              Annual
            </span>
            <span className="bg-gradient-cta text-white px-3 py-1 rounded-full text-sm font-medium">
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-cta text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-glow/10 to-purple-electric/10 border-cyan-glow/40 glow-cyan' 
                  : 'bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20 hover:border-cyan-glow/40'
              }`}>
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      plan.popular 
                        ? 'bg-gradient-cta' 
                        : 'bg-gradient-to-r from-cyan-glow/20 to-purple-electric/20'
                    }`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-text-primary mb-2">{plan.name}</CardTitle>
                  <p className="text-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gradient">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-text-secondary ml-1">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-text-secondary">
                        <span className="line-through">${plan.monthlyPrice}/month</span>
                        <span className="text-green-400 ml-2">Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-text-secondary">
                        <Check className="h-5 w-5 text-cyan-glow mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-cta hover:scale-105 glow-cyan text-white'
                        : 'border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Enterprise Option */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-navy-dark/50 to-navy-light/50 border-purple-electric/40">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Need something <span className="text-gradient">custom?</span>
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                We offer tailored solutions for large enterprises with specific requirements. 
                Get custom integrations, dedicated infrastructure, and personalized support.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-electric to-cyan-glow text-white hover:scale-105 transition-all duration-300"
              >
                Schedule a Demo
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}