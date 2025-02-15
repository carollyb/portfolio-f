import { SxProps } from '@mui/material';

export const StackSx: SxProps = {
  paddingX: { sm: 10, xs: '20px' },
};

export const BoxSx: SxProps = {
  width: '100%',
  height: { sm: '196px', xs: '117px' },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const TitleSx: SxProps = {
  color: 'primary.main',
  fontSize: { md: '130px', xs: '75px' },
  lineHeight: { md: '130px', xs: '65px' },
};

export const TextWrapperSx: SxProps = {
  paddingY: { sm: '90px', xs: '24px' },
  gap: { sm: '130px', xs: '24px' },
  height: { sm: 'auto', xs: '472px' },
};

export const MainTextSx: SxProps = {
  color: { sm: 'text.primary', xs: 'primary.main' },
  letterSpacing: { sm: '0.05em', xs: 'unset' },
  fontWeight: 400,
  lineHeight: { md: '130px', xs: '65px' },
};

export const SocialLinksWrapperSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '45px',
  paddingY: '21px',
  gap: '24px',
};

export const FooterSx: SxProps = {
  height: '88px',
  mx: '-40px',
  borderTop: '1px solid #1E00FF',
};
