import { z } from "zod";

// types
import { TUser, TUserSchema } from "../types/users";

// schema
export const UserSchema = z.strictObject({
  email: z.string({
    required_error: "Email is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
  name: z.string({
    required_error: "Name is required",
  }),
  role: z.string({
    required_error: "Role is required",
  }),
  avatar: z.string({
    required_error: "Avatar is required",
  }),
});

export class UserRepo {
  users: TUser[] = [
    {
      id: 1,
      email: "john@mail.com",
      password: "changeme",
      name: "Jhon",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    },
    {
      id: 2,
      email: "maria@mail.com",
      password: "12345",
      name: "Maria",
      role: "customer",
      avatar: "https://i.imgur.com/G45P8tI.jpeg",
    },
    {
      id: 3,
      email: "admin@mail.com",
      password: "admin123",
      name: "Admin",
      role: "admin",
      avatar: "https://i.imgur.com/aCDF0yh.jpeg",
    },
    {
      id: 4,
      email: "karya0010mandiri@gmail.com",
      password: "karyamandiri123",
      name: "Anton nurjaman",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480",
    },
    {
      id: 5,
      email: "devcodepsi@gmail.com",
      password: "123456",
      name: "James",
      role: "customer",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    },
  ];

  generateNewId() {
    if (!this.users.length) return 1;
    const maxId = Math.max(...this.users.map((user) => user.id));
    return maxId + 1;
  }

  findSingleUser(userId: number) {
    const user = this.users.find((user) => user.id === userId);
    return user;
  }

  findAllUser() {
    return this.users;
  }

  createUser(newUser: TUserSchema) {
    const user = { id: this.generateNewId(), ...newUser };
    this.users = [...this.users, user];
    return user;
  }

  deleteUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
    return;
  }

  updateUserInfo(userId: number, data: TUser) {
    const userIndex = this.findIndex(userId);
    if (userIndex !== -1)
      this.users[userIndex] = { ...this.users[userIndex], ...data };
    return this.users[userIndex];
  }

  findIndex(userId: number) {
    return this.users.findIndex((user) => user.id === userId);
  }
}
