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
    'Afro Latino New Yorker Looking to Break into the software field',
  resume: 'https://example.com',
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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['JavaScript', 'React', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/jonathan-portillo/todo-frontend-',
    livePreview: 'https://task-notes-omega.vercel.app/',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jonport93@mail.com',
}

export { header, about, projects, skills, contact }
