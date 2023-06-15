// module.exports = {
//   host: "https://api.webflow.com",
//   rootDir: "./devlink",
//   siteId: "647ff5fb374a40bef3d73aed",
//   authToken: process.env.AUI_AUTH,
//   cssModules: true,
//   allowTelemetry: true,
//   // components: ["MyComponent1", "MyComponent2"]
// }
// module.exports = {
//   host: "https://api.webflow.com",
//   rootDir: "./devlink",
//   siteId: "6475f9b9958175149fed281e",
//   authToken: "d0709aa3ab74d25778d0318e2f909e5a5af9f9d07c737068f264f3a05e9f803c", // An environment variable is recommended for this field.
//   cssModules: true
// }
// module.exports = {
//   host: "https://api.webflow.com",
//   rootDir: "./devlink",
//   siteId: "6480adc68b3db6d220ed1734",
//   authToken: "bf5a174942a81581d09623959032881a3a1ce2221d7d3b1020571f281a43e7fb", // An environment variable is recommended for this field.
//   cssModules: true
// }
module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./devlink",
  siteId: process.env.AUI_SITE,
  authToken: process.env.AUI_AUTH, // An environment variable is recommended for this field.
  cssModules: true
}