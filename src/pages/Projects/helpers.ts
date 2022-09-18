export interface Project {
  id: number;
  title: string;
  info: string;
  link: string;
  details: { id: number; title: string; value: string }[];
  images: string[];
  coverImage: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Re|Bank',
    info: `Re|Bank is a banking company that provides financial services to its customers. 
    In 1 year of work, I have been involved in the development of the company's marketing website, internet bank application, and internal systems. 
    I had to learn a lot of new technologies and tools and had to share my knowledge with my colleagues.`,
    details: [
      {
        id: 1,
        title: 'Client',
        value: 'Pasha Bank Georgia',
      },
      {
        id: 2,
        title: 'Date',
        value: 'Aug 2021 - Present',
      },
      {
        id: 3,
        title: 'Technologies',
        value:
          'React, react-query, TypeScript, GraphQL, Starpi, Docker, Azure, react-admin, Next.js, Vite and more.',
      },
    ],
    link: 'https://rebank.ge',
    images: [
      '/projects/rebank_1.png',
      '/projects/rebank_2.png',
      '/projects/rebank_3.png',
      '/projects/rebank_4.png',
      '/projects/rebank_5.png',
    ],
    coverImage: '/projects/rebank.png',
  },
  {
    id: 2,
    title: 'Uncia',
    info: `Uncia is a web application that allows users to create and share their own diagrams. 
  It was initially built for the purpose of creating and sharing network flowcharts, but it can be used to create any type of diagram. 
  It is highly customizable and allows users to create their own templates.`,
    details: [
      {
        id: 1,
        title: 'Client',
        value: 'itstartechs.com',
      },
      {
        id: 2,
        title: 'Date',
        value: 'Oct 2021 - Jun 2022',
      },
      {
        id: 3,
        title: 'Technologies',
        value: 'React, MUI, Next.js, Redux, React Flow and more...',
      },
    ],
    link: 'https://uncia.itstartechs.com',
    images: [
      '/projects/uncia_1.png',
      '/projects/uncia_2.png',
      '/projects/uncia_3.png',
    ],
    coverImage: '/projects/uncia.svg',
  },
  {
    id: 3,
    title: 'Sadagi',
    info: `
    Sadagi is a public movement that aims to unite every citizen around one idea that - the nature of Georgia is the common wealth and common concern of all of us. 
    I was responsible to develop the website of the movement.`,
    details: [
      {
        id: 1,
        title: 'Client',
        value: 'Sadagi',
      },
      {
        id: 2,
        title: 'Date',
        value: 'Jun 2022 - Jul 2022',
      },
      {
        id: 3,
        title: 'Technologies',
        value: 'React, MUI, Next.js, Strapi, GraphQL, Apollo Client and more.',
      },
    ],
    link: 'https://sadagi.ge',
    images: ['/projects/sadagi_1.png', '/projects/sadagi_2.png'],
    coverImage: '/projects/sadagi.png',
  },
  {
    id: 4,
    title: 'AFFIX',
    info: `AFFIX is a competetive CS:GO platform that allows users to play in tournaments and leagues. 
    This was my first project where I had to work with a team. 
    I was responsible for the development of the platform's frontend.`,
    details: [
      {
        id: 1,
        title: 'Client',
        value: 'affixnetwork',
      },
      {
        id: 2,
        title: 'Date',
        value: 'Nov 2019 - Jun 2021',
      },
      {
        id: 3,
        title: 'Technologies',
        value: 'React, Flow.js, Gatsby.js, MUI, Redux, Redux Saga and more...',
      },
    ],
    link: 'https://affix.net',
    images: [
      '/projects/affix_1.png',
      '/projects/affix_2.webp',
      '/projects/affix_3.webp',
    ],
    coverImage: '/projects/affix.png',
  },
];
