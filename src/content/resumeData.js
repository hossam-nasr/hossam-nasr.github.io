import { aalumUrl, theKeyUrl } from "./urls";

const resumeData = {
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
          "Data Structures and Algorithms, Intro to Quantum Computing, Systems Programming, Abstraction in Computation, Theoretical Computer Science, Multivariable Calculus.",
        gpa: "3.844",
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
          "4 A-levels (Computer Science, Physics, Maths, Arabic) all A*. 2 AS-levels (Chemistry, Biology) both A. 8 IGCSEs all A*",
        other: [
          {
            content:
              "Top in Country in Computer Science A-Level (June 2017). Top in Region in Biology IGCSE (June 2015). Thirteenth national place in the Egyptian qualifications for the International Olympiad for Informatics"
          }
        ]
      }
    ],
    tech: {
      programming: [
        "C",
        "C++",
        "Python",
        "JavaScript/jQuery/Node.js",
        "PHP",
        "React.js",
        "React Native",
        "GraphQL/MySQL/PHPMyAdmin",
        "WordPress"
      ],
      os: ["Windows 10/8/7", "Linux (Ubuntu)", "Mac OS"],
      web: [
        "React/React Native",
        "React Redux",
        "Node.js",
        "PostgreSQL",
        "GraphQL",
        "HTML",
        "CSS",
        "SQL",
        "PHP",
        "JavaScript",
        "jQuery"
      ]
    },
    experience: [
      {
        title: "Choco Communications GmbH",
        key: "choco",
        position: "Growth Development Intern",
        location: "Berlin, Germany",
        start: "06/2019",
        current: true,
        description: [
          "Implemented the currently used demo of the app on the company website (at <a href='http://demo.choco.com' target='_blank'>demo.choco.com</a>), including integration with Zendesk Web SDK, using React and React Redux ",
          "Work with a team of 3 to develop an Android and iOS driver app (codename Optimus Prime) to help suppliers navigate deliveries, using React Native and Google Maps API."
        ]
      },
      {
        title: "Harvard Student Agencies DEV",
        key: "dev",
        position: "Software Engineer",
        location: "Cambridge, MA",
        start: "10/2018",
        current: true,
        description: [
          `Worked on teams of 4-7 people developing 2 iOS and Android mobile applications: <a href="${theKeyUrl}" target="_blank">The Key Society</a> and <a href=${aalumUrl} target="_blank">AAlum</a>, using React Native, Redux, GraphQL, PostreSQL`,
          "Implemented core front-end features in registration flow, data input and validation, unit-testing and debugging",
          "Worked on developing company-wide norms for unit-testing components and GraphQL queries and mutations"
        ]
      }
    ],
    leadership: [
      {
        title: "Harvard Digital Literacy Project",
        key: "dlp",
        position: "Volunteer",
        location: "Cambridge, MA",
        start: "09/2018",
        current: false,
        end: "12/2018",
        description: [
          "Taught 1hr/week class to teach basic CS principles to underprivileged middle school students, starting from Scratch up to Processing.js"
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
          "Conduct and practice weekly exercises in Cybersecurity systems using Linux"
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
          "Manage and Develop the Harvard Political Review website <a href='http://harvardpolitics.com' target='href'>harvardpolitics.com</a> using WordPress"
        ]
      },
      {
        title: "International Relations Council",
        key: "irc",
        position:
          "Travelling Member, ICMUN; Director of Cabinet of Syria, HMUN",
        location: "Cambridge, MA",
        start: "01/2018",
        current: true,
        description: [
          "Compete and represent Harvard in MUN conferences over the US. Won Outstanding Delegate in ChoMUN 2018, Honorable Mention in SCSY 2019",
          "Wrote a 70-page background guide on the history and context of the Syrian conflict",
          "Ran a MUN committee for 18 high schoolers in the 65th Harvard MUN Conference, attracting 3,300 delegates from 50 countries"
        ]
      },
      {
        title: "Harvard College Palestine Solidarity Committee",
        key: "psc",
        position: "Co-President",
        location: "Cambridge, MA",
        start: "10/2017",
        current: true,
        description: [
          "Plan and organize around 5 events/semester with hundreds of attendees, including keynote speakers, presentations, social and cultural events",
          "Conduct presentations and teach-ins 5 times/semester; coordinate with up to 5 other campus groups; manage and delegate tasks; promote events",
          "Organized a week-long series of events featuring multiple prominent speakers such as Cornel West and Marc Lamont Hill and a week-long public art display"
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
          "Lead a team of 80 students to organize the event with 11 speakers, 5 performers, and 150 attendees"
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
          "Helped around 50 promising high school students apply to competitive US colleges",
          "Conducted bimonthly intesive group advising sessions, ~5 outreaches, and organized ~10 speaker events",
          "Gave ~6 hrs/wk individualized mentoring to group of 12. 9/12 are now studying in the US"
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
        },
        {
          name: "German",
          level: "Beginner"
        }
      ],
      interests: [
        "Biking",
        "Instrumenal Music (e.g. Ludovico Einaudi, Max Richter)",
        "Videogames (favorites: GTA V, Civilization V)",
        "Travelling",
        "Guitar"
      ]
    }
  }
};

export default resumeData;
