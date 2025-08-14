import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyHireSection from '@/components/WhyHireSection';
import TrustedCompanies from '@/components/TrustedCompanies';
import HiringProcess from '@/components/HiringProcess';
import UserGuide from '@/components/UserGuide';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import TechnologyPage from '@/components/Technology';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyHireSection />
      <TechnologyPage/>
      <TrustedCompanies />
      <HiringProcess />
      <UserGuide />
      <Testimonials />
      <Footer />
    </main>
  );
}