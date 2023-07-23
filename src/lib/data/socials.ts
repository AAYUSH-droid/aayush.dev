import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedin,
  FaRedditAlien,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Polywork from "~/components/Polywork";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";
import {
  EmailShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const socials: Social[] = [
  {
    color: "black",
    icon: FaGithub,
    text: "GitHub",
    link: "https://github.com/AAYUSH-droid",
  },
  // {
  //   color: 'sky',
  //   icon: FaTwitter,
  //   text: 'Twitter',
  //   link: '',
  // },
  // {
  //   color: 'pink',
  //   icon: FaInstagram,
  //   text: 'Instagram',
  //   link: '',
  // },
  // {
  //   color: 'indigo',
  //   icon: Polywork,
  //   text: 'Polywork',
  //   link: '',
  // },
  {
    color: "dark-blue",
    icon: FaLinkedinIn,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/aayush-sharma-5239321b8/",
  },
  // {
  //   color: 'blue',
  //   icon: FaBehance,
  //   text: 'Behance',
  //   link: '',
  // },
  // {
  //   color: 'sky',
  //   icon: FaTelegramPlane,
  //   text: 'Telegram',
  //   link: '',
  // },
  {
    color: "teal",
    icon: FaEnvelope,
    text: "Gmail",
    link: "mailto:sharma31aayush@gmail.com",
  },
];

export const shareSocials: ShareSocial[] = [
  {
    name: "Twitter",
    icon: FaTwitter,
    shareComponent: TwitterShareButton,
    color: "sky",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    shareComponent: LinkedinShareButton,
    color: "dark-blue",
  },
  {
    name: "Reddit",
    icon: FaRedditAlien,
    shareComponent: RedditShareButton,
    color: "orange",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    shareComponent: WhatsappShareButton,
    color: "green",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    shareComponent: TelegramShareButton,
    color: "sky",
  },
  {
    name: "Facebook",
    icon: FaFacebookSquare,
    shareComponent: FacebookShareButton,
    color: "dark-blue",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    shareComponent: EmailShareButton,
    color: "teal",
  },
];

export interface Social {
  color: string;
  text: string;
  icon: IconType | (({ dimensions }: any) => ReactElement);
  link: string;
}

export interface ShareSocial {
  name: string;
  icon: IconType;
  shareComponent: any;
  color: string;
}

export default socials;
