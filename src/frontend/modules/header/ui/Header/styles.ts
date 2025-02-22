import { SxProps } from '@mui/material';

export const HeaderSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  height: '80px',
  backgroundColor: 'background.paper',
  paddingX: { md: 10, xs: '20px' },
  paddingTop: { md: '0px', xs: '36px' },
  gap: '155px',
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  borderBottom: { md: '2px solid' },
  borderBottomColor: { md: 'primary.contrastText' },
};

export const HeaderMobileSx: SxProps = {
  display: { md: 'none', xs: 'flex' },
  flexDirection: 'row',
  alignItems: 'center',
  height: '48px',
  width: '90%',
  backgroundColor: 'primary.contrastText',
  borderRadius: '10px',
  position: 'fixed',
  top: '36px',
  right: '20px',
  left: '20px',
};

export const TextSx: SxProps = {
  display: { md: 'flex', xs: 'none' },
  color: 'primary.main',
};

export const DotSx: SxProps = {
  display: { md: 'flex', xs: 'none' },
  width: '15px',
  height: '15px',
  backgroundColor: 'background.default',
  borderRadius: '7.5px',
};

export const DarkModeBoxSx: SxProps = {
  display: { md: 'flex', xs: 'none' },
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 'auto',
  justifySelf: 'end',
};

export const DotMobileSx: SxProps = {
  display: 'flex',
  width: '15px',
  height: '15px',
  backgroundColor: 'background.paper',
  borderRadius: '7.5px',
};

export const DividerMobileSx: SxProps = {
  borderColor: 'background.paper',
  height: '36px',
  alignSelf: 'center',
};

export const MobileTextSx: SxProps = {
  color: 'background.paper',
  fontSize: '20px',
  lineHeight: '20px',
  marginLeft: '58px',
};

export const MenuButtonDesktopSx: SxProps = {
  display: { md: 'flex', xs: 'none' },
};

export const DrawerSx: SxProps = {
  '& .MuiPaper-root': {
    marginTop: { sm: '80px', xs: '0px' },
    paddingTop: { sm: '0px', xs: '80px' },
    borderBottomRightRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
};
