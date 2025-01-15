import { GlobalStyles } from '@mui/material';
import { Inter, Karantina } from 'next/font/google';

export const inter = Inter({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
export const karantina = Karantina({
  weight: ['300', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles
        styles={{
          '*': {
            fontFamily: `${inter.style.fontFamily}`,
          },
        }}
      />
      <main className={inter.className}>{children}</main>
    </>
  );
}
