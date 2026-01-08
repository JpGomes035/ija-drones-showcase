import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Entre em Contato</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Vamos construir o{' '}
              <span className="text-gradient-primary">futuro</span> juntos
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Entre em contato conosco para discutir como podemos ajudar a transformar 
              suas operações com soluções de drones personalizadas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a 
                href="mailto:contato@ijadrones.com.br" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    contato@ijadrones.com.br
                  </p>
                </div>
              </a>
              
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +55 (11) 99999-9999
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground font-medium">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="glass-card p-8 md:p-10 border-gradient">
            <h3 className="font-display text-2xl font-bold mb-4">
              Solicite uma <span className="text-gradient-accent">Demonstração</span>
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Preencha seus dados e nossa equipe entrará em contato para agendar uma 
              apresentação completa do IJASystem.
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Enviar Mensagem
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
