import { Box, Link, Typography } from '@mui/material';

type PillProps = {
  title: string;
  link?: string;
};

export const Pill = ({ title, link }: PillProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '115px',
        height: '40px',
        border: '1px solid',
        borderRadius: '20px',
        textAlign: 'center',
      }}
    >
      {link ? (
        <Link style={{ textDecoration: 'none' }} href={link} target='_blank'>
          <Typography variant='caption'>{title}</Typography>
        </Link>
      ) : (
        <Typography variant='caption'>{title}</Typography>
      )}
    </Box>
  );
};
