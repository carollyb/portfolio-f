import { SxProps } from '@mui/material';

export const HeaderSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '80px',
  backgroundColor: 'background.paper',
  paddingX: 10,
  gap: '155px',
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  borderBottom: '2px solid #1300A2',
};

export const TextSx: SxProps = { color: 'primary.main' };

export const DrawerSx: SxProps = {
  '& .MuiPaper-root': {
    marginTop: '80px',
    borderBottomRightRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
};
