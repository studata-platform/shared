"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationState;
(function (NotificationState) {
    NotificationState[NotificationState["Unread"] = 1] = "Unread";
    NotificationState[NotificationState["Read"] = 2] = "Read";
    NotificationState[NotificationState["Archived"] = 4] = "Archived";
})(NotificationState || (NotificationState = {}));
exports.default = NotificationState;
