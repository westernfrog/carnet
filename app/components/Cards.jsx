"use client";

import Card from "./Card";
import { useQuery } from "react-query";

async function fetchPosts() {
  const formRes = await fetch("/api/getData");
  const formData = await formRes.json();

  return formData.message;
}

export default function Cards() {
  const { data: posts } = useQuery("posts", fetchPosts);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 mb-36 p-6">
        {posts?.map((item, index) => (
          <Card key={index} desc={item.formData} createdAt={item.createdAt} />
        ))}
      </div>
    </>
  );
}
