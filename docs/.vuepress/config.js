module.exports = {
  title: "Hello World",
  themeConfig: {
    nav: [
      {
        text: "前端基础",
        items: [
          { text: "HTML", link: "/html/" },
          { text: "CSS", link: "/css/" },
          { text: "Javascript", link: "/javascript/" },
        ],
      },
      { text: "Typescript", link: "/typescript/" },
      { text: "Vue", link: "/vue/" },
      {
        text: "工程构建",
        items: [
          { text: "webpack", link: "/webpack/" },
          { text: "glup", link: "/glup/" },
        ],
      },
      {
        text: "NodeJS",
        items: [
          { text: "node", link: "/node/" },
          { text: "koa", link: "/koa/" },
        ],
      },
      { text: "GitHub", link: "https://github.com/blue0728/study-notes" },
    ],
    sidebar: {},
    sidebarDepth: 2,
  },
};
