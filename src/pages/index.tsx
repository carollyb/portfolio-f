import { Footer } from '@/frontend/modules/footer/ui/Footer';
import { Header } from '@/frontend/modules/header/ui/Header';
import { Projects } from '@/frontend/modules/projects/ui/Projects';
import { SplashScreen } from '@/frontend/modules/splash/ui/SplashScreen';

export default function Home() {
  return (
    <>
      <Header />
      <SplashScreen />
      <Projects tag='all' view='list' />
      <Footer />
    </>
  );
}
