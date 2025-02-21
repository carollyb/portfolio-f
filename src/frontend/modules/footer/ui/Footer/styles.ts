import { SxProps } from '@mui/material';

export const WrapperSx: SxProps = {
  display: 'flex',
  flexDirection: { sm: 'row', xs: 'column' },
  justifyContent: 'space-between',
  alignItems: { sm: 'center', xs: 'start' },
  position: { sm: 'fixed', xs: 'static' },
  bottom: { sm: '0px', xs: 'unset' },
  width: '100%',
  height: { sm: '80px', xs: 'auto' },
  backgroundColor: 'background.paper',
  paddingX: { sm: 10, xs: '24px' },
  paddingY: { sm: 'unset', xs: '24px' },
  borderTop: '2px solid',
  borderTopColor: 'primary.contrastText',
  gap: { sm: 'unset', xs: '24px' },
};

export const ButtonsWrapperSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
};

export const TabsWrapperSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
};

export const ButtonSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '115px',
  height: '40px',
  border: '1px solid #C4C4C4',
  borderRadius: '20px',
  textAlign: 'center',
};

export const DividerSx: SxProps = {
  borderBottom: 1,
  borderColor: 'divider',
};
