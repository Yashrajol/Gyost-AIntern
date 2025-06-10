import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlowGenie AI - Automate Anything with AI Workflows',
  description: 'Transform your business with intelligent automation that learns, adapts, and scales. Join thousands of companies using FlowGenie AI for workflow automation.',
  keywords: 'AI automation, workflow automation, business automation, AI workflows, process automation',
  authors: [{ name: 'FlowGenie AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'FlowGenie AI - Automate Anything with AI Workflows',
    description: 'Transform your business with intelligent automation that learns, adapts, and scales.',
    type: 'website',
    url: 'https://flowgenieai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowGenie AI - Automate Anything with AI Workflows',
    description: 'Transform your business with intelligent automation that learns, adapts, and scales.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}