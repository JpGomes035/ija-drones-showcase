import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  HeadphonesIcon, 
  Rocket,
  Settings,
  TrendingUp
} from 'lucide-react';

const diferenciais = [
  {
    icon: Cpu,
    title: 'Hardware Próprio',
    description: 'Desenvolvimento completo de hardware customizado para cada necessidade específica do cliente.',
  },
  {
    icon: Code2,
    title: 'Software Integrado',
    description: 'Sistemas desenvolvidos do zero, perfeitamente integrados ao hardware para máxima eficiência.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte técnico permanente para garantir o funcionamento ideal das soluções.',
  },
  {
    icon: Settings,
    title: 'Soluções Personalizadas',
    description: 'Cada projeto é desenvolvido sob medida, considerando as particularidades de cada cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade',
    description: 'Sistemas projetados para crescer junto com o seu negócio, adaptando-se às novas demandas.',
  },
  {
    icon: Rocket,
    title: 'Inovação Constante',
    description: 'Investimento contínuo em pesquisa e desenvolvimento para soluções cada vez mais avançadas.',
  },
];

const Diferenciais = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="container relative mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a{' '}
            <span className="text-gradient-white">IJA Drones</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos uma abordagem completa e integrada, do desenvolvimento à manutenção, 
            garantindo soluções robustas e confiáveis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="glass-card p-8 h-full border-gradient transition-all duration-300"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon with glow effect */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6"
                  whileHover={{
                    boxShadow: '0 0 40px hsl(210 100% 55% / 0.6)',
                    backgroundColor: 'hsl(210 100% 55% / 0.2)',
                  }}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 40px hsl(210 100% 55% / 0.1)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 glass-card px-8 py-4 border-gradient neon-border"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <p className="text-foreground font-medium">
              Desenvolvimento integral de <span className="text-primary neon-text">hardware</span> e <span className="text-gradient-white">software</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Diferenciais;
