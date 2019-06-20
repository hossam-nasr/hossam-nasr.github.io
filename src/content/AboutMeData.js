import DevLogo from "../images/devlogo.png";
import TEDxISEE from "../images/TEDxISEE.jpg";
import TEDxEBIS from "../images/TEDxEBIS.png";
import theKeyLogo from "../images/thekeylogo.png";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

const devUrl = "https://www.hsadev.com";
const theKeyUrl = "https://www.hsadev.com/portfolio/thekeysociety";

const biography =
  "I was born in Mansoura, Egypt, to a middle class Egyptian family. I grew up and lived most of my life there. I discovered my passion for Computer Science at a very young age, and have been coding ever since! When I was 10, I also got to witness one of the most influencial moments of my life: the January 25th, 2011 Revolution during the Arab Spring. It sparked within me a dream: to make a change; to leave the world a better place. I left Mansoura and moved to Cairo to pursue British high school education. During high school, I was set on continuing university education abroad. I did Model UN, was a Teaching Assistant for IGCSE ICT, and became the president of the EducationUSA Competitive College Club. On March 30th, 2017, my three-year-old dream came true when I received my acceptance letter to join the Harvard class of 2021. It has only made my dreams and ambitions grow stronger and bigger ever since.";


const AboutMeData = {
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
            alt: "Dev Logo",
            url: devUrl
          },
          {
            type: "text",
            payload:
              'Founded in 2017, HSA Dev is the only group of Harvard students that run their own web and mobile app development company! We are "A group of pioneers, computer freaks, and eclectic creatives united by the shared excitement of the unknown and driven by unstoppable curiosity." HSA Dev is a non-profit firm that gathers some of the best engineers (font-end and back-end), designers (UX/UI and graphic) and creatives that Harvard has to offer.'
          },
          {
            type: "button",
            payload: "More about HSA Dev!",
            href: devUrl,
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
            alt: "The Key Logo",
            url: theKeyUrl
          },
          {
            type: "text",
            payload:
              "I joined HSA Dev in October 2018 as a Software Engineer. I work as both front-end and back-end Engineer, focusing mostly on front-end. With HSA Dev, I work on both the iOS and Andoird apps for The Key Society, HSA Dev's most ambitious project yet. The Key Society is a start-up founded by two Harvard students, aimed at creating a motivated community of Harvard students committed to making networking accessible, genuine, and simple. On the Key, I worked on registration flow, data validation, responsive design, as well as bug-testing and debugging for both the iOS and Android versions of The Key Society 2.0."
          },
          {
            type: "button",
            payload: "More About The Key",
            href: theKeyUrl,
            primary: "tertiary",
            target: "_blank",
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
            alt: "TEDxYouth@ISEE logo",
            url: "https://www.ted.com/tedx/events/20979"
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
            alt: "TEDxYouth@EBIS logo",
            url: "https://www.ted.com/tedx/events/22858"
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
                icon: faYoutube,
                target: "_blank"
              },
              {
                type: "link",
                payload: "Check out our Facebook Page!",
                url: "https://www.facebook.com/TEDxYouthEBIS/",
                icon: faFacebookF,
                target: "_blank"
              }
            ]
          }
        ]
      }
    ]
  }
};

export default AboutMeData;
