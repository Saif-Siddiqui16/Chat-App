import User from "@models/User";
import { connectToDB } from "@mongodb";

export const GET = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("not found", { status: 400 });
  }
};
