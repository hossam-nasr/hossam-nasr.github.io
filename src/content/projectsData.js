import lightSourceLogo from "../images/lightsourcelogo.png";
import theKeyLogo from "../images/thekeylogo.png";
import personalSiteLogo from "../images/logo.png";
import forms4FriendsLogo from "../images/Forms4FriendsLogo.png";
import convergeLogo from "../images/convergelogo.png";
import toDoListLogo from "../images/todolistlogo.png";
import aalumLogo from "../images/aalumlogo.png";
import hummusTrainLogo from "../images/hummus_train_logo.png";
import hummusTrain from "../images/hummus_train.png";
import cs124Logo from "../images/cs124.wtf.jpg";
import deepFriedJelani from "../images/jelani-deep-fried.jpg";
import { devUrl, theKeyUrl } from "./urls";
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
        "AAlum is a start-up with a college-oriented dating app. AAlum has a similar interface to Tinder, where users swipe right on those they see as a match and left on those they don't. AAlum is different, however, because it is directed specifically towards college students and alumni, and a college email is required to sign-up. AAlum also has substantially more features, such as more detailed preferences, filtration, and customization options, getting notified of a potential match, searching for specific users, and even recommending a match to a friend or colleague.",
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
          href: devUrl,
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
              href: devUrl,
              target: "_blank"
            },
            {
              type: "button",
              payload: "More About The Key",
              href: theKeyUrl,
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
      significance: 4,
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
      significance: 3,
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
    },
    {
      title: "Hummus Train",
      pageBackground: "hummus",
      fontColor: "hummusGray",
      significance: 20,
      contribution: 100,
      start: moment("01082019", "DDMMYYYY"),
      end: moment("17082019", "DDMMYYYY"),
      key: "hummustrain",
      pic: hummusTrainLogo,
      background: "white",
      url: "https://hummustra.in",
      github: "https://github.com/hossam-nasr/hummustrain",
      summary: "ALL ABOARD THE HUMMUS TRAIN!",
      description: "Choo Choo! All aboard the Hummus Train!",
      content: [
        {
          type: "subtitle",
          payload: "A random start"
        },
        {
          type: "text",
          payload: [
            `Hummus Train might be the most random in-depth project I ever worked on. It all started when I was interning with Choco during Summer 2019. The company had just started a tradition of 'Hummus Thursday' - to go out during lunch and eat Hummus every Thursday. Hummus Thursday included such wonderdul moments as one of the Android developers giving the timeless quote: "This is what Hummus Thursday is all about... eating Hummus." On one of the Hummus Thursdays, a friend at the company, who had a passion for collecting funny/useful domain names, noted that the convenient domain name `,
            {
              url: "https://hummustra.in",
              payload: "hummustra.in"
            },
            ` was not only available, but really cheap. So, we split the cost and bought the domain name together, not sure what we were going to do with it. I quickly put up a simple site with just a background image and text reading 'ALL ABOARD THE HUMMUS TRAIN,' then hosted it on GitHub Pages. That weekend, a spark of inspiration hit me while I was in the shower, then I spent the next couple of weeks working on it...`
          ]
        },
        {
          type: "subtitle",
          payload: "So what is Hummus Train?"
        },
        {
          type: "pic",
          payload: hummusTrain,
          alt: "Hummus Train",
          url: "https://hummustra.in"
        },
        {
          type: "text",
          payload: [
            `Right now, Hummus Train displays a train with many colorful carts on it. Users can at any point 'board the train,' choosing what name to display, a custom color for their cart, and uploading an image that they can crop to exactly fit their face. When they submit, a new cart is added with a stickman on top displaying the user's uploaded cropped image. There is a always a countdown for the next Hummus Train leaving. Every Thursday, the background and title change, displaying confetti and congratulating users on the arrival of Hummus Thursday! Furthermore, at exactly 1:15 PM Berlin time every Thursday (the original time of Hummus Thursday), with one minute left on the clock for the deparure of the train, the timer covers up the whole screen, counting down the last few seconds. Then, the Hummus Train leaves the website, the database is cleared, the timer is reset, and a new empty Hummus Train is ready to receive new passengers!`
          ]
        },
        {
          type: "subtitle",
          payload: "How is this built?"
        },
        {
          type: "text",
          payload: [
            "Hummus Train was built using ",
            {
              url: "https://reactjs.org/",
              payload: "React.js"
            },
            " and bootstrapped using ",
            {
              url: "https://github.com/facebook/create-react-app",
              payload: "Create React App"
            },
            ". The database is handled using ",
            {
              url: "https://firebase.google.com/docs/firestore",
              payload: "Firebase Firestore"
            },
            " and ",
            {
              url: "https://firebase.google.com/docs/storage",
              payload: "Firebase Storage"
            },
            ", which stores all the user-uploaded images. The website uses different React libraries as well, such as ",
            {
              url: "https://casesandberg.github.io/react-color/",
              payload: "React Color"
            },
            " for the color pickers, ",
            {
              url: "https://www.npmjs.com/package/react-avatar-editor",
              payload: "React Avatar Editor"
            },
            " for handling the cropping of images, and ",
            {
              url: "https://reactcommunity.org/react-transition-group/",
              payload: "React Transition Group"
            },
            " for animations. The weekly update function which departs the train and clears the database is handled by a Cloud Function through ",
            {
              url: "https://firebase.google.com/docs/functions",
              payload: "Firebase Cloud Functions"
            },
            ". The website is hosted at ",
            {
              url: "https://hummustra.in",
              payload: "hummustra.in"
            },
            " through ",
            {
              url: "https://pages.github.com/",
              payload: "GitHub Pages"
            },
            ", and the domain is acquired through ",
            {
              url: "https://www.namecheap.com/",
              payload: "namecheap"
            },
            ". Check out the website or the GitHub repo below! Issues and pull requests are welcome."
          ]
        }
      ]
    },
    {
      title: "cs124.wtf",
      pageBackground: "primary",
      fontColor: "tertiary",
      contribution: 100,
      significance: 2,
      start: moment("05082019", "DDMMYYYY"),
      end: moment("05082019", "DDMMYYYY"),
      key: "cs124.wtf",
      pic: cs124Logo,
      background: "transparent",
      github: "https://github.com/hossam-nasr/cs124.wtf",
      url: "https://cs124.wtf",
      summary: "CS124.wtf",
      description: [
        {
          url: "https://cs124.wtf",
          payload: "cs124.wtf"
        },
        ` might be the simplest, stupidst "project" I ever worked on. It happened when a friend and I were browsing through domain names. We were skimming through all these different domain endings, wondering how many of them people bothered to buy. One of these unique domain endings that we discovered was ".wtf," and to our surprise, it was really cheap to purchase domain names for it. I ended up choosing to buy the domain name "cs124.wtf," for the notoriously difficult Harvard Computer Science class, `,
        {
          url: "http://sites.fas.harvard.edu/~cs124/cs124/syllabus.html",
          payload: "CS124: Data Structures and Algorithms"
        },
        `. I then set up a very simple React app for it. The app featured a meme that spead at Harvard of Professor Jelani Nelson, who used to teach CS124, while writing on the board a function called 'f', which takes two arguments 'u' and 'k', conveniently resulting in 'f(u,k)'`
      ],
      content: [
        {
          type: "pic",
          payload: deepFriedJelani,
          alt: "Deep Fried Jelani Nelson meme",
          url: "https://cs124.wtf"
        },
        {
          type: "text",
          payload: [
            "I then posted it on the ",
            {
              url: "https://web.facebook.com/groups/1253567138064928/",
              payload: "Harvard meme group"
            },
            ". And that's it. That's the project. Check it out below!"
          ]
        }
      ]
    }
  ]
};

export default projectsData;
