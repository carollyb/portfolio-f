import {
  Box,
  Button,
  Divider,
  Drawer,
  Switch,
  Typography,
} from '@mui/material';
import { useColorScheme, useTheme } from '@mui/material/styles';
import useDropdown from '@/frontend/modules/dropdown/hooks/useDropdown';
import {
  DarkModeBoxSx,
  DividerMobileSx,
  DotMobileSx,
  DotSx,
  DrawerSx,
  HeaderMobileSx,
  HeaderSx,
  MenuButtonDesktopSx,
  MobileTextSx,
  TextSx,
} from './styles';
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

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const handleChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box
      sx={{
        ...HeaderSx,
        zIndex: zIndex.drawer + 1,
      }}
    >
      <Box sx={HeaderMobileSx}>
        <Button onClick={toggleDrawer(!open)}>
          <Box sx={DotMobileSx} />
        </Button>
        <Divider orientation='vertical' sx={DividerMobileSx} />
        <Typography variant='subtitle1' sx={MobileTextSx}>
          FERNANDA FERREIRA EZEQUIEL
        </Typography>
      </Box>

      <Typography variant='subtitle1' sx={TextSx}>
        FERNANDA FERREIRA EZEQUIEL
      </Typography>
      <Button sx={MenuButtonDesktopSx} onClick={toggleDrawer(!open)}>
        MENU
      </Button>
      <Box sx={DotSx} />
      <Box sx={DarkModeBoxSx}>
        <Typography
          variant='subtitle2'
          sx={{
            color: 'primary.contrastText',
          }}
        >
          DARK MODE
        </Typography>
        <Switch defaultChecked={mode === 'dark'} onChange={handleChange} />
      </Box>
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
