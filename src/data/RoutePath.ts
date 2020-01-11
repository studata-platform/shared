enum RoutePath {
  // Content pages
  Home = "/",
  Content = "/:slug",
  All = "*",

  ArticleOverview = "/article",
  ArticleDetail = "/article/:slug",

  EventOverview = "/event",
  EventDetail = "/event/:slug",

  // Quickscan
  Quickscan = "/quickscan",
  QuickscanOnboarding = "/quickscan/onboarding",
  QuickscanQuestions = "/quickscan/questions",
  QuickscanContactDetails = "/quickscan/contact-details",
  QuickscanResult = "/quickscan/result",
  QuickscanProfile = "/quickscan-profile/:uuid",

  // Dashboard
  Dashboard = "/dashboard",

  // Profile
  Profile = "/profile",
  ProfilePreference = "/profile/preferences",
  ProfileActivities = "/profile/activities",
  ProfileOrganizations = "/profile/organizations",

  // Resources
  // Articles = "/article",
  // Article = "/article/:slug",
  // Events = "/event",
  // Event = "/event/:slug",
  Organizations = "/organization",
  Organization = "/organization/:id",
  Pages = "/page",
  Page = "/page/:slug",
  Projects = "/project",
  Project = "/project/:shortname",
  ProjectStates = "/project-state",
  ProjectState = "/project-state/:id",
  Users = "/user",
  User = "/user/:id",

  // Misc
  Signin = "/signin",
  Signout = "/signin",
  Activities = "/activities",
  QuickscanResults = "/quickscan-results"
}

export default RoutePath;
