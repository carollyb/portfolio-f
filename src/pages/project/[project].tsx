import { ArrowLink } from '@/frontend/modules/arrowlink/ui/Arrowlink';
import ArrowUp from '@/frontend/modules/arrowlink/ui/ArrowUp/ArrowUp';
import { Header } from '@/frontend/modules/header/ui/Header';
import { Pill } from '@/frontend/modules/pill/ui/Pill';
import { getProjectByName } from '@/frontend/modules/projects/server/get-project-by-name.server';
import { getProjects } from '@/frontend/modules/projects/server/get-projects.server';
import { Project } from '@/frontend/modules/projects/types/project.type';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

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
            paddingX: { sm: '45px', xs: '20px' },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              color: 'primary.main',
              fontSize: { sm: '48px', xs: '20px' },
              marginBottom: '50px',
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
              layout='responsive'
            />
            <ArrowLink />
          </Box>
          <Box>
            <ArrowUp />
          </Box>
        </Box>
        <Typography
          variant='h1'
          sx={{
            color: 'primary.main',
            marginTop: { sm: '34px', xs: '10px' },
            fontSize: { sm: '130px', xs: '25px' },
            lineHeight: { sm: '130px', xs: '65px' },
          }}
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
            py: { sm: '26px', xs: '12px' },
            px: { sm: '45px', xs: '20px' },
          }}
        >
          {project.tags.map((tag, index) => (
            <Pill key={index} title={tag} />
          ))}
        </Box>
        <Typography
          variant='body1'
          sx={{
            px: { sm: '45px', xs: '20px' },
            color: 'primary.main',
            marginTop: { sm: '34px', xs: '18px' },
            fontSize: { sm: '40px', xs: '14px' },
            lineHeight: { sm: '40px', xs: '20px' },
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ marginTop: { sm: '80px', xs: '24px' } }}>
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
