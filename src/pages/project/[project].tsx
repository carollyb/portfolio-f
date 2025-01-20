import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { getProjectByName } from '@/frontend/modules/projects/server/get-project-by-name.server';
import { getProjects } from '@/frontend/modules/projects/server/get-projects.server';
import { Project } from '@/frontend/modules/projects/types/project.type';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticPaths = (() => {
  const projects = getProjects('all');

  const paths = projects.map((project) => ({
    params: { project: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = ((context) => {
  const project = getProjectByName(context.params?.project as string);
  return { props: { project } };
}) satisfies GetStaticProps<{
  project: Project;
}>;

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 45px',
        }}
      >
        <img src={project.cover} />
        <Typography
          variant='h1'
          sx={{ color: 'primary.main', marginTop: '34px' }}
        >
          {project.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'start',
            gap: '14px',
            width: '100%',
            borderTop: '1px solid #707070',
            borderBottom: '1px solid #707070',
            py: '26px',
          }}
        >
          {project.tags.map((tag, index) => (
            <Pill key={index} title={tag} />
          ))}
        </Box>
        <Typography
          variant='body1'
          sx={{ color: 'primary.main', marginTop: '34px' }}
        >
          {project.description}
        </Typography>
      </Box>
    </>
  );
}
