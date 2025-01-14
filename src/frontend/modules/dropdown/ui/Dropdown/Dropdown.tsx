import { Box, Link, Stack, Typography } from '@mui/material';
import useDropdown from '../../hooks/useDropdown';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import {
  BoxSx,
  DropdownSx,
  LinksSx,
  PageLinksSx,
  SocialLinksSx,
  TextLinksSx,
} from './styles';

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
    <Box
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
        <Box>Featured Project</Box>
      </Box>
      <hr />
      <Box sx={SocialLinksSx}>
        {menuItems.map((item, index) => (
          <Pill key={index} link={item.link} title={item.title} />
        ))}
      </Box>
    </Box>
  );
};
