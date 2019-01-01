import lightSourceLogo from "./images/lightsourcelogo.png";
import theKeyLogo from "./images/thekeylogo.png";
import personalSiteLogo from "./images/logo.png";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
  faHackerrank,
  faSteam
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

export const greeting = "Hello World, I'm";

export const footerGreeting = "Thanks for visiting my site!";

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
    subtitle:
      "I was born in Mansoura, Egypt, to a middle class Egyptian family. I grew up and lived most of my life in Mansoura. I discovered my passion for Computer Science at a very young age, and have been coding ever since! When I was 10, I also got to witness one of the most influencial moments of my life: the January 25th, 2011 Revolution during the Arab Spring. It sparked within me a dream: to make a change; to leave the world better than I entered it. I left Mansoura and moved to Cairo to pursue high school in Cairo. During high school, I was set on continuing higher education abroad in the US. I did Model UN, was a Teaching Assistant for IGCSE ICT, and became the president of the EducationUSA Competitive College Club. On March 30th, 2017, my three-year-old dream came true when I received my acceptance letter to join the Harvard class of 2021. It has only made my dreams and ambitions grow stronger and bigger.",
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

export const socialLinks = [
  {
    name: "Facebook",
    key: "fb",
    url: "https://www.facebook.com/hossam.e.mohammed.10",
    icon: faFacebookF,
    handle: "hossam.e.mohammed.10"
  },
  {
    name: "Twitter",
    key: "twitter",
    url: "https://twitter.com/hossam_mabed",
    icon: faTwitter,
    handle: "@hossam_mabed"
  },
  {
    name: "Instagram",
    key: "ig",
    url: "https://www.instagram.com/hossamnasr_",
    icon: faInstagram,
    handle: "hossamnasr_"
  },
  {
    name: "LinkedIn",
    key: "li",
    url: "https://www.linkedin.com/in/hossam-mabed",
    icon: faLinkedinIn,
    handle: "hossam-mabed"
  },
  {
    name: "GitHub",
    key: "gh",
    url: "https://github.com/hossam-nasr",
    icon: faGithub,
    handle: "hossam-nasr"
  },
  {
    name: "HackerRank",
    key: "hr",
    url: "https://www.hackerrank.com/hossamnasr",
    icon: faHackerrank,
    handle: "hossamnasr"
  },
  {
    name: "Steam",
    key: "st",
    url: "https://steamcommunity.com/id/hossoawesome/",
    icon: faSteam,
    handle: "hossoawesome"
  }
];

export const contactInfo = [
  {
    name: "Email",
    key: "em",
    content: "h_mabed@college.harvard.edu",
    url: "mailto:h_mabed@college.harvard.edu?subject=Hi%20Hossam!",
    icon: faEnvelope
  },
  {
    name: "Location",
    key: "loc",
    content: "Cambridge, Massachusetts",
    icon: faMapMarkerAlt
  },
  {
    name: "Phone Number",
    key: "phone",
    content: "+1 617-852-5114",
    icon: faPhone
  },
  {
    name: "LinkedIn",
    key: "li",
    content: "linked.com/in/hossam-mabed",
    url: "https://www.linkedin.com/in/hossam-mabed",
    icon: faLinkedinIn
  }
];

export const contactSection = {
  section: {
    title: "Contact me!",
    subtitle: "Let's get in touch...",
    background: "background.secondary",
    fontColor: "primary"
  }
};
