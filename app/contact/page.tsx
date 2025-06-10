import { ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-10 text-lg text-text-secondary">We&apos;d love to hear from you! Reach out with your questions, feedback, or partnership inquiries.</p>
      <ContactSection />
    </main>
  );
} 