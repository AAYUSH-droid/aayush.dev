const projects: Project[] = [
  {
    title: "Buymate",
    description:
      "A secure e-commerce platform developed that comes with personalized profiles and dashboards, order placing, order status, authentication, displaying prodcuts, filters, etc.",
    links: [
      {
        type: "youtube",
        link: "https://www.youtube.com/watch?v=y1L-zRZlLM8&ab_channel=aayushsharma",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/BuyMate",
      },
      // {
      //   type: "youtube",
      //   link: "https://youtu.be/qoQxXQ06DRE",
      // },
    ],
    image: "/images/projects/buymate.png",
    tags: [
      "Next.js",
      "React",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "CarrerSpot Jobio",
    description:
      "A full stack MERN web application to track your job applications built with Modern UI for a better user experience.",
    links: [
      {
        type: "website",
        link: "https://main--monumental-gnome-c88b94.netlify.app/",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/CareerSpot",
      },
    ],
    image: "/images/projects/carrerspot.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "ExpressJS",
    ],
  },
  {
    title: "Community Management API",
    description:
      "A SaaS Platform that enables user to make their communities and add members to it. Each user, can create a community and gets assigned the Community Admin role. They can add other users to the community who get assigned the Community Member role.",
    links: [
      {
        type: "website",
        link: "https://www.postman.com/martian-capsule-474179/workspace/my-projects/collection/24748920-6ab3444d-f467-430b-b86a-a120eedcb204",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/Community-Management-API",
      },
    ],
    image: "/images/projects/commAPI.png",
    tags: [
      "TypeScript",
      "Sequalize ORM",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "React Meetups",
    description:
      "A meetup app made with ReactJs and firebase. Choose the place, Add to favorites, visit!",
    links: [
      {
        type: "website",
        link: "",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/Meetups-app",
      },
    ],
    image: "/images/projects/reactmeetup.png",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "TailwindCSS"],
  },
  {
    title: "Wallet Watch",
    description:
      "A Expense Tracker application built with React to manage daily expenses.",
    links: [
      {
        type: "website",
        link: "https://expenseetracker-reactjs.netlify.app/",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/Wallet-Watch",
      },
    ],
    image: "/images/projects/expenseApp.png",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Bankist",
    description:
      "A bank app with real world features to manage your money.It has dummy bank account data with features which allows to transfer, receive money. It also enables you to close your bank account.",
    links: [
      {
        type: "website",
        link: "https://bankistapp-jshtmlcss.netlify.app/",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/Bankist-App",
      },
    ],
    image: "/images/projects/bankist.png",
    tags: ["Html", "CSS", "JavaScript"],
  },
  {
    title: "Guess the Number",
    description: "Guess the correct number and take a highscore!!",
    links: [
      {
        type: "website",
        link: "https://guess-the-number-game-git-main-aayush-droid.vercel.app/",
      },
      {
        type: "github",
        link: "https://github.com/AAYUSH-droid/Guess-the-number-Game",
      },
    ],
    image: "/images/projects/noGame.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   title: "IIITD Playbook",
  //   description:
  //     "IIITD Playbook provides multiple strategies, experiences, and stories to guide the current students of IIIT Delhi.",
  //   links: [
  //     {
  //       type: "website",
  //       link: "https://iiitdplaybook.web.app",
  //     },
  //     {
  //       type: "github",
  //       link: "https://github.com/iiitdplaybook/iiitdplaybook",
  //     },
  //   ],
  //   image: "/images/projects/playbook.png",
  //   tags: ["React", "CSS", "Material UI", "Google Firebase"],
  // },
  // {
  //   title: "Color Switch",
  //   description:
  //     "A clone of the popular mobile game Color Switch for desktop built using object-oriented and event-driven programming.",
  //   links: [
  //     {
  //       type: "github",
  //       link: "https://github.com/ananyalohani/color-switch-java",
  //     },
  //   ],
  //   image: "/images/projects/color-switch.png",
  //   tags: ["Java", "JavaFX", "FXML", "CSS", "Gradle"],
  // },
  // {
  //   title: "lohanish",
  //   description:
  //     "A Unix shell coded in C, consisting of 10 commands with 2 options each and accepting all possible arguments.",
  //   links: [
  //     {
  //       type: "github",
  //       link: "https://github.com/ananyalohani/lohanish",
  //     },
  //   ],
  //   image: "/images/projects/lohanish.png",
  //   tags: ["C", "Linux", "Unix"],
  // },
  // {
  //   title: "Perceptris",
  //   description:
  //     "A multiplayer, gesture-controlled version of the game Tetris using ultrasonic, touch and piezoelectric sensors.",
  //   links: [
  //     {
  //       type: "github",
  //       link: "https://github.com/ananyalohani/Perceptris",
  //     },
  //     {
  //       type: "youtube",
  //       link: "https://youtu.be/RkxJqoUfYXY",
  //     },
  //   ],
  //   image: "/images/projects/perceptris.png",
  //   tags: ["Arduino", "Processing", "C++", "Rapid Prototyping"],
  // },
];

export interface Project {
  title: string;
  description: string;
  links: {
    type: "youtube" | "github" | "website" | "behance" | "link" | "figma";
    link: string;
  }[];
  image: string;
  tags: string[];
}

export default projects;
