// Make sure to install the '@neondatabase/serverless' package
//! configuration for connecting to a Neon database using Drizzle ORM
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_BwlzQ4hj3vDn@ep-frosty-heart-zaavmpuj-pooler.c-2.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
);
export const db = drizzle({ client: sql });
