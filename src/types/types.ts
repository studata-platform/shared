import PublicRoute from "../data/PublicRoute";
import ProtectedRoute from "../data/ProtectedRoute";
import CmsRoute from "../data/CmsRoute";

export type Routes = PublicRoute | ProtectedRoute | CmsRoute;

export * from "./IActivity";
export * from "./IArticle";
export * from "./IEvent";
export * from "./IImage";
export * from "./ILink";
export * from "./ILocation";
export * from "./INotification";
export * from "./IOrganization";
export * from "./IProject";
export * from "./IProjectState";
export * from "./IQuickscanQuestion";
export * from "./IQuickscanQuestionOption";
export * from "./IQuickscanResult";
export * from "./IRichText";
export * from "./IUser";
