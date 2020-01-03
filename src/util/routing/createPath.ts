import RoutePath from "../../data/RoutePath";

const createPath = (route: RoutePath, parameters: { [name: string]: string }) =>
  route.replace(
    /:[a-z0-9-]+/gi,
    parameterKey => parameters[parameterKey.substr(1)]
  );

export default createPath;
