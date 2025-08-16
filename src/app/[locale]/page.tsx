import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Hero from '../components/Hero';
export default function Home() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <Hero
        image="/images/nomade.jpeg"
        title={t('Hero.title')}
        description={t('Hero.description')}
      />
      <div className="min-h-screen bg-blue-950"></div>
    </>
  );
}
