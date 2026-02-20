import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export function Hero() {
  const scrollToBeta = () => {
    const el = document.getElementById('beta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = 'https://vz-1d7dae68-a9d.b-cdn.net/d3e1f2c6-87d2-4db4-80da-4673980f62a0/playlist.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const plyrOptions = {
      controls: ['play-large', 'play', 'mute', 'volume'],
      hideControls: false,
    };

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        new Plyr(video, plyrOptions);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        new Plyr(video, plyrOptions);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* STYLE ODTWARZACZA VSL */}
      <style>{`
        :root {
          --plyr-color-main: #8B5CF6;
          --plyr-video-control-background-hover: #8B5CF6;
        }
        .plyr__progress, .plyr__time {
          display: none !important;
        }
        .plyr {
          border-radius: 1rem;
          height: 100%;
        }
        /* POWIĘKSZONY PRZYCISK PLAY */
        .plyr__control--overlaid {
          padding: 32px !important;
        }
        .plyr__control--overlaid svg {
          width: 54px !important;
          height: 54px !important;
        }
        /* Mniejszy przycisk play na mobile */
        @media (max-width: 640px) {
          .plyr__control--overlaid {
            padding: 20px !important;
          }
          .plyr__control--overlaid svg {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">Zamknięta Beta &mdash; Zapisy otwarte</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Sprzedajesz ubrania na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Vinted i Grailed?
            </span>
            <br />
            Przestań tracić godziny na kopiowanie opisów.
          </h1>

          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Wystaw produkt raz. Nasz system opublikuje go wszędzie, poprawi zdjęcia dzięki AI,
            a gdy sprzedasz &mdash; automatycznie usunie z reszty platform.{' '}
            <span className="text-text-main font-medium">Zero chaosu. Zero ryzyka podwójnej sprzedaży.</span>
          </p>

          {/* --- WIDEO VSL --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-10 group"
          >
            <div className="relative aspect-video w-full bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-primary/10">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
                playsInline
              >
                Twoja przeglądarka nie obsługuje wideo.
              </video>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" className="text-base px-8 py-4" onClick={scrollToBeta}>
              Dołącz do zamkniętej Bety i odzyskaj swój czas
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: Zap, label: 'Multi-publikacja jednym kliknięciem' },
              { icon: Sparkles, label: 'AI poprawia zdjęcia i opisy' },
              { icon: ShieldCheck, label: 'Anti-Double-Sale ochrona' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-2 justify-center bg-surface/50 backdrop-blur border border-white/5 rounded-xl px-4 py-3"
              >
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-text-muted">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
