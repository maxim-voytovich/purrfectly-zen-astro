import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <a href="/">
            <button
              data-testid="button-back-privacy"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h1 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Polityka Prywatności
            </h1>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-6 p-8 md:p-12">
              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Jakie Dane Zbieramy
                </h2>
                <p className="text-muted-foreground">
                  Zbieramy adresy e-mail od użytkowników, którzy decydują się dołączyć do naszej społeczności. Nie wymagane są żadne informacje o płatności ani poufne dane. Wszystko jest przechowywane lokalnie w Twojej przeglądarce przy użyciu localStorage.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Jak Używamy Twoich Danych
                </h2>
                <p className="text-muted-foreground">
                  Twój e-mail jest używany tylko do komunikacji w biuletynie i aktualizacji społeczności. Nigdy nie sprzedajemy ani nie udostępniamy Twoich danych stronom trzecim. Możesz się wypisać w dowolnym momencie.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Dane Sesji
                </h2>
                <p className="text-muted-foreground">
                  Twoje sesje medytacji i postęp są przechowywane lokalnie na Twoim urządzeniu. Nie śledzami ani nie zbieramy informacji o wzorcach Twojego użytkowania. Masz pełną kontrolę nad swoimi danymi.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Bezpieczeństwo
                </h2>
                <p className="text-muted-foreground">
                  Bierzemy Twoją prywatność poważnie. Wszystkie transmisje danych są szyfrowane. Postępujemy zgodnie z najlepszymi praktykami bezpieczeństwa sieci i regularnie aktualizujemy nasze systemy.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-foreground text-xl font-bold">
                  Skontaktuj się z Nami
                </h2>
                <p className="text-muted-foreground">
                  Jeśli masz obawy dotyczące prywatności, skontaktuj się z nami za pośrednictwem naszej strony kontaktowej. Jesteśmy tutaj, aby pomóc.
                </p>
              </div>

              <div className="border-border/40 text-muted-foreground border-t pt-4 text-sm">
                Ostatnia aktualizacja: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-privacy"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-bold"
              >
                Powrót do Strony Głównej
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
