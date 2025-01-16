import { Box, Stack, Typography } from '@mui/material';
import { getProjects } from '../../server/get-projects.server';
import { ProjectProps } from '../../types/project.type';
import { GridStackSx, ListStackSx } from './styles';
import { useEffect } from 'react';

export const Projects = ({ tag, view }: ProjectProps) => {
  useEffect(() => {
    console.log(view);
  }, [view]);
  return view === 'list' ? (
    <Stack sx={ListStackSx}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          PROJECT
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          YEAR
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          DISCIPLINES
        </Typography>
      </Box>
      {getProjects(tag).map((project, index) => (
        <Box
          sx={{
            marginTop: index === 0 ? '24px' : '0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '74px',
          }}
        >
          <Typography
            key={index}
            variant='body2'
            sx={{ color: 'text.primary' }}
          >
            {project.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  ) : (
    <Stack sx={GridStackSx}>
      {getProjects(tag).map((project, index) => (
        <Typography key={index} variant='body2' sx={{ color: 'text.primary' }}>
          {project.title}
        </Typography>
      ))}
    </Stack>
  );
};
