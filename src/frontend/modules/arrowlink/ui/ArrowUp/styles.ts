import { SxProps } from '@mui/material';

export const BoxSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'end',
  backgroundColor: 'background.paper',
  gap: { sm: '20px', xs: '9px' },
};

export const TextSx: SxProps = {
  color: 'text.primary',
  fontSize: { sm: '12px', xs: '8px' },
  width: { sm: '56px', xs: '49px' },
  lineHeight: { sm: '13px', xs: '10px' },
  textAlign: 'end',
};
