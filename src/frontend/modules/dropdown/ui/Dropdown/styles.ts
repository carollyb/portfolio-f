import { SxProps } from '@mui/material';

export const DropdownSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  width: '100%',
  backgroundColor: 'background.paper',
  height: { md: '692px', xs: 'auto' },
  padding: { md: '115px 40px 40px 30px', xs: '16px 20px 24px 20px' },
};

export const BoxSx: SxProps = {
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' },
  justifyContent: { md: 'space-between', xs: 'start' },
};

export const PageLinksSx: SxProps = {
  width: '50%',
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

export const SocialLinksSx: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '45px',
  gap: '24px',
};

export const FeaturedProjectBoxSx: SxProps = {
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' },
};

export const FeaturedProjectSectionSx: SxProps = {
  width: '192px',
  height: '291px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

export const FeaturedProjectTextSx: SxProps = {
  fontSize: '36px',
  lineHeight: '40px',
  color: '#1300A2',
  textDecoration: 'underline',
  letterSpacing: '0.06em',
  fontWeight: 400,
};

export const ViewProjectsBoxSx: SxProps = {
  width: '42px',
};

export const ViewProjectsTextSx: SxProps = {
  color: 'text.primary',
};

export const ProjectImageAndLinksBoxSx: SxProps = {
  position: 'relative',
  display: 'inline-block',
  height: '338px',
};

export const ImageCaptionSx: SxProps = {
  fontSize: '23px',
  fontWeight: 500,
  lineHeight: '30px',
  color: 'primary.contrastText',
  marginTop: '10px',
};

export const ProjectDescriptionSx: SxProps = {
  fontSize: '22px',
  fontWeight: 300,
  lineHeight: '30px',
  marginTop: '10px',
};
