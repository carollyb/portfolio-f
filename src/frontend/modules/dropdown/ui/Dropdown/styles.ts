import { SxProps } from '@mui/material';

export const DropdownSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { sm: 'end', xs: 'start' },
  width: '100%',
  backgroundColor: 'background.paper',
  height: { md: '692px', xs: 'auto' },
  padding: { md: '115px 40px 40px 30px', xs: '16px 20px 86px 20px' },
};

export const BoxSx: SxProps = {
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' },
  justifyContent: { md: 'space-between', xs: 'start' },
};

export const PageLinksSx: SxProps = {
  width: { md: '50%', xs: '100%' },
  height: 'auto',
};

export const LinksSx: SxProps = {
  textDecoration: 'none',
};

export const TextLinksSx: SxProps = {
  color: 'text.primary',
  fontSize: { md: '130px', xs: '50px' },
  lineHeight: { md: '160px', xs: '60px' },
  fontWeight: 400,
};

export const FeaturedProjectBoxSx: SxProps = {
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' },
};

export const FeaturedProjectSectionSx: SxProps = {
  width: { md: '192px', xs: '264px' },
  height: { md: '291px', xs: '140px' },
  display: 'flex',
  flexDirection: { md: 'column', xs: 'row' },
  justifyContent: { md: 'space-around', xs: 'start' },
  alignItems: { md: 'unset', xs: 'center' },
};

export const FeaturedProjectTextSx: SxProps = {
  fontSize: { md: '36px', xs: '24px' },
  lineHeight: { md: '40px', xs: '30px' },
  color: '#1300A2',
  textDecoration: 'underline',
  letterSpacing: '0.06em',
  fontWeight: 400,
  width: { md: 'unset', xs: '115px' },
};

export const ViewProjectsBoxSx: SxProps = {
  width: '42px',
  marginLeft: { md: 'unset', xs: '107px' },
};

export const ViewProjectsTextSx: SxProps = {
  color: 'text.primary',
};

export const ProjectImageAndLinksBoxSx: SxProps = {
  position: 'relative',
  display: 'inline-block',
  height: { md: '338px', xs: '192px' },
  marginLeft: { md: 'unset', xs: '80px' },
};

export const ImageContainerSx: SxProps = {
  width: { md: '447px', xs: '254px' },
  height: { md: '338px', xs: '192px' },
};

export const ImageCaptionSx: SxProps = {
  fontSize: { md: '24px', xs: '14px' },
  fontWeight: 500,
  lineHeight: '30px',
  color: 'primary.contrastText',
  marginTop: '10px',
};

export const ProjectDescriptionSx: SxProps = {
  fontSize: { md: '22px', xs: '12px' },
  fontWeight: 300,
  lineHeight: '30px',
  marginTop: { md: '10px', xs: '6px' },
};

export const DividerSx: SxProps = {
  display: { xs: 'none' },
  border: '1px solid',
};

export const SocialLinksSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: { md: '45px', xs: '90px' },
  gap: { sm: '24px', xs: '8px' },
  marginBottom: { sm: '0px', xs: '76px' },
};

export const DropdownFooterMobileSx: SxProps = {
  display: { sm: 'none', xs: 'flex' },
  borderTop: '1px solid #120096',
  height: '72px',
  marginX: '-20px',
};
