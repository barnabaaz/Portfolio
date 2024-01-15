interface Navbar {
  icon: string;
  title?: string;
  path: string;
}

export const navbar: Navbar[] = [
  { icon: "uil uil-estate", title: "Home", path: "#home" },
  { icon: "uil uil-user", title: "About Me", path: "#about" },
  { icon: "uil uil-file-alt", title: "Skills", path: "#skills" },
  {
    icon: "uil uil-briefcase-alt",
    title: "Qualification",
    path: "#qualification",
  },
  { icon: "uil uil-scenery", title: "Services", path: "#services" },

  { icon: "uil uil-message", title: "Contact Me", path: "#Contact" },
];

export const socials: Navbar[] = [
  {
    icon: "uil uil-linkedin-alt",
    title: "Home",
    path: "https://www.linkedin.com/",
  },
  {
    icon: "uil uil-twitter-alt",
    title: "Home",
    path: "https://www.twitter.com/",
  },
  { icon: "uil uil-github-alt", title: "Home", path: "https://github.com/" },
];
