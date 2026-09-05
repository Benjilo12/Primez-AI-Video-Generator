// Make sure to install the '@neondatabase/serverless' package
//! configuration for connecting to a Neon database using Drizzle ORM
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql });
