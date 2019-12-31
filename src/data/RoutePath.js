"use strict";
exports.__esModule = true;
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
    // QuickScan
    RoutePath["QuickScan"] = "/quickscan";
    RoutePath["QuickScanOnboarding"] = "/quickscan/onboarding";
    RoutePath["QuickScanQuestions"] = "/quickscan/questions";
    RoutePath["QuickScanContactDetails"] = "/quickscan/contact-details";
    RoutePath["QuickScanResult"] = "/quickscan/result";
    RoutePath["QuickScanProfile"] = "/quickscan-profile/:uuid";
    // Account
    RoutePath["Signin"] = "/signin";
    RoutePath["ForgetPassword"] = "/forget-password";
    // Profile
    RoutePath["Dashboard"] = "/dashboard";
    RoutePath["Settings"] = "/settings";
})(RoutePath || (RoutePath = {}));
exports["default"] = RoutePath;
