"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProtectedRoute;
(function (ProtectedRoute) {
    // Dashboard
    ProtectedRoute["Dashboard"] = "/dashboard";
    // Profile
    ProtectedRoute["Profile"] = "/profile";
    ProtectedRoute["ProfilePreference"] = "/profile/preferences";
    ProtectedRoute["ProfileActivities"] = "/profile/activities";
    ProtectedRoute["ProfileOrganizations"] = "/profile/organizations";
    // Misc
    ProtectedRoute["Signin"] = "/signin";
    ProtectedRoute["Signout"] = "/signin";
    ProtectedRoute["Activities"] = "/activities";
})(ProtectedRoute || (ProtectedRoute = {}));
exports.default = ProtectedRoute;
