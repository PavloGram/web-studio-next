import antenna from "../../public/svg/antenna.svg?url";
import clock from "../../public/svg/clock.svg?url";
import diagram from "../../public/svg/diagram.svg?url";
import astronaut from "../../public/svg/astronaut.svg?url";
import teamIgorMob from "../../public/team-photo/igor-mobile.jpg";
import teamIgorMob2x from "../../public/team-photo/igor-mobile@x2.jpg";
import teamIgorTab from "../../public/team-photo/igor-tablet.jpg";
import teamIgorTab2x from "../../public/team-photo/igor-tablet@x2.jpg";
import teamIgorDesk from "../../public/team-photo/igor-desktop.jpg";
import teamIgorDesk2x from "../../public/team-photo/igor-desktop@x2.jpg";
import teamOlgaMob from "../../public/team-photo/olga-mobile.jpg";
import teamOlgaMob2x from "../../public/team-photo/olga-mobile@x2.jpg";
import teamOlgaTab from "../../public/team-photo/olga-tablet.jpg";
import teamOlgaTab2x from "../../public/team-photo/olga-tablet@x2.jpg";
import teamOlgaDesk from "../../public/team-photo/olga-desktop.jpg";
import teamOlgaDesk2x from "../../public/team-photo/olga-desktop@x2.jpg";
import teamMukolaMob from "../../public/team-photo/mukola-mobile.jpg";
import teamMukolaMob2x from "../../public/team-photo/mukola-mobile@x2.jpg";
import teamMukolaTab from "../../public/team-photo/mukola-tablet.jpg";
import teamMukolaTab2x from "../../public/team-photo/mukola-tablet@x2.jpg";
import teamMukolaDesk from "../../public/team-photo/mukola-desktop.jpg";
import teamMukolaDesk2x from "../../public/team-photo/mukola-desktop@x2.jpg";
import teamMuhailoMob from "../../public/team-photo/muhail-mobile.jpg";
import teamMuhailoMob2x from "../../public/team-photo/muhail-mobile@x2.jpg";
import teamMuhailoTab from "../../public/team-photo/muhail-tablet.jpg";
import teamMuhailoTab2x from "../../public/team-photo/muhail-tablet@x2.jpg";
import teamMuhailoDesk from "../../public/team-photo/muhail-desktop.jpg";
import teamMuhailoDesk2x from "../../public/team-photo/muhail-desktop@x2.jpg";
import workApp1 from "../../public/work/box-1-desktop@x2.jpg";
import workMobApp from "../../public/work/box-2-desktop@x2.jpg";
import workDesign from "../../public/work/box-3-desktop@x2.jpg";
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
    mobPhoto2x: teamIgorMob2x,
    tabPhoto: teamIgorTab,
    tabPhoto2x: teamIgorTab2x,
    descPhoto: teamIgorDesk,
    descPhoto2x: teamIgorDesk2x,
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
    mobPhoto2x: teamOlgaMob2x,
    tabPhoto: teamOlgaTab,
    tabPhoto2x: teamOlgaTab2x,
    descPhoto: teamOlgaDesk,
    descPhoto2x: teamOlgaDesk2x,
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
    mobPhoto2x: teamMukolaMob2x,
    tabPhoto: teamMukolaTab,
    tabPhoto2x: teamMukolaTab2x,
    descPhoto: teamMukolaDesk,
    descPhoto2x: teamMukolaDesk2x,
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
    mobPhoto2x: teamMuhailoMob2x,
    tabPhoto: teamMuhailoTab,
    tabPhoto2x: teamMuhailoTab2x,
    descPhoto: teamMuhailoDesk,
    descPhoto2x: teamMuhailoDesk2x,
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
