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
          "/adr/api_description.md",
          "/adr/api_architecture.md",
          "/adr/api_language.md",
          "/adr/api_framework.md",
          "/adr/simulator_description.md",
          "/adr/simulator_language.md",
          "/adr/database.md",
          "/adr/map.md",
          "/adr/containerization.md"],
      },
    ],
  },
};