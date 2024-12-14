import { Box, Typography } from '@mui/material';

export const SplashScreen = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '196px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingX: 10,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'primary.main',
        }}
      >
        Home
      </Typography>
    </Box>
  );
};
