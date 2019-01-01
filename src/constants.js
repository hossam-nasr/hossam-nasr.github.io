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
  faSteam,
  faYoutube
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

export const biography =
  "I was born in Mansoura, Egypt, to a middle class Egyptian family. I grew up and lived most of my life in Mansoura. I discovered my passion for Computer Science at a very young age, and have been coding ever since! When I was 10, I also got to witness one of the most influencial moments of my life: the January 25th, 2011 Revolution during the Arab Spring. It sparked within me a dream: to make a change; to leave the world better than I entered it. I left Mansoura and moved to Cairo to pursue high school in Cairo. During high school, I was set on continuing higher education abroad in the US. I did Model UN, was a Teaching Assistant for IGCSE ICT, and became the president of the EducationUSA Competitive College Club. On March 30th, 2017, my three-year-old dream came true when I received my acceptance letter to join the Harvard class of 2021. It has only made my dreams and ambitions grow stronger and bigger.";

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
    subtitle: biography,
    background: "background.tertiary",
    fontColor: "tertiary"
  },
  page: {
    title: "A little about me!",
    sections: [
      {
        title: "Biography",
        subtitle: "A small journey through my life...",
        background: "background.primary",
        fontColor: "secondary",
        content: [
          {
            type: "text",
            payload: biography
          }
        ]
      },
      {
        title: "TEDx",
        subtitle: "",
        background: "background.secondary",
        fontColor: "primary",
        content: [
          {
            type: "subtitle",
            payload: "Speaker"
          },
          {
            type: "text",
            payload:
              "I gave a TEDx Talk during TEDxYouth@ISEE 2017, in which I talked about the philosophy of the self. I start asking rhetorical questions to find answers for what ultimately defines us as human beings. You can watch it here:"
          },
          {
            type: "video",
            payload: "https://www.youtube.com/embed/ZBOfB6iM1z8"
          },
          {
            type: "subtitle",
            payload: "Organizer"
          },
          {
            type: "text",
            payload:
              "I was an organizer for TEDx. I founded and organized the first ever TEDxYouth event at my school, TEDxYouth@EBIS, which is now in its current generation. Check it out below!"
          },
          {
            type: "link",
            payload: "Watch the videos here!",
            url:
              "https://www.youtube.com/playlist?list=PLsRNoUx8w3rPZnyPPRfG4v8oeuTz-c1eZ",
            icon: faYoutube
          },
          {
            type: "link",
            payload: "Check out our Facebook Page!",
            url: "https://www.facebook.com/TEDxYouthEBIS/",
            icon: faFacebookF
          }
        ]
      }
    ]
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
  },
  page: {
    title: "Projects!",
    subtitle: "Project showcase",
    subsubtitle: "Computer Science is my passion. I started coding when I was 9 and haven't stopped since. Here are some of the projects I've worked on!",
    background: "background.secondary",
    fontColor: "primary",
    projectBackground: "background.tertiary",
    projectFontColor: 'tertiary',
    allProjects: [
      {
        title: "LightSource",
        key: "lightsource",
        pic: lightSourceLogo,
        background: "black",
        summary: "I developed this infinite clicker game from scratch!"
      },
      {
        title: "The Key",
        key: "thekey",
        pic: theKeyLogo,
        background: "white",
        summary: "I worked on this iOS and Android app with HSA Dev!"
      },
      {
        title: "This Site!",
        key: "personalsite",
        pic: personalSiteLogo,
        background: "transparent",
        summary: "I built this site using React!"
      },
      {
        title: "Forms4Friends",
        key: "f4f",
        pic: personalSiteLogo,
        background: "transparent",
        summary: "I worked on this project as part of the Harvard Code for Life Hackathon"
      },
      {
        title: "Converge",
        key: "converge",
        pic: personalSiteLogo,
        background: "transparent",
        summary: "I worked on this project as part of YHack 2017"
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
