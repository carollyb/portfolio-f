import { SxProps } from '@mui/material';

export const AvatarSx: SxProps = {
  position: 'absolute',
  top: '50%',
  left: { md: '-43px', xs: '-17px' },
  transform: 'translateY(-50%)',
  width: { md: '86px', xs: '34px' },
  height: { md: '86px', xs: '34px' },
  backgroundColor: 'background.default',
  borderRadius: { md: '43px', xs: '17px' },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const IconContainerSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: { md: '27px', xs: '12px' },
  height: { md: '27px', xs: '12px' },
};
