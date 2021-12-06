import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
  // {
  //   title: 'Software Engineer',
  //   about:
  //     'Software engineer with  3 years of experience in building of REST APIS with Python(Django/Flask), \n and developing  UI/UX interface with Javascript/React.',
  //   Icon: RiComputerLine,
  // },
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'Handle Database, Server, Api using <b>Python(Django/Flask)</b> </b>  & <b>PostgreSQL</b> ',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>Django-Rest-Api</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Algorithms & DS',
    about: 'A daily problem solver <b>Leet Code</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  // {
  //   Icon: RiComputerLine,
  //   title: 'Whatever',
  //   about:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  // },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Python(Django/PostgreSQL)',
    level: '79%',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '63%',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '63%',
  },
  {
    Icon: BsCircleFill,
    name: 'TailwindCSS',
    level: '50%',
  }
  // {
  //   Icon: BsCircleFill,
  //   name: 'Flutter',
  //   level: '30%',
  // },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Version Control(Git)',
    level: '80%',
  },
  {
    Icon: BsCircleFill,
    name: 'Heroku',
    level: '65%',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'Docker',
    level: '45%',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Portfolio',
    description: 'This is ia my portfolio built using Next.js',
    image_path: '/images/portfolio.png',
    deployed_url: 'https://philipotieno.vercel.app/',
    github_url: 'https://github.com/Philipotieno/Portfolio-N',
    category: ['react', 'django'],
    key_techs: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Visualizer',
    image_path: '/images/visualizer.png',
    deployed_url: 'https://salesinvoice.vercel.app/#/',
    github_url: 'https://github.com/Philipotieno/Invoice-Front-End',
    category: ['react', 'django', 'postgres'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key_techs: ['Vue.js', 'Flask'],
  },

  {
    id: 3,
    name: 'React Visualizer',
    image_path: '/images/vix.png',
    deployed_url: 'https://visualization-in-react.vercel.app/',
    github_url: 'https://github.com/Philipotieno/Visualization-In-React',
    category: ['react'],
    description: 'App that User can use to visualize csv data',
    key_techs: ['React', 'CSS', 'Flask'],
  },

  {
    id: 4,
    name: 'Item Search',
    image_path: '/images/item-search.png',
    deployed_url: 'https://philip-item-search.vercel.app/',
    github_url: 'https://github.com/Philipotieno/ITEM_SEARCH',
    category: ['react'],
    description: 'Search App for any items on the internet',
    key_techs: ['React', 'Semantic UI', 'Third-Party API'],
  },

  {
    id: 5,
    name: 'Made With Tailwind',
    image_path: '/images/tailwind.png',
    deployed_url: 'https://made-with-tailwind.vercel.app/#',
    github_url: 'https://github.com/Philipotieno/MadeWithTailwind',
    category: ['react'],
    description: 'Built with Tailwind CSS',
    key_techs: ['Tailwind CSS'],
  },

  {
    id: 6,
    name: 'Authors Haven',
    image_path: '/images/authors.png',
    deployed_url: 'https://ah-immortals-frontend-staging.herokuapp.com/',
    github_url: 'https://github.com/andela/ah-the-immortals-frontend',
    category: ['react', 'django', 'postgres'],
    description:
      'Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web.',
    key_techs: ['React', 'Django Rest FrameWork'],
  },
  {
    id: 7,
    name: 'Space X',
    image_path: '/images/spacex.png',
    deployed_url: 'https://spacex-api-ten.vercel.app/',
    github_url: 'https://github.com/Philipotieno/Spacex-API',
    category: ['react'],
    description: 'Light weight replica of the SpaceX website',
    key_techs: ['React', 'GraphQL', 'Apollo'],
  },
  // {
  //   id: 7,
  //   name: 'YouTube using YouTube ',
  //   image_path: '/images/youtubeClone.png',
  //   deployed_url: 'https://not-utube.web.app/',
  //   github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
  //   category: ['express'],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     'React',
  //     'Redux',
  //     'Firebase Auth',
  //     'YouTube API',
  //     'Sass',
  //     'Bootstrap',
  //   ],
  // },
  // {
  //   id: 8,
  //   name: 'Football App',
  //   image_path: '/images/football.png',
  //   deployed_url: 'https://o-my-goal.web.app/',
  //   github_url: 'https://github.com/Dey-Sumit/football-app',
  //   category: ['react'],
  //   description:
  //     'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
  //   key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  // },
];
