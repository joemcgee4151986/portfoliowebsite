import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Joe McGee',
  subtitle: 'I am a software engineer and a full-stack web developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Hi there! My name is Joe and I made a transition from teaching to Full Stack Software Engineer. I currently know Javascript, MongoDB, Node, HTML,CSS and React.',
  paragraphTwo: 'Since I was a kid, I have been tinkering with computers. From learning dos to programming, my main passion has always been working with computers. After spending nearly a decade overseas, I realize that I want to be a software engineer. I always thought it was an impossible dream until I met a teacher who said it is possible.' ,
  paragraphThree: 'While I am not programming, I love meeting new people and creating everlasting friendships.',
  resume: 'https://flowcv.io/resume/feedback/6NKV3KVNJkW8', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Star Wars Quote Generator',
    info: 'Create Yoda quotes and have them replaced by Darth Vader quotes.',
    info2: '',
    url: 'https://starwars-api-quotes.herokuapp.com/',
    repo: 'https://github.com/joemcgee4151986/starwarsquotes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todolist.PNG',
    title: 'A todolist app that allows you to make your own person list.',
    info: ' ',
    info2: '',
    url: 'https://localauthpractice.herokuapp.com/',
    repo: 'https://github.com/joemcgee4151986/todolist', // if no repo, the button will not show up
  },
  
  
    {
      id: nanoid(),
      img: 'bookstore.PNG',
      title: 'Bookstore App',
      info: 'Allows you to sell your books to everyone',
      info2: '',
      url: 'https://campus-catalogs.herokuapp.com/',
      repo: 'https://github.com/joemcgee4151986/books-for-you',
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jrmcgee@asu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jrmcgee1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jrmcgee',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joseph-mcgee-31885a16/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/joemcgee4151986',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
