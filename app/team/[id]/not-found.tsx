"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UserX, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-navy-dark to-navy-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-navy-light/50 to-navy-dark/50 border-cyan-glow/20">
                <CardContent className="p-12">
                  <UserX className="h-24 w-24 text-cyan-glow mx-auto mb-6" />
                  <h1 className="text-4xl font-bold text-text-primary mb-4">
                    Team Member Not Found
                  </h1>
                  <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                    The team member you're looking for doesn't exist or may have been moved.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/team">
                      <Button className="bg-gradient-cta hover:scale-105 transition-all duration-300">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Team
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10">
                        Go Home
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}