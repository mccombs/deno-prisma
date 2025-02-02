import { PrismaClient } from "../generated/client/deno/edge.ts";
import { withAccelerate } from '@prisma/extension-accelerate'
import "jsr:@std/dotenv/load";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: Deno.env.get("DATABASE_URL"),
        },
    },
}).$extends(withAccelerate());

export default prisma;
