import AboutMeData from "./content/AboutMeData";
import projectsData from "./content/projectsData";
import resumeData from "./content/resumeData";
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
import {
  faMapMarkerAlt,
  faPhone,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";

export const greeting = "Hello World, I'm";

export const footerGreeting = "Thanks for visiting my site!";

export const descriptions = ["student", "developer", "dreamer"];

export const MenuIcon = {
  down: faCaretDown,
  up: faCaretUp
};

export const SWE = {
  title: "Computer Science!",
  subtitle:
    "I have been passionate about Computer Science for as long as I can remember. As a child, I used to play a lot of videogames. At some point, when I was around nine, I decided I wanted to make my own game. I googled how to make video games, and was introduced to this thing called 'Programming.' When I saw my first program saw 'Hello, World!', I instantly fell in love. Since then, I've been involving myself in Computer Science projects, learning about new concepts, and working with tech companies! In high school, I took multiple online CS courses, took A-level Computer Science and was a Teaching Assistant for both IGCSE Computer Science and IGCSE Information and Communication Technology. Continuing down the same passion path in college, I declared my concentration for Computer Science at Harvard and took multiple CS classes. Currently, I'm a Software Engineer with HSA Dev, the only group of Harvard students that run their own web and mobile app development company. I decided to create this website to showcase my CS experience!",
  background: "background.primary",
  fontColor: "secondary"
};

export const socialLinks = [
  {
    name: "Facebook",
    key: "fb",
    url: "https://www.facebook.com/hossam.nasr99",
    icon: faFacebookF,
    handle: "hossam.nasr99"
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
    icon: faMapMarkerAlt,
    url: "https://goo.gl/maps/yNTdSNZEK1k8zA4R7"
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
  },
  page: {
    title: "Contact Me!",
    subtitle: "Let's get in touch...",
    socialIntro: "Or Find Me on Social Media:",
    background: "background.primary",
    fontColor: "secondary"
  }
};

export const AboutMe = AboutMeData;
export const projects = projectsData;
export const resume = resumeData;
