import lightSourceLogo from "../images/lightsourcelogo.png";
import theKeyLogo from "../images/thekeylogo.png";
import personalSiteLogo from "../images/logo.png";
import forms4FriendsLogo from "../images/Forms4FriendsLogo.png";
import convergeLogo from "../images/convergelogo.png";
import toDoListLogo from "../images/todolistlogo.png";
import aalumLogo from "../images/aalumlogo.png";
const moment = require("moment");

const projectsData = {
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
      title: "AAlum",
      pageBackground: "aalumWhite",
      fontColor: "aalumPink",
      significance: 50,
      contribution: 30,
      start: moment("01022019", "DDMMYYYY"),
      end: moment("30042019", "DDMMYYYY"),
      key: "aalum",
      pic: aalumLogo,
      background: "white",
      url: "",
      summary: "I had substantial contribution to this iOS and Android app!",
      description:
        "AAlum is a start-up with a college-oriented dating app. AAlum has a similar interface to Tinder, where users swipe right on those they see as a match and left on those they don't. AAlum is different, however, because it is directed specifically towards college students and alumni, and a college email is required to sign-up. AAlum also has substantially more features, such as more detailed preferences, filtraion, and customization options, getting notified of a potential match, searching for specific users, and even recommending a match to a friend or colleague.",
      role:
        "While working with HSA Dev, I gained substantial front-end and mobile development experience, by having substantial contribution to two React-Native apps. I also gained significant experience in working in a large team setting, using AGILE development models, Zenhub management plugin, and front-end unit-testing frameworks. One of those two apps was AAlum.",
      content: [
        {
          type: "text",
          payload:
            "I was a key Software Engineer in the front-end development team working on AAlum from the start, and I had a substantial role in developing the app. I worked on developing multiple key components and screens in registration flow, user profiles, and the user filtration process, as well as features such as blocking, reporting and chatting. I also developed standardized practices for enum mappings and front-end unit testing."
        },
        {
          type: "text",
          payload:
            "The app was developed using React-Native for the front-end and GraphQL for the back-end, and managed using AGILE development methods. The project was ultimately discontinued from HSA Dev, and is currently under development by another company."
        },
        {
          type: "button",
          payload: "More about HSA Dev!",
          href: "https://www.hsadev.com/",
          target: "_blank"
        }
      ]
    },
    {
      title: "LightSource",
      pageBackground: "lightsourceBlue",
      fontColor: "lightsourceWhite",
      significance: 40,
      contribution: 100,
      start: moment("15042016", "DDMMYYYY"),
      end: moment("15012017", "DDMMYYYY"),
      key: "lightsource",
      pic: lightSourceLogo,
      background: "black",
      url: "http://lightsource.ga",
      github: "https://github.com/hossam-nasr/lightsource",
      summary: "I developed this infinite clicker game from scratch!",
      description:
        'LightSource was my first ever project, a first dive into web development. LightSource is a game I created from scratch using JavaScript, PHP, HTML, CSS, and SQL. It is an "infinite clicker" game with one simple premise: click on your LightSource to produce photons. You start with a tiny Electromagnetic Field which produces only one photon per click. As you keep clicking, you can collect enough photons to buy better LightSources with more photons per click. You can choose from 13 different LightSources ranging from a candle, to a street lamp, to a Lightsaber, even to the Sun. Buying a certain LightSource also unlocks the ability to buy its "Auto Sources," which produce a certain number of photons per second. You can buy as many Auto Sources as you want, and at certain milestones you earn different medals. The objective of the game is to collect as many medals as possible and rise to the top of the global Leaderboards. The game also includes an extensive transactions log with all your photon expenditure and a customized profile showcasing all your medals and interesting statistics such as the total number of photons spent. The following trailer was my first ever experience with video editing using Adobe Premiere Pro CC.',
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
      significance: 35,
      contribution: 10,
      start: moment("01112018", "DDMMYYYY"),
      end: moment("15122018", "DDMMYYYY"),
      key: "thekey",
      pic: theKeyLogo,
      background: "white",
      summary: "I worked on this iOS and Android app with HSA Dev!",
      description:
        "HSA Dev is the only group of Harvard students that run their own web and mobile app development company. The Key Society is the biggest and most ambitious project at HSA Dev. Founded by Zena Edosomwan (’17) and Christian Juzang (’20), two student-athletes of color at Harvard University, The Key Society aims to create a motivated community of Harvard students committed to making networking accessible, genuine, and simple. Members of The Key Society can swipe left and right to connect with one another and search jobs and events posted by companies looking to recruit members. With custom chats and a personalized connection suggestions algorithm, The Key Society is dedicated to using technology to build the most effective networks. The Key Society app is built using React Native for the front-end and PostgreSQL/GraphQL for the back-end.",
      role:
        "I worked mostly on front-end development for both the iOS and Android apps for The Key 2.0. I worked on developing and enhancing registration flow for both apps, handling Resume Upload for the Android application, user data entry verification, responsive design for the Android build, and bug-testing and debugging for the Android build.",
      content: [
        {
          type: "array",
          justifyContent: "center",
          payload: [
            {
              type: "button",
              payload: "More about HSA Dev!",
              href: "https://www.hsadev.com/",
              target: "_blank"
            },
            {
              type: "button",
              payload: "More About The Key",
              href: "https://www.hsadev.com/portfolio/thekeysociety",
              target: "_blank"
            }
          ]
        }
      ]
    },
    {
      title: "Personal Site",
      pageBackground: "black",
      fontColor: "white",
      contribution: 100,
      significance: 30,
      start: moment("21122018", "DDMMYYYY"),
      end: moment("09012019", "DDMMYYYY"),
      key: "personalsite",
      pic: personalSiteLogo,
      background: "transparent",
      github: "https://github.com/hossam-nasr/hossam-nasr.github.io",
      summary: "I built this site using React!",
      description:
        "This personal website here (hossammabed.com) was not done using a template! In fact, I built it from scratch using React.js and hosted it on GitHub Pages. Stemming from my passion for Computer Science and desire to share my skills, I decided to opt not to use a standard template, but instead to customly design and create my own personal project, not only to customize my site and make it my own, but also give an example of my front-end experience. I decided to use this site to share my story, my talents, and my skills. This site is fully responsive! Try minimizing the screen or viewing it on a mobile device. It looks great on all sreen sizes!",
      content: [
        {
          type: "subtitle",
          payload: "GitHub!"
        },
        {
          type: "text",
          payload:
            "This site was developed from the start using a GitHub repo and hosted using GitHub Pages. Feel free to check it out below! Due to the way GitHub Pages works, the 'master' branch contains the compiled version of the site, while the React source code lives on the 'react' branch."
        }
      ]
    },
    {
      title: "Forms4Friends",
      start: moment("10112018", "DDMMYYYY"),
      end: moment("10112018", "DDMMYYYY"),
      significance: 3,
      contribution: 70,
      key: "f4f",
      pic: forms4FriendsLogo,
      background: "white",
      github: "https://github.com/caryaristotle/forms4friends",
      summary:
        "I worked on this project as part of Harvard Law School's Justice Hackathon",
      description:
        "Forms4Friends was a project inspired by a group of three Harvard students to better the lives of disenfranchised victims of abuse. It aims to help people find easy and quick access to legal forms, with support in helping them fill out and file those forms. The project was implemented as part of the Harvard Law School's Justice Hackathon, aimed at creating new and creative solutions using technology to improve access to legal services and justice overall. The project was implemented using React.",
      role:
        "I worked on developing most of the project's front-end base, setting up the core React.js and Routing framework, implementing core logic for form rendering, and features of responsive design.",
      content: []
    },
    {
      title: "Converge",
      significance: 2,
      contribution: 30,
      start: moment("02122017", "DDMMYYYY"),
      end: moment("04122017", "DDMMYYYY"),
      key: "converge",
      pic: convergeLogo,
      background: "transparent",
      github: "https://github.com/KevinTXY/Converge",
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
      contribution: 100,
      significance: 1,
      start: moment("01112018", "DDMMYYYY"),
      end: moment("02112018", "DDMMYYYY"),
      key: "todo",
      pic: toDoListLogo,
      background: "white",
      github: "https://github.com/jbperry004/onboardingFall18",
      summary:
        "I created this project as part of an onboarding process for HSA Dev.",
      description:
        "This project was a simple to-do list aimed at organizing tasks and schedules for busy students and businesspeople alike. It was implemented as part of my onboarding process for HSA Dev. It used React.js and Styled Components.",
      content: []
    }
  ]
};

export default projectsData;
