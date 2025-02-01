import { Box, Typography } from '@mui/material';
import { PillSx } from './styles';
import Link from 'next/link';

type PillProps = {
  title: string;
  link?: string;
};

export const Pill = ({ title, link }: PillProps) => {
  return (
    <Box sx={PillSx}>
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
