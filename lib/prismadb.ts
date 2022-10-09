// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// export default client;

// https://github.com/prisma/prisma/discussions/10037
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ errorFormat: "pretty" });
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient(/*{ log: ['info', 'query'] }*/);
  }
  prisma = globalWithPrisma.prisma;
}

prisma.$use(async (params, next) => {
  if (params.action == "create" && params.model == "Account") {
    delete params.args.data["not-before-policy"];
  }

  const result = await next(params);
  // See results here
  return result;
});

prisma.$use(async (params, next) => {
  const before = Date.now();

  const result = await next(params);

  const after = Date.now();

  const now = new Date();

  console.log(chalk.grey(`[ ${now.toISOString()} ]`), chalk.green(`Query ${params.model}.${params.action} took ${after - before}ms`));

  return result;
});

export default prisma;
