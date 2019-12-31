enum Role {
  Company = 1 << 0,
  Student = 1 << 1,
  Expert = 1 << 2,
  Admin = 1 << 3,

  Any = Admin | Student | Expert | Company,
  Team = Student | Expert
}

export default Role;
