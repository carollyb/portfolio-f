import { Box, Button, Drawer, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useDropdown from '@/frontend/modules/dropdown/hooks/useDropdown';
import { DotSx, DrawerSx, HeaderSx, TextSx } from './styles';
import { Dropdown } from '@/frontend/modules/dropdown/ui/Dropdown';
import { useEffect } from 'react';

export const Header = () => {
  const { zIndex } = useTheme();
  const { open, toggleDrawer } = useDropdown();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Box
      sx={{
        ...HeaderSx,
        zIndex: zIndex.drawer + 1,
      }}
    >
      <Typography variant='subtitle1' sx={TextSx}>
        FERNANDA FERREIRA EZIQUIEL
      </Typography>
      <Button onClick={toggleDrawer(!open)}>MENU</Button>
      <Box sx={DotSx} />
      <Drawer
        sx={DrawerSx}
        anchor='top'
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Dropdown />
      </Drawer>
    </Box>
  );
};
