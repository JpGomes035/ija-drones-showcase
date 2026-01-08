import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IJASystem from '@/components/IJASystem';
import Diferenciais from '@/components/Diferenciais';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
