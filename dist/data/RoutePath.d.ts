declare enum RoutePath {
    Home = "/",
    Content = "/:slug",
    All = "*",
    ArticleOverview = "/article",
    ArticleDetail = "/article/:slug",
    EventOverview = "/event",
    EventDetail = "/event/:slug",
    Quickscan = "/quickscan",
    QuickscanOnboarding = "/quickscan/onboarding",
    QuickscanQuestions = "/quickscan/questions",
    QuickscanContactDetails = "/quickscan/contact-details",
    QuickscanResult = "/quickscan/result",
    QuickscanProfile = "/quickscan-profile/:uuid",
    Signin = "/signin",
    ForgetPassword = "/forget-password",
    Dashboard = "/dashboard",
    Settings = "/settings"
}
export default RoutePath;
//# sourceMappingURL=RoutePath.d.ts.map