import { Box, Stack, Typography } from '@mui/material';
import { getProjects } from '../../server/get-projects.server';
import { ProjectProps } from '../../types/project.type';
import { GridStackSx, ListStackSx } from './styles';
import { useEffect } from 'react';
import { ProjectCard } from '@/frontend/modules/projectCard/ui/ProjectCard';
import { ProjectListItem } from '@/frontend/modules/projectListItem/ui/ProjectListItem';

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
        <Box
          sx={{
            width: '33%',
          }}
        >
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            PROJECT
          </Typography>
        </Box>
        <Box
          sx={{
            width: '33%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            YEAR
          </Typography>
        </Box>
        <Box
          sx={{
            width: '33%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
          }}
        >
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            DISCIPLINES
          </Typography>
        </Box>
      </Box>
      {getProjects(tag).map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))}
    </Stack>
  ) : (
    <Stack sx={GridStackSx}>
      {getProjects(tag).map((project, index) => (
        <ProjectCard
          key={index}
          cover={project.cover}
          title={project.title}
          path={`/project/${project.slug}`}
        />
      ))}
    </Stack>
  );
};
