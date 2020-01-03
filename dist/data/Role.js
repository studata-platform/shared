var Role;
(function (Role) {
    Role[Role["Company"] = 1] = "Company";
    Role[Role["Student"] = 2] = "Student";
    Role[Role["Expert"] = 4] = "Expert";
    Role[Role["Admin"] = 8] = "Admin";
    Role[Role["Any"] = 15] = "Any";
    Role[Role["Team"] = 6] = "Team";
})(Role || (Role = {}));
export default Role;
