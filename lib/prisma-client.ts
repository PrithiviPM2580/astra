import { PrismaClient } from "@/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

const globalPrismaThis = globalThis as unknown as { prisma: PrismaClient };

const adapter = new PrismaNeon({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

if (process.env.NODE_ENV !== "production") {
  globalPrismaThis.prisma = prisma;
}

export default prisma;
