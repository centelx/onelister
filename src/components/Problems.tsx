import { motion } from 'framer-motion';
import { Clock, AlertTriangle, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Strata czasu',
    description:
      'Kopiowanie tych samych parametrów, zdjęć i opisów na kilka platform pożera Twój czas.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: AlertTriangle,
    title: 'Ryzyko podwójnej sprzedaży',
    description:
      'Sprzedałeś na Vinted, ale zapomniałeś usunąć z Grailed? Czeka Cię anulowanie zamówienia i świecenie oczami przed klientem.',
    gradient: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: TrendingDown,
    title: 'Blokada wzrostu',
    description:
      'Chcesz sprzedawać więcej, ale ręczna obsługa to sufit, którego nie przebijesz bez automatyzacji.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Problems() {
  return (
    <section id="problem" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Znasz to?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Codzienne problemy resellera
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Każdy z tych problemów kosztuje Cię pieniądze. A razem? Tworzą barierę nie do przeskoczenia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-surface border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5">
                  <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-text-muted leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
