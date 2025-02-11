import { SxProps } from '@mui/material';

export const ListStackSx: SxProps = {
  paddingX: '40px',
  paddingY: '32px',
  backgroundColor: 'background.paper',
  height: '964px',
  borderTop: '1px solid #707070',
};

export const GridStackSx: SxProps = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
  paddingX: { sm: '40px', xs: '32px' },
  paddingTop: '32px',
  paddingBottom: { sm: '112px', xs: '194px' },
  backgroundColor: 'background.paper',
  borderTop: '2px solid #1300A2',
  height: 'auto',
};
