const exp: Exprience[] = [
  {
    title: "Acumensa Technologies",
    description:
      "Primarily involved in Backend Developer role for B2C Mobile & Web solution for Health Care domain. The project requires design & development of complex backend services in TypeScript , ExpressJS, Node Js, using MySQL database and frontend UI design using TypeScript and React.  Designed and Implemented CRUD Apis, Data models and AWS service integrations for the backend server. Incorporated features such as payment gateways, and authentication systems with help of third party services. Integrated and implemented a end-to-end Booking System removing external integration and thus achiving a exponential click rates on the application feature.",
    links: [
      {
        type: "website",
        link: "https://main--monumental-gnome-c88b94.netlify.app/",
      },
    ],
    image: "/images/blog/acumensa.jpeg",
    tags: [
      "Next.js",
      "ReactJS",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "MySQL",
      "Sequalize",
      "Mongoose",
    ],
  },
  {
    title: "ServOn",
    description:
      "Worked as a Full stack developer, primarily focused on developing website front-end using Next.js, TypeScript and Tailwind CSS. Integerated APIs on the webapp to provide a seamless integration and smooth communication between backend and frontend. Implemented Redux toolkit and Recoil libraries for state management.",
    links: [
      {
        type: "website",
        link: "https://main--monumental-gnome-c88b94.netlify.app/",
      },
    ],
    image: "/images/blog/acumensa.jpeg",
    tags: [
      "ReactJs",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Mongoose",
    ],
  },
];

export interface Exprience {
  title: string;
  description: string;
  links: {
    type: "youtube" | "github" | "website" | "behance" | "link" | "figma";
    link: string;
  }[];
  image: string;
  tags: string[];
}

export default exp;
