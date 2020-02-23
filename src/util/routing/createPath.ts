const createPath = (route: string, parameters: { [name: string]: string }) =>
  route.replace(
    /:[a-z0-9-]+/gi,
    (parameterKey: string) => parameters[parameterKey.substr(1)]
  );

export default createPath;
