import antenna from "../../public/svg/antenna.svg?url";
import clock from "../../public/svg/clock.svg?url";
import diagram from "../../public/svg/diagram.svg?url";
import astronaut from "../../public/svg/astronaut.svg?url";
import teamIgorMob from "../../public/team-photo/igor-mobile.jpg";
import teamIgorTab from "../../public/team-photo/igor-tablet.jpg";
import teamIgorDesk from "../../public/team-photo/igor-desktop.jpg";
import teamOlgaMob from "../../public/team-photo/olga-mobile.jpg";
import teamOlgaTab from "../../public/team-photo/olga-tablet.jpg";
import teamOlgaDesk from "../../public/team-photo/olga-desktop.jpg";
import teamMukolaMob from "../../public/team-photo/mukola-mobile.jpg";
import teamMukolaTab from "../../public/team-photo/mukola-tablet.jpg";
import teamMukolaDesk from "../../public/team-photo/mukola-desktop.jpg";
import teamMuhailoMob from "../../public/team-photo/muhail-mobile.jpg";
import teamMuhailoTab from "../../public/team-photo/muhail-tablet.jpg";
import teamMuhailoDesk from "../../public/team-photo/muhail-desktop.jpg";
import workApp1 from "../../public/work/box-1-desktop.jpg";
import workMobApp from "../../public/work/box-2-desktop.jpg";
import workDesign from "../../public/work/box-3-desktop.jpg";
const projects = [
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
  {
    type: "",
    name: "",
    description: "",
    mobImg: "",
    tabImg: "",
    descImg: "",
  },
];

const benefits = [
  {
    title: "Увага до деталей",
    description:
      "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
    icon: antenna,
  },
  {
    title: "Пунктуальність",
    description:
      "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
    icon: clock,
  },
  {
    title: "Планування",
    description:
      "Так само консультація з широким активом значною мірою зумовлює.",
    icon: diagram,
  },
  {
    title: "Сучасні технології",
    description:
      "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
    icon: astronaut,
  },
];

const myWorks = [
  {
    id: 1,
    description: "Десктопні додатки",
    img: workApp1,
  },
  {
    id: 2,
    description: "Мобільні додатки",
    img: workMobApp,
  },
  { id: 3, description: "Дизайнерські рішення", img: workDesign },
];

const team = [
  {
    id: 1,
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    mobPhoto: teamIgorMob,
    tabPhoto: teamIgorTab,
    descPhoto: teamIgorDesk,
    alt: "молодий чоловік в сорочці і окулярах" ,
    socialNetworks: {
      instagram: { link: "/", name: "instagram" },
      twitter: { link: "/", name: "twitter" },
      facebook: { link: "/", name: "facebook" },
      linkedin: { link: "/", name: "linkedin" },
    },
  },
  {
    id: 2,
    name: "Ольга Рєпіна",
    position: "Frontend Developer",
    mobPhoto: teamOlgaMob,
    tabPhoto: teamOlgaTab,
    descPhoto: teamOlgaDesk,
    alt: "молода дівчина в окулярах",
    socialNetworks: {
      instagram: { link: "/", name: "instagram" },
      twitter: { link: "/", name: "twitter" },
      facebook: { link: "/", name: "facebook" },
      linkedin: { link: "/", name: "linkedin" },
    },
  },
  {
    id: 3,
    name: "Микола Тарасов",
    position: "Marketing",
    mobPhoto: teamMukolaMob,
    tabPhoto: teamMukolaTab,
    descPhoto: teamMukolaDesk,
    alt: "молодий усміхнений чоловік в сорочці",
    socialNetworks: {
      instagram: { link: "/", name: "instagram" },
      twitter: { link: "/", name: "twitter" },
      facebook: { link: "/", name: "facebook" },
      linkedin: { link: "/", name: "linkedin" },
    },
  },
  {
    id: 4,
    name: "Михайло Єрмаков",
    position: "UI Designer",
    mobPhoto: teamMuhailoMob,
    tabPhoto: teamMuhailoTab,
    descPhoto: teamMuhailoDesk,
    alt: "молодий чоловік в футболці і окулярах",
    socialNetworks: {
      instagram: { link: "/", name: "instagram" },
      twitter: { link: "/", name: "twitter" },
      facebook: { link: "/", name: "facebook" },
      linkedin: { link: "/", name: "linkedin" },
    },
  },
];

export { benefits, team, myWorks };
