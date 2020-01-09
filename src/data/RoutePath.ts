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

  // Account
  Signin = "/signin",

  // Dashboard
  Dashboard = "/dashboard",

  // Profile
  Profile = "/profile",
  ProfilePreference = "/profile/preferences",
  ProfileActivities = "/profile/activities",
  ProfileOrganizations = "/profile/organizations",

  // Profile
  Projects = "/project",
  Project = "/project/:shortname"
}

export default RoutePath;
