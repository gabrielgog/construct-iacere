const pathResolver = (modulePath: string) => modulePath;

export const appRoutes = {
  root: () => pathResolver("/dashboard"),
  projects: () => pathResolver("/projects"),
  users: () => pathResolver("/users/"),
  addProject: () => pathResolver("/add-project"),
  addUser: () => pathResolver("/add-user"),
  login: () => pathResolver("/auth/login")
};

export const appRoutesPaths: {
  root: string;
  projects: string;
  users: string;
  addProject: string;
  addUser: string;
  login: string;
} = {
  root: appRoutes.root(),
  projects: appRoutes.projects(),
  users: appRoutes.users(),
  addProject: appRoutes.addProject(),
  addUser: appRoutes.addUser(),
  login: appRoutes.login()
};
