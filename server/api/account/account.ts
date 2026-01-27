import { TRPCError } from "@trpc/server";
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

export function signInAccount() {
  return publicProcedure
    .input(
      z.object({
        email: z.email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const account = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (!account) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const isPasswordValid = await argon2.verify(
        account.password,
        input.password,
      );
      if (!isPasswordValid) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return {
        success: true,
      };
    });
}

async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password);
}
