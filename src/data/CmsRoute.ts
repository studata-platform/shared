enum CmsRoute {
  Articles = "/article",
  Article = "/article/:slug",
  Events = "/event",
  Event = "/event/:slug",
  Organizations = "/organization",
  Organization = "/organization/:id",
  Pages = "/page",
  Page = "/page/:slug",
  Projects = "/project",
  Project = "/project/:shortname",
  ProjectStates = "/project-state",
  ProjectState = "/project-state/:id",
  Users = "/user",
  User = "/user/:id"
}

export default CmsRoute;
