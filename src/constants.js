import lightSourceLogo from "./images/lightsourcelogo.png";
import theKeyLogo from "./images/thekeylogo.png";
import personalSiteLogo from "./images/logo.png";
import forms4FriendsLogo from "./images/Forms4FriendsLogo.png";
import convergeLogo from "./images/convergelogo.png";
import toDoListLogo from "./images/todolistlogo.png";
import DevLogo from "./images/devlogo.png";
import TEDxISEE from "./images/TEDxISEE.jpg";
import TEDxEBIS from "./images/TEDxEBIS.png";
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

export const biography =
  "I was born in Mansoura, Egypt, to a middle class Egyptian family. I grew up and lived most of my life there. I discovered my passion for Computer Science at a very young age, and have been coding ever since! When I was 10, I also got to witness one of the most influencial moments of my life: the January 25th, 2011 Revolution during the Arab Spring. It sparked within me a dream: to make a change; to leave the world a better place. I left Mansoura and moved to Cairo to pursue British high school education. During high school, I was set on continuing university education abroad. I did Model UN, was a Teaching Assistant for IGCSE ICT, and became the president of the EducationUSA Competitive College Club. On March 30th, 2017, my three-year-old dream came true when I received my acceptance letter to join the Harvard class of 2021. It has only made my dreams and ambitions grow stronger and bigger ever since.";

