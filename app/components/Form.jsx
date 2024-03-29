import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  EllipsisHorizontalIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

async function postData(formData) {
  const response = await fetch("/api/postData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    throw new Error("Error creating post");
  }

  return response.json();
}

async function fetchPosts() {
  const formRes = await fetch("/api/getData");
  const formData = await formRes.json();
  return formData.message;
}

export default function Form() {
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const { data: posts } = useQuery("posts", fetchPosts);
  const mutation = useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      setFormData("");
      setLoading(false);
    },
    onError: (error) => {
      setError(error.message);
      setLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.trim() === "") {
      setError("This field is required");
    } else {
      setError("");
      setLoading(true);
      await mutation.mutateAsync(formData);
    }
  };

  return (
    <div className="relative">
      <div className="fixed inset-x-0 z-50 bottom-1 max-w-4xl mx-auto w-full p-6">
        {error && <p className="text-red-500 text-xs p-1">{error}</p>}
        <form className="border border-black/30 rounded-xl shadow-xl flex items-center backdrop-blur-xl">
          <textarea
            type="text"
            name="formData"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            rows={3}
            style={{ resize: "none" }}
            placeholder="write anything.."
            className="w-full bg-transparent border-0 rounded-xl text-sm focus:ring-0 placeholder:text-[#374151]"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-12 h-10 bg-emerald-100 ring-1 ring-neutral-400 shadow-xl flex items-center justify-center rounded-xl m-3"
            disabled={loading}
          >
            {loading ? (
              <EllipsisHorizontalIcon className="w-5 h-5 animate-pulse" />
            ) : (
              <PaperAirplaneIcon className="w-5 h-5 stroke-neutral-700" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
