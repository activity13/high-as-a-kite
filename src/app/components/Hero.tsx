import { i, section } from 'framer-motion/client';
import { useTranslations } from 'next-intl';
import { MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
// @ts-ignore
interface i18nProps {
  title: string;
  image: string;
  description: string;
}
export default function Hero({ title, image, description }: i18nProps) {
  const t = useTranslations('translation.translations');
  return (
    <>
      <section
        className="relative bg-cover  text-white min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${image})` }}>
        {/* Contenido principal */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-10">{title}</h1>
            <p className="text-lg md:text-xl inline text-gray-300">
              {description}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                {t('HomePage.cta')}
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                {t('HomePage.description')}
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full px-6 py-6 flex items-center justify-between">
          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground mr-2">
              {t('HomePage.follow')}
            </span>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </button>
          </div>

          {/* Botón de chat */}
          <button className="flex items-center gap-2">
            <MessageCircle size={16} />
            {t('HomePage.chat')}
          </button>
        </footer>
      </section>
    </>
  );
}
