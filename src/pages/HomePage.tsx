import { useTranslations } from 'next-intl';
import { StatsBar } from '../components/StatsBar';
import { ExperienceSection } from '../components/ExperienceSection';
import { SpotsSection } from '../components/SpotsSection';
import { MethodologySection } from '../components/MethodologySection';
import { SafetySection } from '../components/SafetySection';
import { TeamSection } from '../components/TeamSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PackagesSection } from '../components/PackagesSection';
import { AdventuresSection } from '../components/AdventuresSection';
import { GallerySection } from '../components/GallerySection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { QuickForm } from '../components/QuickForm';

export const HomePage = () => {
  const t = useTranslations('translation.translations');

  return (
    <main>
      <header className="pt-20 pb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">
          {t('translations.SEO.home.title')}
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-700">
          {t('translations.SEO.home.description')}
        </p>
      </header>
      <StatsBar />
      <ExperienceSection />
      <SpotsSection />
      <MethodologySection />
      <SafetySection />
      <TeamSection />
      <TestimonialsSection />
      <PackagesSection />
      <AdventuresSection />
      <GallerySection />
      <FAQSection />
      <QuickForm />
      <FinalCTASection />
    </main>
  );
};
