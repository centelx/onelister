import { motion } from 'framer-motion';
import { Link2, FileText, Sparkles, Send, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Link2,
    title: 'Podłączasz konta',
    description: 'Vinted, Grailed, Vestiaire Collective — jedno miejsce do zarządzania.',
    colSpan: 'md:col-span-1',
    rowSpan: '',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Tworzysz One Listing',
    description: 'Jeden formularz, dodajesz zdjęcia, podajesz wady. Wypełniasz raz, a nie trzy razy.',
    colSpan: 'md:col-span-1',
    rowSpan: '',
  },
  {
    step: 3,
    icon: Sparkles,
    title: 'Magia AI',
    description: 'System generuje chwytliwy opis i poprawia oświetlenie domowych zdjęć. Jakość sklepowa.',
    colSpan: 'md:col-span-1',
    rowSpan: '',
  },
  {
    step: 4,
    icon: Send,
    title: 'Multi-publikacja',
    description: 'Jedno kliknięcie i ogłoszenie leci na wybrane platformy z dopasowanymi parametrami.',
    colSpan: 'md:col-span-2',
    rowSpan: '',
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: 'Anti-Double-Sale',
    description: 'Sprzedajesz na jednej platformie? System zdejmuje ofertę z pozostałych. Automatycznie.',
    colSpan: 'md:col-span-1',
    rowSpan: '',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function FeaturesBento() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Jak to działa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            5 kroków do automatyzacji
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Od podłączenia kont po pełną automatyzację sprzedaży. Bez kodu, bez stresu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={cardVariants}
              className={`group relative bg-surface/80 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${step.colSpan} ${step.rowSpan}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Krok {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
