"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Linkedin, Github, MapPin, Calendar, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { notFound } from 'next/navigation';

const teamMembers = {
  'sarthak-sonawane': {
    name: 'Sarthak Sonawane',
    position: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: [
      'Full Stack Web Development',
      'Android Development', 
      'AI Tools',
      'Startup Leadership',
      'Product Strategy',
      'Team Management',
      'Business Development',
      'Technical Architecture'
    ],
    experience: 'Skilled full stack web developer and Android development expert with extensive expertise in AI tools. As a serial entrepreneur, Sarthak has successfully founded 3 startups, demonstrating his ability to identify market opportunities and build scalable solutions. His comprehensive understanding of web technologies, combined with mobile development skills and AI integration capabilities, makes him a versatile leader in the tech industry. He excels at translating complex technical concepts into business value and has a proven track record of building and leading high-performing development teams.',
    achievements: [
      'Founded 3 successful technology startups',
      'Led development of 50+ web and mobile applications',
      'Expert in AI tools integration and implementation',
      'Built scalable full-stack solutions serving thousands of users',
      'Established strategic partnerships with major tech companies'
    ],
    education: 'Bachelor of Engineering in Computer Science',
    yearsExperience: 8,
    projectsCompleted: 50,
    email: 'sarthak@flowgenieai.com',
    linkedin: 'https://linkedin.com/in/sarthaksonawane',
    github: 'https://github.com/sarthaksonawane'
  },
  'yash-rajole': {
    name: 'Yash Rajole',
    position: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: [
      'Full Stack Web Development',
      'C Programming',
      'Java Development',
      'C++ Programming',
      'Python',
      'JavaScript',
      'System Architecture',
      'Database Design'
    ],
    experience: 'Expert in full stack web development with extensive knowledge of multiple programming languages including C, Java, C++, Python, and JavaScript. Yash brings a strong foundation in computer science fundamentals and system-level programming, making him exceptionally capable of architecting robust and scalable solutions. His diverse programming language expertise allows him to choose the right technology stack for each project and optimize performance across different platforms. He has a deep understanding of both frontend and backend technologies, enabling him to build end-to-end solutions that are both efficient and maintainable.',
    achievements: [
      'Mastered 6+ programming languages with production experience',
      'Architected scalable systems handling 100K+ concurrent users',
      'Led technical teams of 15+ developers',
      'Optimized application performance by 300% through code refactoring',
      'Implemented microservices architecture for enterprise clients'
    ],
    education: 'Master of Technology in Computer Science',
    yearsExperience: 7,
    projectsCompleted: 40,
    email: 'yash@flowgenieai.com',
    linkedin: 'https://linkedin.com/in/yashrajole',
    github: 'https://github.com/yashrajole'
  },
  'tanvi-deore': {
    name: 'Tanvi Deore',
    position: 'Chief Financial Officer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: [
      'Backend Development',
      'Python Programming',
      'Node.js',
      'Database Management',
      'AI Tools Integration',
      'n8n Automation',
      'Financial Analysis',
      'Process Automation'
    ],
    experience: 'Backend developer skilled in various programming languages with prior knowledge of AI tools and n8n automation platforms. Tanvi combines technical expertise with financial acumen, making her uniquely positioned to understand both the technical implementation costs and business value of technology solutions. Her experience with AI tools and automation platforms like n8n enables her to streamline financial processes and create efficient workflows. She excels at building robust backend systems while maintaining a keen eye on cost optimization and resource allocation.',
    achievements: [
      'Automated 80% of financial reporting processes using AI tools',
      'Reduced operational costs by 40% through process optimization',
      'Built scalable backend systems for financial data processing',
      'Implemented n8n workflows saving 20+ hours weekly',
      'Managed budgets exceeding $2M for technology projects'
    ],
    education: 'Bachelor of Technology in Information Technology + MBA Finance',
    yearsExperience: 6,
    projectsCompleted: 35,
    email: 'tanvi@flowgenieai.com',
    linkedin: 'https://linkedin.com/in/tanvideore',
    github: 'https://github.com/tanvideore'
  },
  'om-dighe': {
    name: 'Om Dighe',
    position: 'Chief Operating Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: [
      'Frontend Development',
      'React & Next.js',
      'Organizational Planning',
      'Workflow Management',
      'Operations Strategy',
      'Team Coordination',
      'Process Optimization',
      'Project Management'
    ],
    experience: 'Frontend developer who handles all organizational flow with his expertise in planning and operations management. Om combines technical frontend development skills with exceptional operational planning abilities, making him instrumental in ensuring smooth project execution and organizational efficiency. His expertise in modern frontend technologies like React and Next.js, coupled with his strategic planning skills, enables him to create user-friendly interfaces while optimizing internal workflows. He excels at coordinating between different teams and ensuring that all operational aspects of the organization run seamlessly.',
    achievements: [
      'Streamlined organizational workflows improving efficiency by 60%',
      'Led frontend development for 25+ client projects',
      'Implemented project management systems reducing delivery time by 30%',
      'Coordinated cross-functional teams of 20+ members',
      'Established operational procedures adopted company-wide'
    ],
    education: 'Bachelor of Engineering in Information Technology',
    yearsExperience: 5,
    projectsCompleted: 30,
    email: 'om@flowgenieai.com',
    linkedin: 'https://linkedin.com/in/omdighe',
    github: 'https://github.com/omdighe'
  },
  'geetanjali-ahire': {
    name: 'Geetanjali Ahire',
    position: 'Chief Marketing Officer',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: [
      'Digital Marketing',
      'Marketing Strategy',
      'Brand Management',
      'Social Media Marketing',
      'Content Strategy',
      'SEO/SEM',
      'Business Development',
      'Client Relations'
    ],
    experience: 'Marketing head with extensive contacts and expertise in digital marketing, driving brand growth and market presence. Geetanjali brings a wealth of experience in digital marketing strategies and has built an impressive network of industry contacts that prove invaluable for business growth. Her expertise spans across all aspects of digital marketing including social media, content marketing, SEO, and brand management. She has a proven track record of creating compelling marketing campaigns that drive engagement and convert leads into customers, while building strong relationships with clients and partners.',
    achievements: [
      'Increased brand awareness by 250% through digital campaigns',
      'Built a network of 500+ industry contacts and partners',
      'Generated $1M+ in revenue through marketing initiatives',
      'Achieved 150% growth in social media engagement',
      'Launched successful marketing campaigns for 40+ clients'
    ],
    education: 'Master of Business Administration in Marketing',
    yearsExperience: 6,
    projectsCompleted: 45,
    email: 'geetanjali@flowgenieai.com',
    linkedin: 'https://linkedin.com/in/geetanjaliahire',
    github: 'https://github.com/geetanjaliahire'
  }
};

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers[params.id as keyof typeof teamMembers];

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-8 bg-navy-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/team">
              <Button variant="ghost" className="text-cyan-glow hover:bg-cyan-glow/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Button>
            </Link>
          </div>
        </section>

        {/* Member Profile */}
        <section className="py-16 bg-gradient-to-b from-navy-dark to-navy-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <Card className="bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20 sticky top-24">
                  <CardContent className="p-8 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-6">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h1>
                    <p className="text-cyan-glow text-lg font-medium mb-4">{member.position}</p>
                    <div className="flex items-center justify-center space-x-2 text-text-secondary mb-6">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Nashik, Maharashtra, 422003</span>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient">{member.yearsExperience}+</div>
                        <div className="text-xs text-text-secondary">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient">{member.projectsCompleted}+</div>
                        <div className="text-xs text-text-secondary">Projects Completed</div>
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-4">
                      <Button size="sm" variant="outline" className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Experience */}
                <Card className="bg-gradient-to-br from-navy-light/30 to-navy-dark/30 border-cyan-glow/20">
                  <CardHeader>
                    <CardTitle className="text-text-primary flex items-center">
                      <Users className="h-5 w-5 text-cyan-glow mr-2" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed">{member.experience}</p>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="bg-gradient-to-br from-navy-light/30 to-navy-dark/30 border-cyan-glow/20">
                  <CardHeader>
                    <CardTitle className="text-text-primary flex items-center">
                      <Award className="h-5 w-5 text-cyan-glow mr-2" />
                      Skills & Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gradient-to-r from-cyan-glow/10 to-purple-electric/10 border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/20 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="bg-gradient-to-br from-navy-light/30 to-navy-dark/30 border-cyan-glow/20">
                  <CardHeader>
                    <CardTitle className="text-text-primary flex items-center">
                      <Award className="h-5 w-5 text-cyan-glow mr-2" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-text-secondary">
                          <div className="w-2 h-2 bg-cyan-glow rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-gradient-to-br from-navy-light/30 to-navy-dark/30 border-cyan-glow/20">
                  <CardHeader>
                    <CardTitle className="text-text-primary flex items-center">
                      <Calendar className="h-5 w-5 text-cyan-glow mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{member.education}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}