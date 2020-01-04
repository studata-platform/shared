enum Role {
  Company = 1 << 0,
  Student = 1 << 1,
  Expert = 1 << 2,
  ContentEditor = 1 << 3,

  Team = Student | Expert,

  // Admin role is a union of all roles
  Admin = Company | Student | Expert | ContentEditor
}

export default Role;
