"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublicRoute;
(function (PublicRoute) {
    // Content pages
    PublicRoute["Home"] = "/";
    PublicRoute["Content"] = "/:slug";
    PublicRoute["All"] = "*";
    PublicRoute["ArticleOverview"] = "/article";
    PublicRoute["ArticleDetail"] = "/article/:slug";
    PublicRoute["EventOverview"] = "/event";
    PublicRoute["EventDetail"] = "/event/:slug";
    // Quickscan
    PublicRoute["Quickscan"] = "/quickscan";
    PublicRoute["QuickscanOnboarding"] = "/quickscan/onboarding";
    PublicRoute["QuickscanQuestions"] = "/quickscan/questions";
    PublicRoute["QuickscanContactDetails"] = "/quickscan/contact-details";
    PublicRoute["QuickscanResult"] = "/quickscan/result";
    PublicRoute["QuickscanProfile"] = "/quickscan-profile/:uuid";
})(PublicRoute || (PublicRoute = {}));
exports.default = PublicRoute;
