const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'localhost:3000',
  title: 'JP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jonathan Portillo',
  role: 'Full Stack Web Developer',
  description:
    'I am a Afro-latino New York native full stack software developer.  I am well versed in React and Redux on the frontend where as I enjoy using Node.js/Express on the backend. I am looking to expand my knowledge in software and learn new languages that can help propel me to the next level. While on this journey, I plan on learning from those with solid foundations in the tech industry. ',
  resume:
    'https://docs.google.com/document/d/1ZULZ0Pm4MjYS9HOgaQvmOTpvpXT3zNjSsEa6CmzIcas/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jonathanportillo93/',
    github: 'https://github.com/jonathan-portillo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Task Note',
    description:
      'A Full Stack Web App that that allows you to store you day to day notes. The frontend is handled through React and Redux. The backend uses Node.js and Express',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/jonathan-portillo/todo-frontend-',
    livePreview: 'https://task-notes-omega.vercel.app/',
  },
  {
    name: 'Subreddit Predictor',
    description:
      'Have you ever created a Reddit Post and wondered which subreddit it should be posted? Subreddit Predictor is a Full Stack Web App built through React and handled with Node.js and Express does all the work for you',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/buildweek-pt-posthere1/front-end',
    livePreview: 'https://subreddit-posthere-theta.vercel.app/',
  },
  {
    name: 'Merchant MarketPlace',
    description:
      'Merchant Market Place is a secure app where a merchant can create a profile and sell product as well as gives shoppers the option to create a profile, match with sellers and find their favorite goods and products up for sale.',
    stack: ['React', 'Redux', 'Node.js', 'Express'],
    sourceCode:
      'https://github.com/BloomTech-Labs/PT17_merchant-marketplace-c-fe',
    livePreview:
      'https://github.com/BloomTech-Labs/PT17_merchant-marketplace-c-fe',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Knex.js',
  'SQLite',
  'LESS',
  'Authentication',
  'Deployment',
  'Python',
  'Java',
  'Responsive Design',
  'Postgres',
  'Bootstrap',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jonport93@mail.com',
}

export { header, about, projects, skills, contact }
