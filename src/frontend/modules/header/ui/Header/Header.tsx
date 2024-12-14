import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        backgroundColor: 'background.paper',
        paddingX: 10,
      }}
    >
      <Typography variant='subtitle1' sx={{ color: 'primary.main' }}>
        FERNANDA FERREIRA EZIQUIEL
      </Typography>
    </Box>
  );
};
