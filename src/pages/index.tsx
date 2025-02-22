import { Footer } from '@/frontend/modules/footer/ui/Footer';
import { Header } from '@/frontend/modules/header/ui/Header';
import { Projects } from '@/frontend/modules/projects/ui/Projects';
import { SplashScreen } from '@/frontend/modules/splash/ui/SplashScreen';
import { useColorScheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [tag, setTag] = useState<string>('all');
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    console.log(mode);
  }, []);

  return (
    <>
      <Header />
      <SplashScreen />
      <Projects tag={tag} view={viewMode} />
      <Footer setTag={setTag} setViewMode={setViewMode} viewMode={viewMode} />
    </>
  );
}
