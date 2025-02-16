import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { Project } from '@/frontend/modules/projects/types/project.type';
import { Box, Typography } from '@mui/material';
import { ProjectTextSx } from './styles';

type ProjectListItemProps = {
  project: Project;
};

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <Box
      sx={{
        height: '96px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #707070',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          width: { sm: '33%', xs: '50%' },
        }}
      >
        <Typography variant='body2' sx={ProjectTextSx}>
          {project.title}
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
        <Typography variant='body2' sx={ProjectTextSx}>
          {project.year}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { sm: '33%', xs: '100%' },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { sm: 'end', xs: 'start' },
          gap: '14px',
        }}
      >
        {project.tags.map((tag, index) => (
          <Pill key={index} title={tag} />
        ))}
      </Box>
    </Box>
  );
};
