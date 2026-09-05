import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connectionString = process.env.DATABASE_URL?.trim();

if (!connectionString) {
  throw new Error("DATABASE_URL is required to connect to the database.");
}

try {
  const databaseUrl = new URL(connectionString);
  if (!databaseUrl.protocol.startsWith("postgres")) {
    throw new Error("DATABASE_URL must use a PostgreSQL URL.");
  }
} catch {
  throw new Error(
    "DATABASE_URL must be a valid PostgreSQL URL, for example postgresql://user:password@host/database.",
  );
}

const sql = neon(connectionString);
export const db = drizzle({ client: sql });
