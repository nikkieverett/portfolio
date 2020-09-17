const projects = [
  {
    id: 'hrc',
    name: 'Homeowner Resource Center',
    date: 'MAR 2020',
    subtitle: 'A tool to help guide homeowners through the process of completing their home improvement projects with accuracy and ease',
    description: "The Modernize Home Services' homeowner resource center aggregates information related to a user’s home improvement project. This includes a list of matched contractors and their profiles, additional guides and resources, and tools to help calculate the cost of their project. The user can view information about each contractor they have been matched with. They also have the ability to set appointments, submit reviews, and track the progress of their project.",
    tech: 'Built with React and bootstrapped with Create React App',
    tags: ['React', 'Redux', 'React Router', 'Hooks', 'Scss'],
    code: null,
    link: null
  },
  {
    id: 'hvaccost',
    name: 'HVAC Cost Calculator',
    date: 'JAN 2020',
    subtitle: 'A tool to help homeowners calculate the cost of their HVAC replacement projects.',
    description: "The Modernize Home Services' HVAC cost calculator allows users to input information about their HVAC project including heating and cooling needs, unit type, fuel type, and home size and estimates the cost of their project based on the information entered.",
    tech: 'Built with Preact using the Preact Widget Template and Preact&nbsp;Habitat',
    tags: ['Preact', 'Hooks', 'SCSS'],
    code: null,
    link: 'https://modernize.com/hvac/cost-calculator'
  },
  {
    id: 'windowscost',
    name: 'Windows Cost Calculator',
    date: 'SEPT 2019',
    subtitle: 'A tool to help homeowners calculate the cost of their window replacement project.',
    description: "The Modernize Home Services' windows cost calculator allows users to input information about their windows project including window type, frame type, and window size to estimate the cost of their project.",
    tech: 'Built with Preact using the Preact Widget Template and Preact&nbsp;Habitat',
    tags: ['Preact', 'Hooks', 'SCSS'],
    code: null,
    link: 'https://modernize.com/windows/replacement-cost-calculator'
  },
  {
    id: 'modstyle',
    name: 'Mod Style Design System',
    date: 'MAY 2019',
    subtitle: 'A design system package used across all of Modernize Home Services’ domains and platforms.',
    description: 'Mod Style was built to solve the problem of inconsistency that arises when multiple developers are building products across multiple platforms. It streamlines the process of development by giving developers a blueprint for their most often used components. It significantly reduces the amount of time and code necessary to get products live by providing flexible, and reusable styled components.',
    tech: 'Built on top of bootstrap-sass, which is a sass-powered version of Bootstrap 3 and published as a package through NPM.',
    tags: ['NPM', 'SCSS', 'Bootstrap', 'HTML'],
    code: null,
    link: 'https://modify.modernize.com/'
  },
  {
    id: 'classmax',
    name: 'ClassMax',
    date: 'NOV 2017',
    subtitle: 'A digital cIass room management tool for 21st century&nbsp;teachers.',
    description: 'ClassMax is a tool for quantifying teacher observations. It gives teachers the ability to track student progress, behavior, special needs accommodations, hall passes, and more. ClassMax reporting allows teachers to view any student, any group, or an entire class, by date and tracking type, and generates easy PDF reports. These reports can be submitted for required documentation, shared with parents during conferences, or used for your own record-keeping.',
    tech: 'Built with Preact using the Preact Widget Template and Preact Habitat',
    tags: ['React', 'Redux', 'React Router', 'Scss'],
    code: null,
    link: 'https://classmaxapp.com/what-is-classmax/'
  },
  {
    id: 'cooking-spoon',
    name: 'The Cooking Spoon',
    date: 'JUNE 2017',
    subtitle: 'A recipe storage app for storing family recipes.',
    description: 'The cooking spoon is the first project I ever built. I created it for my mother, who is the best cook in all the land. Now that I am an adult and have moved away from home, the one thing I miss most is her cooking. This app is a way to have a little piece of home right at my fingertips.',
    tech: 'Built using Gatsby’s "Hello World" starter and Netlify CMS for content management',
    tags: ['Netlify', ' Netlify CMS', 'React', 'Gatsby', 'Styled Components', 'Material UI'],
    code: 'https://github.com/nikkieverett/recipe-app',
    link: 'https://the-cooking-spoon.netlify.com/'
  }
]

export default projects
