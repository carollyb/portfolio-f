import { Box, Button, Drawer, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useDropdown from '@/frontend/modules/dropdown/hooks/useDropdown';
import { DrawerSx, HeaderSx, TextSx } from './styles';
import { Dropdown } from '@/frontend/modules/dropdown/ui/Dropdown';

export const Header = () => {
  const { zIndex } = useTheme();
  const { open, toggleDrawer } = useDropdown();

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
