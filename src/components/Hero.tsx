import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-drone.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Drone sobrevoando cidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-transparent to-background/80" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-10" />
      
      {/* Animated Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            y: ['-100%', '100vh'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 neon-border"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium text-primary">
              Tecnologia de Ponta em Drones
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Soluções Inteligentes em{' '}
            <span className="text-gradient-primary neon-text">Hardware</span> e{' '}
            <span className="text-gradient-white">Software</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A IJA Drones é especializada no desenvolvimento integral de hardware e software, 
            oferecendo suporte contínuo e personalizado às soluções entregues aos seus clientes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" className="group">
              Conhecer IJASystem
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="mr-2 w-4 h-4" />
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30"
          >
            {[
              { value: '100%', label: 'Personalizado' },
              { value: '24/7', label: 'Suporte Contínuo' },
              { value: '5+', label: 'Anos de Expertise' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-2xl md:text-4xl font-display font-bold text-gradient-primary neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 neon-border">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
