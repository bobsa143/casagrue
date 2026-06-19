import HeroSection from '@/components/home/hero';
import ServicesSection from '@/components/home/services-section';
import BrandsSection from '@/components/home/brands-section';
import ProjectsSection from '@/components/home/projects-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import CtaSection from '@/components/home/cta-section';
import AboutPreview from '@/components/home/about-preview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
