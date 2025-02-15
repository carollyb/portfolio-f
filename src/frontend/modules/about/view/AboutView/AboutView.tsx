import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';

import { Box, Divider, Stack, Typography } from '@mui/material';
import {
  TitleBoxSx,
  TitleTextSx,
  ContentContainerSx,
  ImageWrapperSx,
  AboutTextSx,
  SocialLinksSx,
  FooterSx,
} from './styles';
import Image from 'next/image';
import { menuItems } from '@/frontend/utils/menuitems';

export default function AboutView() {
  return (
    <>
      <Header />
      <Stack sx={{ paddingX: { sm: 10, xs: '24px' } }}>
        <Box sx={TitleBoxSx}>
          <Typography variant='h1' sx={TitleTextSx}>
            About
          </Typography>
        </Box>
        <Divider variant='middle' />
        <Box sx={ContentContainerSx}>
          <Box sx={ImageWrapperSx}>
            <Image src='/about.png' alt='About Me' fill objectFit='cover' />
          </Box>
          <Box
            sx={{
              maxWidth: { sm: '50vw' },
            }}
          >
            <Typography variant='body2' sx={AboutTextSx}>
              {`Hi, I'm Fernanda (:`}
              <br />
              {`I'm a designer and artist who loves to
              dive into different fields, including architecture. My portfolio
              showcases some key pieces of my journey so far. It features recent
              projects, some done in collaboration and others solo, but most of
              the visuals are my own creations (I'll point out the ones that
              aren't). The way I represent these projects is a reflection of my
              personal touch—whether it's through colors, objects, or the vibe
              each space gives off. I hope you enjoy this as much as I've loved
              putting it together throughout this adventure!`}
            </Typography>
          </Box>
        </Box>
        <Box sx={SocialLinksSx}>
          {menuItems.map((item, index) => (
            <Pill key={index} link={item.link} title={item.title} />
          ))}
        </Box>
        <Box sx={FooterSx}></Box>
      </Stack>
    </>
  );
}
