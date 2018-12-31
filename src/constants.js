import lightSourceLogo from "./images/lightsourcelogo.png";
import theKeyLogo from "./images/thekeylogo.png";
import personalSiteLogo from "./images/logo.png";

export const greeting = "Hello World, I'm";

export const descriptions = [
  "student",
  "developer",
  "dreamer",
  "procrastinator",
  "badass",
  "CCC"
];

export const SWE = {
  title: "Computer Science!",
  subtitle:
    "I have been passionate about Computer Science for as long as I can remember. As a child, I used to play a lot of videogames. At some point, when I was around nine, I decided I wanted to make my own game. I googled how to make video games, and was introduced to this thing calledn 'programming.' When I saw my first program saw 'Hello, World!', I instantly fell in love. Since then, I've been involving myself in Computer Science projects, learning about new concepts, and working with tech companies! In high school, I took multiple online CS courses, took A-level Computer Science and was an Teaching Assistant for both IGCSE Computer Science and IGCSE Information and Communication Technology. Continuing down the same passion path in college, I declared my concentration for Computer Science at Harvard and took multiple CS classes. Currently, I'm a Software Engineer with HSA Dev, the only group of Harvard students that run their own web and mobile app development company. I decided to create this website to showcase my CS experience!",
  background: "background.primary",
  fontColor: "secondary"
};

export const AboutMe = {
  section: {
    title: "A little about me!",
    subtitle: "",
    background: "background.tertiary",
    fontColor: "tertiary"
  }
};

export const projects = {
  section: {
    title: "Projects!",
    subtitle: "Here are some of the projects I worked on!",
    background: "background.secondary",
    fontColor: "primary",
    summaryProjects: [
      {
        title: "LightSource",
        key: "lightsource",
        pic: lightSourceLogo,
        background: "black",
        description: "I developed this infinite clicker game from scratch!"
      },
      {
        title: "The Key",
        key: "thekey",
        pic: theKeyLogo,
        background: "white",
        description: "I worked on this iOS and Android app with HSA Dev!"
      },
      {
        title: "This Site!",
        key: "personalsite",
        pic: personalSiteLogo,
        background: "transparent",
        description: "I built this site using React!"
      }
    ]
  }
};
