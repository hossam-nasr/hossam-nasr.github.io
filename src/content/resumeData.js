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
          "Systems Programming, Abstraction in Computation, Theoretical Computer Science, Multivariable Calculus.",
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
        "PostgreSQL",
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

export default resumeData;
