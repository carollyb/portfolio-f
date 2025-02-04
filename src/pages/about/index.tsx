import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const menuItems = [
  {
    link: 'https://www.instagram.com/fernandaf.e/',
    title: 'Instagram',
  },
  {
    link: 'https://www.linkedin.com/in/fernanda-eziquiel/',
    title: 'Linkedin',
  },
  {
    link: 'https://www.behance.net/fernandaeziquiel',
    title: 'Behance',
  },
];
export default function About() {
  return (
    <>
      <Header />
      <Stack>
        <Box
          sx={{
            width: '100%',
            height: '196px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingX: 10,
          }}
        >
          <Typography
            variant='h1'
            sx={{
              color: 'primary.light',
            }}
          >
            About
          </Typography>
        </Box>
        <Box sx={{ paddingX: 10 }}>
          <Divider variant='middle' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingX: 10,
            paddingTop: '40px',
            gap: '42px',
            alignItems: 'center',
          }}
        >
          <Box>
            <Image src='/about.png' alt='About Me' width={532} height={526} />
          </Box>
          <Box>
            <Typography
              variant='body2'
              sx={{
                color: 'primary.light',
              }}
            >
              Hi, I’m Fernanda (: <br /> I'm a designer and artist who loves to
              dive into different fields, including architecture. My portfolio
              showcases some key pieces of my journey so far. It features recent
              projects, some done in collaboration and others solo, but most of
              the visuals are my own creations (I'll point out the ones that
              aren't). The way I represent these projects is a reflection of my
              personal touch—whether it's through colors, objects, or the vibe
              each space gives off. I hope you enjoy this as much as I’ve loved
              putting it together throughout this adventure!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '45px',
            paddingX: 10,
            paddingY: '21px',
            gap: '24px',
          }}
        >
          {menuItems.map((item, index) => (
            <Pill key={index} link={item.link} title={item.title} />
          ))}
        </Box>
        <Box
          sx={{
            height: '88px',
            borderTop: '1px solid #1E00FF',
          }}
        ></Box>
      </Stack>
    </>
  );
}
