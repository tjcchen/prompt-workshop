import {
  connectToDB
} from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  // 1. grab the form data
  const {
    userId,
    prompt,
    tag
  } = await req.json();
  // 2. write to database
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), {
      status: 201
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", {
      status: 500
    });
  }
};