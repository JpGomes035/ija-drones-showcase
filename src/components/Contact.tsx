import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glow Effects */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container relative mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 neon-border">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Entre em Contato</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Vamos construir o{' '}
              <span className="text-gradient-primary neon-text">futuro</span> juntos
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Entre em contato conosco para discutir como podemos ajudar a transformar 
              suas operações com soluções de drones personalizadas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'contato@ijadrones.com.br', href: 'mailto:contato@ijadrones.com.br' },
                { icon: Phone, label: 'Telefone', value: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
                { icon: MapPin, label: 'Localização', value: 'São Paulo, Brasil', href: null },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4 group">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                        whileHover={{
                          backgroundColor: 'hsl(210 100% 55% / 0.2)',
                          boxShadow: '0 0 30px hsl(210 100% 55% / 0.4)',
                        }}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10 border-gradient neon-border"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Solicite uma <span className="text-gradient-primary">Demonstração</span>
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Preencha seus dados e nossa equipe entrará em contato para agendar uma 
              apresentação completa do IJASystem.
            </p>
            
            <form className="space-y-4">
              {['Seu nome', 'Seu email', 'Empresa'].map((placeholder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <input
                    type={placeholder === 'Seu email' ? 'email' : 'text'}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_20px_hsl(210_100%_55%_/_0.2)] transition-all"
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_20px_hsl(210_100%_55%_/_0.2)] transition-all resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <Button variant="hero" size="lg" className="w-full group">
                  Enviar Mensagem
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
