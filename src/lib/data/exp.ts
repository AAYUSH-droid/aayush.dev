const exp: Exprience[] = [
  {
    title: "Acumensa Technologies",
    description:
      "Primarily involved in Backend Developer role for B2C Mobile & Web solution for Health Care domain. The project requires design & development of complex backend services in TypeScript , ExpressJS, Node Js, using MySQL database and frontend UI design using TypeScript and React.",
    links: [
      {
        type: "website",
        link: "https://main--monumental-gnome-c88b94.netlify.app/",
      },
    ],
    image: "/images/blog/acumensa.jpeg",
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
    title: "ServOn",
    description:
      "Worked as a Full stack developer,primarily focused on developing website front-end using Next.js, TypeScript and Tailwind CSS.",
    links: [
      {
        type: "website",
        link: "https://main--monumental-gnome-c88b94.netlify.app/",
      },
    ],
    image: "/images/blog/acumensa.jpeg",
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
