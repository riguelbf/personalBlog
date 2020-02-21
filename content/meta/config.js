const colors = require("../../src/styles/new-colors");

module.exports = {
  siteTitle: "Riguel Figueiró - Blog", // <title>
  shortSiteTitle: "Just a blog from a simple developer", // <title> ending for posts and pages
  siteDescription: "Just a blog from a simple developer",
  siteUrl: "https://www.riguel.com.br",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "riguel figueiro",
  authorTwitterAccount: "rbfz800",
  // info
  infoTitle: "Riguel Figueiró",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Riguel - Blog",
  manifestShortName: "RiguelBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "riguelbf@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/riguelbf" },
    { name: "twitter", url: "https://twitter.com/rbfz800" },
    { name: "linkedin", url: "https://www.linkedin.com/in/riguel-figueiro/" }
  ]
};
