import { Hero } from '../components/Hero';
import { Problems } from '../components/Problems';
import { FeaturesBento } from '../components/FeaturesBento';
import { BetaForm } from '../components/BetaForm';

export function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <FeaturesBento />
      <BetaForm />
    </>
  );
}
