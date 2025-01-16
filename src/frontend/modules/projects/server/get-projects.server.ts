import { Project } from '../types/project.type';

const projects: { [key: string]: Project[] } = {
  ux: [
    {
      title: 'MIMAR',
      description:
        'The concept behind the screens is to A meal-prep app where users customize ingredients and portions, with a personal chef crafting fresh, tailored meals.',
      year: 2020,
    },
    {
      title: 'BIKEAPP',
      description:
        'This app features a unique planner that helps plan and coordinate bike road trip, making your tour plan process less stressful, find a suitable destination, joying your ride and making friends',
      year: 2021,
    },
    {
      title: 'HMP',
      description:
        'Hold My Paw is an online store made for customers who love their pets and want to keep their food stock up to date. With busy schedules and little time available, users need a friendly shoulder to help take good care of their pets. The app shows tips so that pet owners can buy the right product for their pet and are free to contact the company.',
      year: 2023,
    },
    {
      title: 'WHERE2GO',
      description:
        'Designed a user-centered landing page for a travel agency, focusing on trust and ease of booking to inspire users’ dream adventures. Simplified navigation and captivating visuals enhance engagement and conversion.',
      year: 2024,
    },
  ],
  art: [
    {
      title: 'aLojinha',
      description:
        '“A lojinha” is a women-founded, women-produced business with a mission to bring more sustainability into everyday life.',
      year: 2021,
    },
  ],
  illustration: [
    {
      title: 'HORTUS CONCLUSUS',
      description:
        'The concept behind the screens is to present scenes of an unreal garden in the middle of Valparaíso (Chile), with a single plant governing the entire garden and a guardian animal.',
      year: 2019,
    },
    {
      title: 'A PLACE TO EAT',
      description:
        'From a workshop with Salvador Macías – Pontificia Universidad Católica de Chile. This illustration, showcases a communal dining space with overlapping platforms, where people gather, interact, and relax. The minimalist design and soft colors highlight the flexibility of urban spaces, encouraging dynamic social interactions.',
      year: 2019,
    },
    {
      title: 'PRESTON’S MOSQUE',
      description: 'Digital art for a architecture competition in England.',
      year: 2019,
    },
  ],
  all: [
    {
      title: 'MIMAR',
      description:
        'The concept behind the screens is to A meal-prep app where users customize ingredients and portions, with a personal chef crafting fresh, tailored meals.',
      year: 2020,
    },
    {
      title: 'BIKEAPP',
      description:
        'This app features a unique planner that helps plan and coordinate bike road trip, making your tour plan process less stressful, find a suitable destination, joying your ride and making friends',
      year: 2021,
    },
    {
      title: 'HMP',
      description:
        'Hold My Paw is an online store made for customers who love their pets and want to keep their food stock up to date. With busy schedules and little time available, users need a friendly shoulder to help take good care of their pets. The app shows tips so that pet owners can buy the right product for their pet and are free to contact the company.',
      year: 2023,
    },
    {
      title: 'WHERE2GO',
      description:
        'Designed a user-centered landing page for a travel agency, focusing on trust and ease of booking to inspire users’ dream adventures. Simplified navigation and captivating visuals enhance engagement and conversion.',
      year: 2024,
    },
    {
      title: 'aLojinha',
      description:
        '“A lojinha” is a women-founded, women-produced business with a mission to bring more sustainability into everyday life.',
      year: 2021,
    },
    {
      title: 'HORTUS CONCLUSUS',
      description:
        'The concept behind the screens is to present scenes of an unreal garden in the middle of Valparaíso (Chile), with a single plant governing the entire garden and a guardian animal.',
      year: 2019,
    },
    {
      title: 'A PLACE TO EAT',
      description:
        'From a workshop with Salvador Macías – Pontificia Universidad Católica de Chile. This illustration, showcases a communal dining space with overlapping platforms, where people gather, interact, and relax. The minimalist design and soft colors highlight the flexibility of urban spaces, encouraging dynamic social interactions.',
      year: 2019,
    },
    {
      title: 'PRESTON’S MOSQUE',
      description: 'Digital art for a architecture competition in England.',
      year: 2019,
    },
  ],
};

export function getProjects(tag: string): Project[] {
  return projects[tag];
}
