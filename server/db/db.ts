import { User } from "../generated/prisma/client";

const users: User[] = [];
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: Number) => users.find((user) => user.id === id),
    create: async (data: User) => {
      const user = { ...data };
      users.push(user);
      return user;
    },
  },
};
