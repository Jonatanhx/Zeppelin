import { initTRPC } from "@trpc/server";
import { prisma } from "../prisma/prisma";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();

    return users;
  }),
});

export type AppRouter = typeof appRouter;
