import { SxProps } from '@mui/material';

export const TitleBoxSx: SxProps = {
  width: '100%',
  height: { sm: '196px', xs: '117px' },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const TitleTextSx: SxProps = {
  color: 'primary.light',
  fontSize: { sm: '140px', xs: '75px' },
  lineHeight: { sm: '196px', xs: '90px' },
};

export const ContentContainerSx: SxProps = {
  display: 'flex',
  flexDirection: { sm: 'row', xs: 'column' },
  paddingTop: '40px',
  gap: { sm: '42px', xs: '24px' },
  alignItems: 'center',
};

export const ImageWrapperSx: SxProps = {
  width: { sm: '532px', xs: '248px' },
  height: { sm: '526px', xs: '245px' },
  position: 'relative',
};

export const AboutTextSx: SxProps = {
  color: 'primary.light',
  fontSize: { sm: '25px', xs: '14px' },
  lineHeight: { sm: '40px', xs: '20px' },
};

export const SocialLinksSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: { sm: '45px', xs: '11px' },
  paddingY: '21px',
  gap: '24px',
};

export const FooterSx: SxProps = {
  height: '88px',
  mx: '-40px',
  borderTop: '1px solid #1E00FF',
};
