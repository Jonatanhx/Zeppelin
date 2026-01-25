import { prisma } from "../prisma/prisma";
import { publicProcedure, router } from "./init";
import accountRouter from "./routers/account";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();

    return users;
  }),
  account: accountRouter,
});

export type AppRouter = typeof appRouter;
