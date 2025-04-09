// Import all the assets
import jsIcon from '../assets/icons/SkillIconsJavascript.svg';
import tailwindIcon from '../assets/icons/SkillIconsTailwindcssLight.svg';
import reactIcon from '../assets/icons/SkillIconsReactDark.svg';
import nodeIcon from '../assets/icons/SkillIconsNodejsDark.svg';
import viteIcon from '../assets/icons/SkillIconsViteDark.svg';
import githubIcon from '../assets/icons/SkillIconsGithubLight.svg';
import cssIcon from '../assets/icons/SkillIconsCss.svg';
import htmlIcon from '../assets/icons/SkillIconsHtml.svg';
import webpackIcon from '../assets/icons/SkillIconsWebpackLight.svg';

// Import project images
import inquizableImg from '../assets/images/inquizable.jpg';
import githubFinderImg from '../assets/images/github.jpg';
import ffeImg from '../assets/images/ffe.png';
import dietTrackerImg from '../assets/images/diettracker.jpg';
import textToImageGeneratorImg from '../assets/images/ai.jpg';
import flixxMovieDatabaseImg from '../assets/images/flixx.webp';

const data = [
  {
    id: 1,
    title: "Inquizable",
    src: [
      jsIcon,
      tailwindIcon,
      reactIcon,
      nodeIcon,
    ],
    imgUrl: inquizableImg,
    description:
      "Test your general knowledge with this quiz app. User log-in,registration and profile page.",
    href: "https://www.inquizable.com/",
    alt: "Inquizable",
  },
  {
    id: 2,
    title: "GitHub Finder",
    src: [
      jsIcon,
      viteIcon,
      reactIcon,
      githubIcon,
    ],
    imgUrl: githubFinderImg,
    description:
      "Search Githubs database for users, and display repos, stars, and achievements.",
    href: "https://git-hub-finder-vite.vercel.app/",
    alt: "GitHub Finder",
  },
  {
    id: 3,
    title: "Four Flavours Express",
    src: [
      jsIcon,
      tailwindIcon,
      reactIcon,
    ],
    imgUrl: ffeImg,
    description:
      "Four Flavours Express is a food delivery service that allows you to have your favourite meals delivered to your door.",
    href: "https://fourflavoursexpress.onrender.com/",
    alt: "Four Flavours Express",
  },
  {
    id: 4,
    title: "Diet-Tracker",
    src: [
      jsIcon,
      cssIcon,
      htmlIcon,
    ],
    imgUrl: dietTrackerImg,
    description:
      "Track calories burnt from exercise and dieting. Meals and workouts are calculated from daily expenditure.",
    href: "https://dietracker.vercel.app/",
    alt: "Diet-Tracker",
  },
  {
    id: 5,
    title: "Text to Image Generator",
    src: [
      jsIcon,
      tailwindIcon,
      reactIcon,
    ],
    imgUrl: textToImageGeneratorImg,
    description: "Generate a custom image from text within seconds using AI.",
    href: "https://texttoimagegenerator.vercel.app/",
    alt: "Text to Image Generator",
  },
  {
    id: 6,
    title: "Flixx Movie Database",
    src: [
      jsIcon,
      cssIcon,
      htmlIcon,
      webpackIcon,
    ],
    imgUrl: flixxMovieDatabaseImg,
    description:
      " Search a movie database for new releases, ratings and possible viewing pleasure",
    href: "https://flixxmoviesearchengine.vercel.app/",
    alt: "Flixx Movie Database",
  },
];

export default data;
