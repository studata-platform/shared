"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    // Dashboard
    RoutePath["Dashboard"] = "/dashboard";
    // Profile
    RoutePath["Profile"] = "/profile";
    RoutePath["ProfilePreference"] = "/profile/preferences";
    RoutePath["ProfileActivities"] = "/profile/activities";
    RoutePath["ProfileOrganizations"] = "/profile/organizations";
    // Resources
    // Articles = "/article",
    // Article = "/article/:slug",
    // Events = "/event",
    // Event = "/event/:slug",
    RoutePath["Organizations"] = "/organization";
    RoutePath["Organization"] = "/organization/:id";
    RoutePath["Pages"] = "/page";
    RoutePath["Page"] = "/page/:slug";
    RoutePath["Projects"] = "/project";
    RoutePath["Project"] = "/project/:shortname";
    RoutePath["ProjectStates"] = "/project-state";
    RoutePath["ProjectState"] = "/project-state/:id";
    RoutePath["Users"] = "/user";
    RoutePath["User"] = "/user/:id";
    // Misc
    RoutePath["Signin"] = "/signin";
    RoutePath["Signout"] = "/signin";
    RoutePath["Activities"] = "/activities";
    RoutePath["QuickscanResults"] = "/quickscan-results";
})(RoutePath || (RoutePath = {}));
exports.default = RoutePath;
