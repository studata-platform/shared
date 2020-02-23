enum PublicRoute {
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
  QuickscanProfile = "/quickscan-profile/:uuid"
}

export default PublicRoute;
