import { SxProps } from '@mui/material';

export const WrapperSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  bottom: '0px',
  width: '100%',
  height: '80px',
  backgroundColor: 'background.paper',
  paddingX: 10,
  borderTop: '2px solid #1300A2',
};

export const ButtonsWrapperSx: SxProps = {
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
