import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Use a generic dummy URL for build-time evaluation when DATABASE_URL is missing
const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_BwlzQ4hj3vDn@ep-frosty-heart-zaavmpuj-pooler.c-2.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(connectionString);
export const db = drizzle({ client: sql });
