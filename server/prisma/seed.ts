import { prisma } from "./prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: "jonatanhelander@hotmail.com",
      name: "Jonatan Helander",
      posts: {
        create: {
          content: "My first post",
        },
      },
    },
  });
}

main();
