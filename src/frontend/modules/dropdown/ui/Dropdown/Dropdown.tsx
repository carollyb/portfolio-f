import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import useDropdown from '../../hooks/useDropdown';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import {
  BoxSx,
  DividerSx,
  DropdownSx,
  FeaturedProjectBoxSx,
  FeaturedProjectSectionSx,
  FeaturedProjectTextSx,
  ImageCaptionSx,
  ImageContainerSx,
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
import { menuItems } from '@/pages/about';

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
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Box sx={BoxSx}>
        <Stack sx={PageLinksSx}>
          {pageItems.map((page, index) => (
            <>
              <Link sx={LinksSx} href={page.href}>
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
            <Link href={'/project/alojinha'}>
              <Typography sx={FeaturedProjectTextSx}>
                Featured Project
              </Typography>
            </Link>
            <Box sx={ViewProjectsBoxSx}>
              <Link href='/'>
                <Typography variant='subtitle2' sx={ViewProjectsTextSx}>
                  View Projects
                </Typography>
              </Link>
            </Box>
          </Stack>
          <Box sx={ProjectImageAndLinksBoxSx}>
            <Box sx={ImageContainerSx}>
              <Image
                src='/alojinha.png'
                alt='alojinha'
                width={447}
                height={338}
                layout='responsive'
              />
            </Box>
            <ArrowLink />
            <Typography sx={ImageCaptionSx} variant='body2'>
              aLojinha
            </Typography>
            <Typography sx={ProjectDescriptionSx}>Branding & Style</Typography>
          </Box>
        </Box>
      </Box>
      <Divider orientation='horizontal' variant='middle' sx={DividerSx} />
      <Box sx={SocialLinksSx}>
        {menuItems.map((item, index) => (
          <Pill key={index} link={item.link} title={item.title} />
        ))}
      </Box>
    </Stack>
  );
};
