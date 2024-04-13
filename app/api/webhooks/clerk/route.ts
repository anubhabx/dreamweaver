import {
  createUser,
  deleteUser,
  updateUser,
} from "@/lib/database/actions/user.actions";
import { clerkClient } from "@clerk/nextjs";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();

  console.log("Header payload:", headerPayload);

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const webhook = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  try {
    event = webhook.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook:", error);
    return new Response("Error occured -- invalid signature", { status: 400 });
  }

  const { id } = event.data;
  const eventType = event.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, username } = event.data;

    const user: CreateUserParams = {
      clerkId: id,
      email: email_addresses[0].email_address,
      avatar: image_url,
      username: username || null,
    };

    const newUser = await createUser(user);

    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }

    return NextResponse.json({
      message: "OK",
      user: newUser,
    });
  }

  if (eventType === "user.updated") {
    const { id, image_url, username } = event.data;

    const user: UpdateUserParams = {
      avatar: image_url,
      username: username,
    };

    const updatedUser = await updateUser(id, user);

    return NextResponse.json({
      message: "OK",
      user: updatedUser,
    });
  }

  if (eventType === "user.deleted") {
    const { id } = event.data;

    const deletedUser = await deleteUser(id!);

    return NextResponse.json({
      message: "OK",
      user: deletedUser,
    });
  }

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
