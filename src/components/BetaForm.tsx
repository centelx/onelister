import { FormEvent, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

const listingOptions = [
  { value: '', label: 'Wybierz...' },
  { value: '25', label: 'do 50' },
  { value: '125', label: '50-200' },
  { value: '300', label: 'powyżej 200' },
];

const timeOptions = [
  { value: '', label: 'Wybierz...' },
  { value: '3', label: '2-3 min' },
  { value: '5', label: '5 min' },
  { value: '7', label: '7 min+' },
];

const platformOptions = [
  { value: '', label: 'Wybierz...' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3+' },
];

export function BetaForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [listings, setListings] = useState('');
  const [time, setTime] = useState('');
  const [platforms, setPlatforms] = useState('');

  const lostHours = useMemo(() => {
    const l = parseInt(listings) || 0;
    const t = parseInt(time) || 0;
    const p = parseInt(platforms) || 0;
    if (l && t && p) {
      return Math.round((l * t * p) / 60);
    }
    return 0;
  }, [listings, time, platforms]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');
    formData.append('calculated_lost_hours', String(lostHours));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
        setListings('');
        setTime('');
        setPlatforms('');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <section id="beta" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface border border-green-500/20 rounded-2xl p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-3">Jesteś na liście!</h2>
            <p className="text-text-muted">
              Odezwiemy się do Ciebie z zaproszeniem do zamkniętej Bety. Sprawdź skrzynkę mailową.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="beta" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Dołącz do Bety
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Zmierzmy, ile czasu tracisz każdego miesiąca
          </h2>
          <p className="text-text-muted">
            Wypełnij formularz, a pokażemy Ci ile godzin możesz odzyskać.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface/80 backdrop-blur border border-white/5 rounded-2xl p-8 space-y-6"
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1.5">
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Jan"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="jan@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-1.5">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="+48 123 456 789"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="listings_count" className="block text-sm font-medium text-text-muted mb-1.5">
                Ogłoszenia / mies.
              </label>
              <select
                id="listings_count"
                name="listings_count"
                required
                value={listings}
                onChange={(e) => setListings(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {listingOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="time_per_listing" className="block text-sm font-medium text-text-muted mb-1.5">
                Czas / 1 ogłoszenie
              </label>
              <select
                id="time_per_listing"
                name="time_per_listing"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {timeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="platforms_count" className="block text-sm font-medium text-text-muted mb-1.5">
                Ile platform?
              </label>
              <select
                id="platforms_count"
                name="platforms_count"
                required
                value={platforms}
                onChange={(e) => setPlatforms(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {platformOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {lostHours > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/5 backdrop-blur border border-primary/20 rounded-xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Szacujemy, że tracisz około</p>
                  <p className="text-2xl font-bold text-primary">
                    {lostHours} godzin{' '}
                    <span className="text-base font-normal text-text-muted">miesięcznie</span>
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">na ręczne klikanie</p>
                </div>
              </div>
            </motion.div>
          )}

          <div>
            <label htmlFor="price_willingness" className="block text-sm font-medium text-text-muted mb-1.5">
              Ile był(a) byś w stanie zapłacić miesięcznie za narzędzie, które odda Ci te{' '}
              {lostHours > 0 ? `${lostHours}` : '...'} godzin?
            </label>
            <textarea
              id="price_willingness"
              name="price_willingness"
              rows={3}
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-text-main placeholder-text-muted/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Wpisz swoją odpowiedź..."
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-300">Wystąpił błąd. Spróbuj ponownie.</p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            isLoading={status === 'loading'}
            className="w-full py-4 text-base"
          >
            <Send className="w-4 h-4" />
            Zapisz mnie do Bety
          </Button>

          <p className="text-xs text-text-muted text-center">
            Twoje dane są bezpieczne. Nie wysyłamy spamu.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
