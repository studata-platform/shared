"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event;
(function (Event) {
    // Article
    Event["CreateArticle"] = "createArticle";
    Event["UpdateArticle"] = "updateArticle";
    Event["DeleteArticle"] = "deleteArticle";
    // Article
    Event["CreateEvent"] = "createEvent";
    Event["UpdateEvent"] = "updateEvent";
    Event["DeleteEvent"] = "deleteEvent";
    // Organization
    Event["CreateOrganization"] = "createOrganization";
    Event["UpdateOrganization"] = "updateOrganization";
    Event["DeleteOrganization"] = "deleteOrganization";
    // Project
    Event["CreateProject"] = "createProject";
    Event["UpdateProject"] = "updateProject";
    Event["DeleteProject"] = "deleteProject";
    // User
    Event["CreateUser"] = "createUser";
    Event["UpdateUser"] = "updateUser";
    Event["DeleteUser"] = "deleteUser";
    // User
    Event["UploadFile"] = "uploadFile";
    Event["DeleteFile"] = "deleteFile";
})(Event || (Event = {}));
exports.default = Event;
