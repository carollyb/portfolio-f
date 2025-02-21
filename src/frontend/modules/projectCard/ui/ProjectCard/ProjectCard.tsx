import { Box, Typography } from '@mui/material';
import Link from 'next/link';

type ProjectCardProps = {
  cover: string;
  title: string;
  path: string;
};

export const ProjectCard = ({ cover, title, path }: ProjectCardProps) => {
  return (
    <Link href={path}>
      <Box
        sx={{
          width: { sm: '300px', xs: 'auto' },
          height: { sm: '250px', xs: 'auto' },
        }}
      >
        <Box sx={{ height: '230px' }}>
          <img
            src={cover}
            alt='cover'
            style={{ maxHeight: '100%', width: 'auto', maxWidth: '300px' }}
          />
        </Box>
        <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
