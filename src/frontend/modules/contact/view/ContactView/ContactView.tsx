import { Header } from '@/frontend/modules/header/ui/Header';
import {
  BoxSx,
  FooterSx,
  MainTextSx,
  SocialLinksWrapperSx,
  StackSx,
  TextWrapperSx,
  TitleSx,
} from './styles';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { menuItems } from '@/frontend/utils/menuitems';
import { Pill } from '@/frontend/modules/pill/ui/Pill';

export default function ContactView() {
  return (
    <>
      <Header />
      <Stack sx={StackSx}>
        <Box sx={BoxSx}>
          <Typography variant='h1' sx={TitleSx}>
            Contact
          </Typography>
        </Box>
        <Divider variant='middle' />
        <Stack sx={TextWrapperSx}>
          <Typography
            variant='h1'
            sx={{ ...MainTextSx, fontSize: { md: '130px', xs: '25px' } }}
          >
            +55 83 9 9905-5194
          </Typography>
          <Typography
            variant='h1'
            sx={{ ...MainTextSx, fontSize: { md: '92px', xs: '25px' } }}
          >
            fernandaeziquiel@gmail.com
          </Typography>
        </Stack>
        <Box sx={SocialLinksWrapperSx}>
          {menuItems.map((item, index) => (
            <Pill key={index} link={item.link} title={item.title} />
          ))}
        </Box>
        <Box sx={FooterSx}></Box>
      </Stack>
    </>
  );
}
