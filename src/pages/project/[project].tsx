import { ArrowLink } from '@/frontend/modules/arrowlink/ui/Arrowlink';
import ArrowUp from '@/frontend/modules/arrowlink/ui/ArrowUp/ArrowUp';
import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { getProjectByName } from '@/frontend/modules/projects/server/get-project-by-name.server';
import { getProjects } from '@/frontend/modules/projects/server/get-projects.server';
import { Project } from '@/frontend/modules/projects/types/project.type';
import { Box, Button, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingX: '45px',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              color: 'primary.main',
              marginTop: '34px',
              justifySelf: 'start',
            }}
          >
            {project.year}
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src={project.image}
              alt='Project image'
              width={450}
              height={460}
              quality={100}
              style={{ display: 'block' }}
            />
            <ArrowLink />
          </Box>
          <Box>
            {/* <Button onClick={() => router.back()}>Return to projects</Button> */}
            <ArrowUp />
          </Box>
        </Box>
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
            px: '45px',
          }}
        >
          {project.tags.map((tag, index) => (
            <Pill key={index} title={tag} />
          ))}
        </Box>
        <Typography
          variant='body1'
          sx={{
            px: '45px',
            color: 'primary.main',
            marginTop: '34px',
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ marginTop: '80px' }}>
          {project.projectImages.map((projectImage, index) => (
            <Box key={index}>
              <Image
                src={projectImage}
                alt='project main image'
                width={500}
                height={500}
                layout='responsive'
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
