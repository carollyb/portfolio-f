import { Box, Stack, Typography } from '@mui/material';
import { getProjects } from '../../server/get-projects.server';
import { ProjectProps } from '../../types/project.type';
import { GridStackSx, ListStackSx, TitleTextSx } from './styles';
import { ProjectCard } from '@/frontend/modules/projectCard/ui/ProjectCard';
import { ProjectListItem } from '@/frontend/modules/projectListItem/ui/ProjectListItem';

export const Projects = ({ tag, view }: ProjectProps) => {
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
            width: { sm: '33%', xs: '50%' },
          }}
        >
          <Typography variant='body2' sx={TitleTextSx}>
            PROJECT
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: '33%', xs: '50%' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { sm: 'center', xs: 'end' },
          }}
        >
          <Typography variant='body2' sx={TitleTextSx}>
            YEAR
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: '33%', xs: '100%' },
            display: { sm: 'flex', xs: 'none' },
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
