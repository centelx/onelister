import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-text-main">OneLister</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-text-muted hover:text-text-main transition-colors"
            >
              Polityka Prywatności
            </Link>
          </div>

          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} OneLister. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
