"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationState;
(function (NotificationState) {
    NotificationState[NotificationState["Unread"] = 0] = "Unread";
    NotificationState[NotificationState["Read"] = 1] = "Read";
    NotificationState[NotificationState["Archived"] = 2] = "Archived";
})(NotificationState || (NotificationState = {}));
exports.default = NotificationState;
