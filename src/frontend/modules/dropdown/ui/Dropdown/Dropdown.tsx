import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import useDropdown from '../../hooks/useDropdown';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import {
  BoxSx,
  DropdownSx,
  FeaturedProjectBoxSx,
  FeaturedProjectSectionSx,
  FeaturedProjectTextSx,
  ImageCaptionSx,
  LinksSx,
  PageLinksSx,
  ProjectDescriptionSx,
  ProjectImageAndLinksBoxSx,
  SocialLinksSx,
  TextLinksSx,
  ViewProjectsBoxSx,
  ViewProjectsTextSx,
} from './styles';
import Image from 'next/image';
import { ArrowLink } from '@/frontend/modules/arrowlink/ui/Arrowlink';

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

const pageItems = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/contact',
    name: 'Contact',
  },
];

export const Dropdown = () => {
  const { toggleDrawer } = useDropdown();

  return (
    <Stack
      sx={DropdownSx}
      role='presentation'
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Box sx={BoxSx}>
        <Stack sx={PageLinksSx}>
          {pageItems.map((page, index) => (
            <>
              <Link key={index} sx={LinksSx} href={page.href}>
                <Typography variant='h1' sx={TextLinksSx}>
                  {page.name}
                </Typography>
              </Link>
              {index < 2 && <hr />}
            </>
          ))}
        </Stack>
        <Box sx={FeaturedProjectBoxSx}>
          <Stack sx={FeaturedProjectSectionSx}>
            <Typography sx={FeaturedProjectTextSx}>Featured Project</Typography>
            <Box sx={ViewProjectsBoxSx}>
              <Link href='/projects'>
                <Typography variant='subtitle2' sx={ViewProjectsTextSx}>
                  View Projects
                </Typography>
              </Link>
            </Box>
          </Stack>
          <Box sx={ProjectImageAndLinksBoxSx}>
            <Image
              src='/alojinha.png'
              alt='alojinha'
              width={447}
              height={338}
              style={{ display: 'block' }}
            />
            <ArrowLink />
            <Typography sx={ImageCaptionSx} variant='body2'>
              aLojinha
            </Typography>

            <Typography sx={ProjectDescriptionSx}>Branding & Style</Typography>
          </Box>
        </Box>
      </Box>
      <hr />
      <Box sx={SocialLinksSx}>
        {menuItems.map((item, index) => (
          <Pill key={index} link={item.link} title={item.title} />
        ))}
      </Box>
    </Stack>
  );
};
