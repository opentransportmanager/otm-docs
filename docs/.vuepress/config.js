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
        children: [
          "/adr/template.md",
          "/adr/api_language.md",
          "/adr/api_framework.md",
          "/adr/database.md",
          "/adr/map.md",
          "/adr/simulator_language.md",
          "/adr/containerization.md"],
      },
    ],
  },
};