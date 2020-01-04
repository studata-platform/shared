"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Company"] = 1] = "Company";
    Role[Role["Student"] = 2] = "Student";
    Role[Role["Expert"] = 4] = "Expert";
    Role[Role["ContentEditor"] = 8] = "ContentEditor";
    Role[Role["Team"] = 6] = "Team";
    // Admin role is a union of all roles
    Role[Role["Admin"] = 15] = "Admin";
})(Role || (Role = {}));
exports.default = Role;
