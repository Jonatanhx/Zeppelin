import argon2 from "argon2";
import { z } from "zod";
import { prisma } from "../../prisma/prisma";
import { publicProcedure } from "../../tprc/init";

export function createAccount() {
  return publicProcedure
    .input(
      z.object({
        email: z.email(),
        name: z.string().min(3),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await hashPassword(input.password);

      const account = await prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: hashedPassword,
        },
      });

      return {
        id: account.id,
        email: account.email,
        name: account.name,
      };
    });
}

async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password);
}
