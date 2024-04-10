export const METADATA = {
  title: "Portfolio | Meoki",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://meoki.vn/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design dreams into masterpieces",
  "I design innovation, pixel by pixel",
  "I design journeys that tell stories",
];

export const EMAIL = "hi@meoki.vn";

export const SOCIAL_LINKS = {
  github: "https://github.com/meokisama",
  twitter: "https://twitter.com/meokiiii",
  facebook: "https://www.facebook.com/slytherinnn",
  discord: "https://discordapp.com/users/462097156455661568",
  instagram: "https://www.instagram.com/meokisama/",
  // behance: "https://www.behance.net/meokisama/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Vietnam Light Novel Ranking",
    image: "/projects/ranking.jpg",
    blurImage: "/projects/blur/ranking-blur.jpg",
    description: "Voting platform for Vietnam Light Novel Ranking",
    gradient: ["#fd7692", "#f77962"],
    url: "https://meoki.vn/ranking",
    tech: ["react", "gsap", "figma"],
  },
  {
    name: "Raw Ranobe Reader",
    image: "/projects/3r.jpg",
    blurImage: "/projects/blur/3r-blur.jpg",
    description: "Sharing raw japanese light novel for reading purpose",
    gradient: ["#1c1c1c", "#2c2c2c"],
    url: "https://meoki.vn/sharing",
    tech: ["html", "javascript", "css"],
  },
  {
    name: "Light Novel Giveaway Booster",
    image: "/projects/gabooster.jpg",
    blurImage: "/projects/blur/gabooster-blur.jpg",
    description: "Morden landing page for Giveaway Booster event",
    gradient: ["#3c7096", "#ffffff"],
    url: "https://meoki.vn/ga",
    tech: ["react", "sass", "figma"],
  },
  {
    name: "Capture The Flag Platform",
    image: "/projects/ctf.jpg",
    blurImage: "/projects/blur/ctf-blur.jpg",
    description: "CTF platform with clean expressive design built with Django",
    gradient: ["#212529", "#8b9eff"],
    url: "https://github.com/meokisama/DjangoCTF",
    tech: ["python", "django", "figma"],
  },
  {
    name: "Python Reinforcement Learning",
    image: "/projects/rl.jpg",
    blurImage: "/projects/blur/rl-blur.jpg",
    description: '"Destroyed The Island" game with Q-learning algorithms',
    gradient: ["#1c1c1c", "#2c2c2c"],
    url: "https://github.com/meokisama/Reinforcement-Learning",
    tech: ["npm", "python"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "gsap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: ["git", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Fullstack Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Launching into the career realm with a full-stack position, setting the course for the future.",
    slideImage: "/timeline/dev.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from UIT (VNU) 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Completing university and embarking on the journey of adulthood.",
    slideImage: "/timeline/tnuit.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Internship",
    size: ItemSize.SMALL,
    subtitle:
      "Applying theoretical knowledge in a Cyber Security Engineering internship 😎",
    slideImage: "/timeline/intern.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Expanding knowledge",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Security, Malware... and Web Dev!",
    image: "/timeline/banner_uit.png",
    slideImage: "/timeline/tl02.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Pursuing higher at UIT (VNU)",
    size: ItemSize.SMALL,
    subtitle:
      "Committing to the field of cybersecurity with determination and resolve 🚀",
    image: "/timeline/banner_uit.png",
    slideImage: "/timeline/uit1.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from high school 🎓",
    size: ItemSize.SMALL,
    subtitle: "Venturing into an expansive new path ahead...",
    slideImage: "/timeline/tnas1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelance Graphic Designer",
    size: ItemSize.SMALL,
    subtitle: "Turning the first creations into cash...",
    slideImage: "/timeline/naruto.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "High School Checkpoint",
    size: ItemSize.SMALL,
    subtitle: "Suffering through three years of dull high school lectures",
    slideImage: "/timeline/as1.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Stumbling into life's journey",
    size: ItemSize.SMALL,
    subtitle:
      "Embarking on the journey of freelance design, every stumble paves the path to mastery...",
    slideImage: "/timeline/tl01.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
