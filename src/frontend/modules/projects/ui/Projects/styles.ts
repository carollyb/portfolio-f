import { SxProps } from '@mui/material';

export const ListStackSx: SxProps = {
  paddingX: { sm: '40px', xs: '20px' },
  paddingY: '32px',
  marginBottom: { xs: '32px' },
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

export const TitleTextSx: SxProps = {
  color: 'primary.main',
  fontSize: { sm: '25px', xs: '8px' },
  lineHeight: { sm: '40px', xs: '20px' },
};
