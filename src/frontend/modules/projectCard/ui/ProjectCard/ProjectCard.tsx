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
          width: { sm: '300px', xs: 'auto' },
          height: { sm: '250px', xs: 'auto' },
        }}
      >
        <Box
          sx={{
            height: '192px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={cover}
            alt='Project cover'
            height={192}
            width={302}
            style={{ objectFit: 'contain', width: 'auto' }}
          />
        </Box>
        <Typography
          variant='subtitle2'
          sx={{ color: 'text.primary', marginTop: '18px' }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
