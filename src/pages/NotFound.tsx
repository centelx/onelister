import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-xl text-text-muted mb-8">Strona nie została znaleziona</p>
        <Link to="/">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4" />
            Powrót na stronę główną
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
