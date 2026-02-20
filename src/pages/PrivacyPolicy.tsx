import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót na stronę główną
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-8">Polityka Prywatności i Regulamin Serwisu</h1>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">1. Administrator Danych</h2>
              <p className="text-text-muted leading-relaxed">
                Administratorem jest OneLister z siedzibą przy ul. Przykładowa 12, 00-001 Warszawa,
                NIP: 1234567890.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">2. Cel przetwarzania</h2>
              <p className="text-text-muted leading-relaxed">
                Przetwarzamy dane (imię, nazwisko, email, telefon) w celu: odpowiedzi na zapytania,
                zapisów do wersji Beta narzędzia, realizacji usługi oraz obowiązków prawnych.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">3. Nagrywanie rozmów</h2>
              <p className="text-text-muted leading-relaxed">
                Ewentualne rozmowy badawcze mogą być nagrywane. Brak zgody = prosimy o kontakt
                mailowy: kontakt@onelister.pl.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">4. Prawa</h2>
              <p className="text-text-muted leading-relaxed">
                Masz prawo dostępu do danych, sprostowania, usunięcia.
              </p>
            </section>

            <div className="border-t border-white/10 my-12" />

            <h1 className="text-3xl font-bold mb-8">Regulamin Serwisu</h1>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">1. Ogólne</h2>
              <p className="text-text-muted leading-relaxed">
                Strona OneLister ma charakter informacyjny i służy walidacji pomysłu oraz zbieraniu
                zapisów na wersję Beta.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">2. Wymagania</h2>
              <p className="text-text-muted leading-relaxed">
                Wymagane urządzenie z dostępem do Internetu i przeglądarką.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">3. Formularz</h2>
              <p className="text-text-muted leading-relaxed">
                Użytkownik podaje tylko prawdziwe dane. Zakaz wprowadzania treści bezprawnych.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">4. Odpowiedzialność</h2>
              <p className="text-text-muted leading-relaxed">
                Treści na stronie to zaproszenie do testów i zawarcia umowy w przyszłości, nie
                stanowią oferty w rozumieniu KC.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">5. Reklamacje</h2>
              <p className="text-text-muted leading-relaxed">
                Zgłoszenia na email, rozpatrzenie w 14 dni.
              </p>
            </section>

            <div className="bg-surface border border-white/5 rounded-xl p-6 mt-8">
              <p className="text-sm text-text-muted">
                Działamy zgodnie z RODO (Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679).
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