export const SWE = {
  title: "Computer Science!",
  subtitle:
    "I have been passionate about Computer Science for as long as I can remember. As a child, I used to play a lot of videogames. At some point, when I was around nine, I decided I wanted to make my own game. I googled how to make video games, and was introduced to this thing called 'Programming.' When I saw my first program saw 'Hello, World!', I instantly fell in love. Since then, I've been involving myself in Computer Science projects, learning about new concepts, and working with tech companies! In high school, I took multiple online CS courses, took A-level Computer Science and was a Teaching Assistant for both IGCSE Computer Science and IGCSE Information and Communication Technology. Continuing down the same passion path in college, I declared my concentration for Computer Science at Harvard and took multiple CS classes. Currently, I'm a Software Engineer with HSA Dev, the only group of Harvard students that run their own web and mobile app development company. I decided to create this website to showcase my CS experience!",
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
        title: "My Journey",
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
        title: "HSA Dev",
        subtitle: "My current CS home...",
        background: "background.tertiary",
        fontColor: "tertiary",
        content: [
          {
            type: "subtitle",
            payload: "About HSA Dev"
          },
          {
            type: "pic",
            payload: DevLogo,
            alt: "Dev Logo"
          },
          {
            type: "text",
            payload:
              'Founded in 2017, HSA Dev is the only group of Harvard students that run their own web and mobile app development company! We are "A group of pioneers, computer freaks, and eclectic creatives united by the shared excitement of the unknown and driven by unstoppable curiosity." HSA Dev is a non-profit firm that gathers some of the best engineers (font-end and back-end), designers (UX/UI and graphic) and creatives that Harvard has to offer.'
          },
          {
            type: "button",
            payload: "More about HSA Dev!",
            href: "https://www.dev.hsa.net/",
            target: "_blank",
            primary: "tertiary",
            secondary: "background.tertiary"
          },
          {
            type: "subtitle",
            payload: "My role in HSA Dev"
          },
          {
            type: "pic",
            payload: theKeyLogo,
            alt: "The Key Logo"
          },
          {
            type: "text",
            payload:
              "I joined HSA Dev in October 2018 as a Software Engineer. I work as both front-end and back-end Engineer, focusing mostly on front-end. With HSA Dev, I work on both the iOS and Andoird apps for The Key Society, HSA Dev's most ambitious project yet. The Key Society is a start-up founded by two Harvard students, aimed at creating a motivated community of Harvard students committed to making networking accessible, genuine, and simple. On the Key, I worked on registration flow, data validation, responsive design, as well as bug-testing and debugging for both the iOS and Android versions of The Key Society 2.0."
          },
          {
            type: "button",
            payload: "More About The Key",
            href: "https://www.dev.hsa.net/portfolio/thekeysociety",
            primary: "tertiary",
            secondary: "background.tertiary"
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
            type: "pic",
            payload: TEDxISEE,
            alt: "TEDxYouth@ISEE logo"
          },
          {
            type: "text",
            payload:
              "In my senior year of high school, I gave a TEDx Talk during TEDxYouth@ISEE 2017, hosted in the International School of Elite Education in its second year. During the talk, I spoke about topics related to the philosophy of the self and the minded. I started asking rhetorical questions to find answers for what ultimately defines us as human beings. You can watch it here (the talk is in Arabic):"
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
            type: "pic",
            payload: TEDxEBIS,
            alt: "TEDxYouth@EBIS logo"
          },
          {
            type: "text",
            payload:
              'Later on in my senior year, I co-founded and led TEDxYouth@EBIS, which was the first TEDx event at my school, Egypt British International School. I led a team of over 50 students over the span of several months to coordinate logistics, fundraising, and speaker recruitment and training for the event. With the theme of "Illuminayion," the first ever TEDxYouth@EBIS took place on July 29, 2017, and drew over 100 attendees. TExYouth@EBIS continued with its second generation event later on September 1, 2018, and the third generation event is currently in the making.'
          },
          {
            type: "text",
            payload: 'Check out TEDxYouth@EBIS 2017: "Illumination" below:'
          },
          {
            type: "array",
            justifyContent: "center",
            payload: [
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
    ]
  }
};

export const projects = {
  section: {
    title: "Projects!",
    subtitle: "Here are some of the projects I worked on!",
    background: "background.secondary",
    fontColor: "primary"
  },
  page: {
    title: "Projects!",
    subtitle: "Project Showcase",
    subsubtitle:
      "Computer Science is my passion. I started coding when I was 9 and haven't stopped since. Here are some of the projects I've worked on!",
    background: "background.secondary",
    fontColor: "primary",
    projectBackground: "background.tertiary",
    projectFontColor: "tertiary"
  },
  allProjects: [
    {
      title: "LightSource",
      key: "lightsource",
      pic: lightSourceLogo,
      background: "black",
      url: "http://lightsource.ga",
      github: "https://github.com/hossam-nasr/lightsource",
      summary: "I developed this infinite clicker game from scratch!",
      description:
        'LightSource is a game I created entirely from scratch using JavaScript, PHP, HTML, CSS, and SQL. It is an "infinite clicker" game with one simple premise: click on your LightSource to produce photons. You start with a simple tiny Electromagnetic Field which produces only one photon per click, but as you keep clicking, you can collect enough photons to buy better LightSources with more photons per click. You can choose from 13 different LightSources ranging from a candle, to a street lamp, to a Lightsaber, even to the Sun. Buying a certain LightSource also unlocks the ability to buy its "Auto Sources," which produce a certain number of photons per second. You can buy as many Auto Sources as you want, and at certain milestones you earn different medals. The objective of the game is to collect as many medals as possible and rise to the top of the global Leaderboards. The game also includes an extensive transactions log with all your photon expenditure and a customized profile showcasing all your medals and interesting statistics such as the total number of photons spent. The following trailer was my first ever experience with video editing using Adobe Premiere Pro CC.',
      content: [
        {
          type: "subtitle",
          payload: "Trailer"
        },
        {
          type: "video",
          payload: "https://www.youtube.com/embed/zOJZq3b4pbU"
        }
      ]
    },
    {
      title: "The Key",
      key: "thekey",
      pic: theKeyLogo,
      background: "white",
      summary: "I worked on this iOS and Android app with HSA Dev!",
      description:
        "HSA Dev is the only group of Harvard students that run their own web and mobile app development company. The Key Society is the biggest and longest project at HSA Dev. Founded by Zena Edosomwan (’17) and Christian Juzang (’20), two student-athletes of color at Harvard University, The Key Society aims to create a motivated community of Harvard students committed to making networking accessible, genuine, and simple. Members of The Key Society can swipe left and right to connect with one another and search jobs and events posted by companies looking to recruit members. With custom chats and a personalized connection suggestions algorithm, The Key Society is dedicated to using technology to build the most effective networks. The Key Society is built using React Native for the front-end and Postgress/GraphQL for the back-end.",
      role:
        "I worked mostly on front-end development for both the iOS and Android apps for The Key 2.0. I worked on developing and enhancing registration flow for both apps, handling Resume Upload for the Android application, user data entry verification, responsive design for the Android build, and bug-testing and debugging for the Android build.",
      content: []
    },
    {
      title: "Personal Site",
      key: "personalsite",
      pic: personalSiteLogo,
      background: "transparent",
      summary:
        "This site was not built with a template! In fact, I built it from scratch using React.",
      description:
        "Stemming from my love for Computer Science and desire to share my skills, I decided to develop this site from scratch in order to share my story, my talents, and my skills. This site is built from scratch using React.js, and incorporating multiple areas of modular design.",
      content: []
    },
    {
      title: "Forms4Friends",
      key: "f4f",
      pic: forms4FriendsLogo,
      background: "white",
      summary:
        "I worked on this project as part of Harvard Law School's Justice Hackathon",
      description:
        "Forms4Friends was a project inspired by a group of three Harvard students to better the lives of disenfranchised victims of abuse. It aims to help people find easy and quick access to legal forms, with support in helping them fill out and file those forms. The project was implemented as part of the Harvard Law School Code for Life Hackathon, and was implemented using React.js",
      role:
        "I worked on developing most of the project's front-end base, setting up the core React.js and Routing framework, implementing core logic for form rendering, and other features of responsive design.",
      content: []
    },
    {
      title: "Converge",
      key: "converge",
      pic: convergeLogo,
      background: "transparent",
      summary:
        "I worked on this project as part of Yale's Hackathon YHack 2017",
      description:
        "Converge is a project that aims to help students find meeting points and hang out places in their vicinity. The product uses the Google Maps API to locate points of interest that is almost equidistant from all users and their locations. The product was built using Javascript/jQuery. It was submitted as part of the Yale Hackathon YHack 2017.",
      role:
        "I had an important role in both the front-end and the back-end implementation of this project. I implemented most of the front-end design, and the HTML/CSS involved. Furthermore, I implemented the API calls and the core functional logic of the project in order to query the user for input, parse it, and output the proper areas of interest. I implemented the algorithm used to find the closest point of interest among all the user input locations.",
      content: []
    },
    {
      title: "ToDo List",
      key: "todo",
      pic: toDoListLogo,
      background: "white",
      summary:
        "I created this project as part of an onboarding process for HSA Dev.",
      description:
        "This project is a simple to-do list aimed at organizing tasks and schedules for busy students and businesspeople alike. It was implemented as part of the onboarding process for HSA Dev using React.js and Styled Components.",
      content: []
    }
  ]
};

export const resume = {
  title: "Resume!",
  sectionTitle: "Resume",
  subtitle: "Check out my resume",
  background: "background.tertiary",
  fontColor: "tertiary",
  data: {
    education: [
      {
        title: "Harvard University",
        key: "harvard",
        location: "Cambridge, MA",
        start: "08/2017",
        end: "05/2021",
        description: "A.B., Computer Science with Secondary in Government.",
        relevant:
          "Systems Programming, Abstraction in Computation, Theoretical Computer Science, Multivariable Calculus.",
        gpa: "3.919",
        abroad: {
          description:
            "Harvard Summer School Study Abroad Program in Trento, Italy, doing coursework in Mind, Brain and Behavior.",
          start: "06/2018",
          end: "08/2018"
        }
      },
      {
        title: "Egypt British International School",
        key: "ebis",
        location: "Cairo, Egypt",
        start: "09/2014",
        end: "06/2017",
        description:
          "Top in Country in Computer Science A-Level. Thirteenth national place in the Egyptian qualifications for the International Olympiad for Informatics."
      }
    ],
    tech: {
      programming: [
        "C",
        "C++",
        "PHP",
        "Python",
        "JavaScript/jQuery/Node.js",
        "React.js",
        "React Native",
        "MySQL/PHPMyAdmin",
        "WordPress"
      ],
      os: ["Windows 10/8/7", "Linux", "Mac OS"],
      web: [
        "HTML",
        "CSS",
        "SQL",
        "PHP",
        "JavaScript",
        "jQuery",
        "Node.js",
        "React.js",
        "Postgress",
        "graphQL"
      ]
    },
    leadership: [
      {
        title: "Harvard Student Agencies DEV",
        key: "dev",
        position: "Junior Engineer",
        location: "Cambridge, MA",
        start: "10/2018",
        current: true,
        description: [
          "Work in teams to build web and app products for startups and small projects, using React, React Native, Node.js"
        ]
      },
      {
        title: "Harvard Political Review (Tech Team)",
        key: "hpr",
        position: "Senior Engineer",
        location: "Cambridge, MA",
        start: "04/2018",
        current: true,
        description: [
          "Manage and Develop the Harvard Political Review website www.harvardpolitics.com using WordPress."
        ]
      },
      {
        title: "International Relations Council",
        key: "irc",
        position: "Travelling Member, ICMUN; Director of Cabinet of Syria",
        location: "Cambridge, MA",
        start: "01/2018",
        current: true,
        description: [
          "Compete and represent Harvard in MUN conferences over the US. Outstanding Delegate, Honorable Mention.",
          "Wrote a 70-page background guide on the history and context of the Syrian conflict.",
          "Run a MUN committee for 18 high schoolers in HMUN Conference, attracting 3,300 delegates from 50 countries."
        ]
      },
      {
        title: "Harvard College Palestine Solidarity Committee",
        key: "psc",
        position: "Vice President",
        location: "Cambridge, MA",
        start: "10/2017",
        current: true,
        description: [
          "Plan and organize around 3 speaker events/semester with hundreds of attendees; conduct presentations and teachins 3 times/semester; coordinate with up to 5 other campus groups; manage and delegate tasks; promote events."
        ]
      },
      {
        title: "Harvard College Cybersecurity Club",
        key: "hc3",
        position: "Active Member",
        location: "Cambridge, MA",
        start: "09/2017",
        current: true,
        description: [
          "Conduct and practice weekly exercises in Cybersecurity systems using Linux."
        ]
      },
      {
        title: "TEDxYouth@EBIS",
        key: "tedx",
        position: "Founder and Co-Chairman",
        location: "Cairo, Egypt",
        start: "02/2017",
        end: "08/2017",
        current: false,
        description: [
          "Founded the first TEDx event in high school.",
          "Lead a team of 80 students to organize the event with 11 speakers, 5 performers, and 150 attendees."
        ]
      },
      {
        title: "EducationUSA Competitive College Club Cairo",
        key: "ccc",
        position: "President",
        location: "Cairo, Egypt",
        start: "01/2017",
        end: "08/2017",
        current: false,
        description: [
          "Helped around 50 HS students apply to US colleges; conducted bimonthly group advising sessions, 5 outreaches, 10 speaker events, 6 hrs/wk individualized mentoring to group of 12. 9/12 now studying in US."
        ]
      }
    ],
    skills: {
      languages: [
        {
          name: "Arabic",
          level: "Native"
        },
        {
          name: "English",
          level: "Fluent"
        },
        {
          name: "Italian",
          level: "Intermediate"
        }
      ],
      interests: [
        "Biking",
        "Classical Music",
        "Videogames",
        "Travelling",
        "Guitar"
      ]
    }
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
  },
  page: {
    title: "Contact Me!",
    subtitle: "Let's get in touch...",
    socialIntro: "Or Find Me on Social Media:",
    background: "background.primary",
    fontColor: "secondary"
  }
};
