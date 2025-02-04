import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { menuItems } from '../about';

export default function Contact() {
  return (
    <>
      <Header />
      <Stack sx={{ paddingX: 10 }}>
        <Box
          sx={{
            width: '100%',
            height: '196px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              color: 'primary.light',
            }}
          >
            Contact
          </Typography>
        </Box>
        <Divider variant='middle' />
        <Stack
          sx={{
            paddingY: '91px',
            gap: '130px',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              color: 'text.primary',
              letterSpacing: '0.05em',
              fontWeight: 400,
            }}
          >
            +55 83 9 9905-5194
          </Typography>
          <Typography
            variant='h1'
            sx={{ color: 'text.primary', fontWeight: 400 }}
          >
            fernandaeziquiel@gmail.com
          </Typography>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '45px',
            paddingY: '21px',
            gap: '24px',
          }}
        >
          {menuItems.map((item, index) => (
            <Pill key={index} link={item.link} title={item.title} />
          ))}
        </Box>
        <Box
          sx={{
            height: '88px',
            mx: '-40px',
            borderTop: '1px solid #1E00FF',
          }}
        ></Box>
      </Stack>
    </>
  );
}
