import { Box, Typography } from '@mui/material';

export const SplashScreen = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { sm: '196px', xs: '116px' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingX: { sm: 10, xs: '20px' },
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'primary.main',
          fontSize: { md: '130px', xs: '75px' },
          lineHeight: { sm: '130px', xs: '75px' },
        }}
      >
        Home
      </Typography>
    </Box>
  );
};
