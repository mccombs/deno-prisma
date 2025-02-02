import { PrismaClient } from "../generated/client/deno/edge.ts";
import { withAccelerate } from '@prisma/extension-accelerate'
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
const envVars = await config();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL,
        },
    },
}).$extends(withAccelerate());

export default prisma;
