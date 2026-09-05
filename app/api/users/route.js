import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";

export async function POST() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  if (!email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existingUser = await db
    .select({ id: Users.id })
    .from(Users)
    .where(eq(Users.email, email));

  if (existingUser.length === 0) {
    await db.insert(Users).values({
      name: user.firstName || user.username || "User",
      email,
      imageUrl: user.imageUrl,
    });
  }

  return Response.json({ success: true });
}
