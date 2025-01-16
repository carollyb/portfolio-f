import { Footer } from '@/frontend/modules/footer/ui/Footer';
import { Header } from '@/frontend/modules/header/ui/Header';
import { Projects } from '@/frontend/modules/projects/ui/Projects';
import { SplashScreen } from '@/frontend/modules/splash/ui/SplashScreen';
import { useState } from 'react';

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  return (
    <>
      <Header />
      <SplashScreen />
      <Projects tag='all' view={viewMode} />
      <Footer setViewMode={setViewMode} />
    </>
  );
}
