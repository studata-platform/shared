var RoutePath;
(function (RoutePath) {
    // Content pages
    RoutePath["Home"] = "/";
    RoutePath["Content"] = "/:slug";
    RoutePath["All"] = "*";
    RoutePath["ArticleOverview"] = "/article";
    RoutePath["ArticleDetail"] = "/article/:slug";
    RoutePath["EventOverview"] = "/event";
    RoutePath["EventDetail"] = "/event/:slug";
    // Quickscan
    RoutePath["Quickscan"] = "/quickscan";
    RoutePath["QuickscanOnboarding"] = "/quickscan/onboarding";
    RoutePath["QuickscanQuestions"] = "/quickscan/questions";
    RoutePath["QuickscanContactDetails"] = "/quickscan/contact-details";
    RoutePath["QuickscanResult"] = "/quickscan/result";
    RoutePath["QuickscanProfile"] = "/quickscan-profile/:uuid";
    // Account
    RoutePath["Signin"] = "/signin";
    RoutePath["ForgetPassword"] = "/forget-password";
    // Profile
    RoutePath["Dashboard"] = "/dashboard";
    RoutePath["Settings"] = "/settings";
})(RoutePath || (RoutePath = {}));
export default RoutePath;
