declare enum RoutePath {
    Home = "/",
    Content = "/:slug",
    All = "*",
    ArticleOverview = "/article",
    ArticleDetail = "/article/:slug",
    EventOverview = "/event",
    EventDetail = "/event/:slug",
    QuickScan = "/quickscan",
    QuickScanOnboarding = "/quickscan/onboarding",
    QuickScanQuestions = "/quickscan/questions",
    QuickScanContactDetails = "/quickscan/contact-details",
    QuickScanResult = "/quickscan/result",
    QuickScanProfile = "/quickscan-profile/:uuid",
    Signin = "/signin",
    ForgetPassword = "/forget-password",
    Dashboard = "/dashboard",
    Settings = "/settings"
}
export default RoutePath;
//# sourceMappingURL=RoutePath.d.ts.map