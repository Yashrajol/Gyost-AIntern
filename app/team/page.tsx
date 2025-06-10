"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TeamSocialProofSection } from "@/components/sections/team-social-proof";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 'sarthak-sonawane',
      name: 'Sarthak Sonawane',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Full Stack Web Development', 'Android Development', 'AI Tools', 'Startup Leadership'],
      shortBio: 'Skilled full stack web developer and Android development expert with AI tools expertise, having founded 3 startups.',
    },
    {
      id: 'yash-rajole',
      name: 'Yash Rajole',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Full Stack Web Development', 'C/C++', 'Java', 'Multiple Programming Languages'],
      shortBio: 'Expert in full stack web development with extensive knowledge of several programming languages including C, Java, C++, and more.',
    },
    {
      id: 'tanvi-deore',
      name: 'Tanvi Deore',
      position: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Backend Development', 'Programming Languages', 'AI Tools', 'n8n Automation'],
      shortBio: 'Backend developer skilled in various programming languages with prior knowledge of AI tools and n8n automation.',
    },
    {
      id: 'om-dighe',
      name: 'Om Dighe',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Frontend Development', 'Organizational Planning', 'Workflow Management', 'Operations'],
      shortBio: 'Frontend developer who handles all organizational flow with expertise in planning and operations management.',
    },
    {
      id: 'geetanjali-ahire',
      name: 'Geetanjali Ahire',
      position: 'Chief Marketing Officer',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Digital Marketing', 'Marketing Strategy', 'Business Contacts', 'Brand Management'],
      shortBio: 'Marketing head with extensive contacts and expertise in digital marketing, driving brand growth and market presence.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Team</h1>
        <p className="text-center mb-10 text-lg text-text-secondary">Meet the talented people behind FlowGenie AI.</p>
        <TeamSocialProofSection />
      </main>
      <Footer />
    </div>
  );
}