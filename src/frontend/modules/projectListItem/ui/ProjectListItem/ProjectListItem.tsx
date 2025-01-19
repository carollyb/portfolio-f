import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { Project } from '@/frontend/modules/projects/types/project.type';
import { Box, Typography } from '@mui/material';

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
      }}
    >
      <Box
        sx={{
          width: '33%',
        }}
      >
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {project.title}
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
          {project.year}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '33%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
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
