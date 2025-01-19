import { Box, Typography } from '@mui/material';
import Image from 'next/image';
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
          width: '300px',
          height: '330px',
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
