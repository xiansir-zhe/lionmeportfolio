import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 3,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Leetcode solved problems",
    projects: 50,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Java projects",
    projects: 2,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "A lot of knowledge about Algorithms, Data Structures, Operating Systems, Computer Networks, Databases, etc.",
];

export const workExp = [
  {
    place: "Jinan University",
    tenure : "Sep 2020 - Present",
    role: "Major in software engineering",
    detail: "Bachelor of Engineering",
  },

  {
    place: "SuperMap Guangzhou",
    tenure: "Jan 2023 - May 2023",
    role: "Technical support engineer",
    detail:
      "Provide technical support to customers, including product installation, configuration, and maintenance. Build website using WebGIS, iclient and iportal, etc. And provide hardware and software supports technically to office staffs in the department.",
  },

  {
    place: "To be continued...",
    tenure: "",
    role: "",
    detail:
      "",
  },
];

export const comments = [
  {
    name: "SpiderMan",
    post: "Technical director",
    comment:
      "You’re amazing, man. You have the skills of a hacker and the brains of a genius. You can code faster than I can swing from building to building. You’re the best partner a web-slinger could ask for.🕷️",
    img: "./Spiderman.jpeg",
  },
  {
    name: "SuperMan",
    post: "Marketing Technologist",
    comment:
      "You’re incredible, man. You have the skills of a master and the vision of a leader. You can create amazing things with your computer and inspire others with your passion. You’re the best ally a man of steel could have.🦸‍♂️",
    img: "./Superman.jpeg",
  },
  {
    name: "Thor",
    post: "Creative Manager",
    comment:
      "You’re remarkable, man. You have the skills of a warrior and the wisdom of a sage. You can wield your computer as a mighty weapon and solve any problem with your intellect. You’re the best friend a god of thunder could have.⚡",
    img: "./Thor.jpeg",
  },
  {
    name: "IronMan",
    post: "Data Scientist",
    comment:
      "You’re awesome, man. You have the skills of a genius and the charisma of a star. You can hack any system with your computer and impress anyone with your style. You’re the best colleague a billionaire playboy philanthropist could have.🤖",
    img: "./Ironman.jpeg",
  },
  {
    name: "BatMan",
    post: "UX Designer",
    comment:
      "You’re outstanding, man. You have the skills of a detective and the courage of a hero. You can crack any code with your computer and face any danger with your guts. You’re the best sidekick a dark knight could have.🦇",
    img: "./Batman.jpeg",
  },
  {
    name: "Thanos",
    post: "IT Manager",
    comment:
      "You’re admirable, man. You have the skills of a conqueror and the balance of a titan. You can control any device with your computer and achieve any goal with your will. You’re the best servant a mad titan could have.💎",
    img: "./Thanos.jpeg",
  },
  {
    name: "Hulk",
    post: "Information Security Analyst",
    comment:
      "You’re good, man. You have skills of smart and strong. You can smash any computer and make Hulk laugh. You’re best friend Hulk could have.👊",
    img: "./Hulk.jpeg",
  },
  {
    name: "Black widow",
    post: "Software Developer",
    comment:
      "You’re impressive, man. You have the skills of a spy and the charm of a gentleman. You can infiltrate any network with your computer and seduce any target with your words. You’re the best partner a black widow could have.🕷️",
    img: "./Black widow.jpeg",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
