import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Hero from '../components/Hero';
export default function Home() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <Hero
        image="/images/kite.jpg"
        title={t('Hero.title')}
        description={t('Hero.description')}
      />
    </>
  );
}
