module.exports = {
  title: "otm-docs",
  description: "Documentation for OpenTransportManager app",
  base: "/otm-docs/",
  themeConfig: {
    repo: "opentransportmanager",
    docsRepo: "opentransportmanager/otm-docs",
    docsDir: "docs",
    editLinks: true,
    lastUpdated: true,
    sidebar: [
      "/",
      {
        title: "ADR",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/adr/template.md"],
      },
    ],
  },
};
