import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IJASystem from '@/components/IJASystem';
import Diferenciais from '@/components/Diferenciais';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import GlowingCursor from '@/components/GlowingCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Interactive Effects */}
      <ParticleField />
      <GlowingCursor />
      
      {/* Content */}
      <Header />
      <Hero />
      <IJASystem />
      <Diferenciais />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
