"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  // when promptId changes, we fetch data
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
  
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    // only fetch data when promptId exists
    promptId && getPromptDetails();
  }, [promptId]);

  // const createPrompt = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   try {
  //     const response = await fetch("/api/prompt/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         prompt: post.prompt,
  //         tag: post.tag,
  //         userId: session?.user.id,
  //       }),
  //     });

  //     if (response.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default EditPrompt;
