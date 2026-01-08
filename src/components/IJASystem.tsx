import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Users, 
  MapPin, 
  FileText, 
  Bell, 
  BarChart3,
  CheckCircle2,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-perfil Inteligente',
    description: 'Sistema reconhece automaticamente o tipo de usuário: Administrador, Operário, UVIS ou Visualizador.',
  },
  {
    icon: MapPin,
    title: 'Integração com API dos Correios',
    description: 'Preenchimento automático de endereço via CEP, com coordenadas GPS precisas.',
  },
  {
    icon: FileText,
    title: 'Gestão de Solicitações de Voo',
    description: 'Controle completo de solicitações com status, protocolo DECEA e documentação.',
  },
  {
    icon: Bell,
    title: 'Notificações em Tempo Real',
    description: 'Acompanhamento de status e alertas automáticos para todas as partes envolvidas.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards e Relatórios',
    description: 'Exportação inteligente em Excel e PDF com filtros avançados.',
  },
  {
    icon: Shield,
    title: 'Segurança e Permissões',
    description: 'Controle granular de acesso com diferentes níveis de permissão por perfil.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const IJASystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ijasystem" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Animated Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 neon-border">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nosso Principal Produto</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Conheça o{' '}
            <span className="text-gradient-primary neon-text">IJASystem</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Sistema completo de Gestão de Solicitações de Voo desenvolvido para 
            otimizar operações com drones, garantindo agilidade, precisão e conformidade regulatória.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group glass-card p-6 border-gradient hover:bg-card/80 transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300"
                whileHover={{
                  boxShadow: '0 0 30px hsl(210 100% 55% / 0.5)',
                }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12 border-gradient neon-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                ChatBot Integrado para{' '}
                <span className="text-gradient-primary">Suporte Inteligente</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Assistente virtual disponível para tirar dúvidas sobre status, checklist, 
                dashboard, agendamentos e muito mais. Reduz erros e aumenta a produtividade das equipes.
              </p>
              
              <ul className="space-y-3">
                {['Respostas instantâneas', 'Integração completa', 'Suporte 24/7', 'Redução de erros'].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <motion.div
                className="aspect-video rounded-xl bg-secondary/50 border border-border/50 overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-8">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4"
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(210 100% 55% / 0.3)',
                        '0 0 50px hsl(210 100% 55% / 0.6)',
                        '0 0 20px hsl(210 100% 55% / 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Shield className="w-8 h-8 text-primary" />
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Interface IJASystem</p>
                </div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IJASystem;
