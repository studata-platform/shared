"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationState;
(function (NotificationState) {
    NotificationState[NotificationState["UNREAD"] = 0] = "UNREAD";
    NotificationState[NotificationState["READ"] = 1] = "READ";
    NotificationState[NotificationState["ARCHIVED"] = 2] = "ARCHIVED";
})(NotificationState || (NotificationState = {}));
exports.default = NotificationState;
