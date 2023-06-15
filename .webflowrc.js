module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./devlink",
  siteId: process.env.AUI_SITE,
  authToken: process.env.AUI_AUTH, // An environment variable is recommended for this field.
  cssModules: true
}