"use client";

import { useState, useEffect } from "react";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Card(props) {
  const [copied, setCopied] = useState(false);
  const [createdAt, setCreatedAt] = useState("");

  function clipboard() {
    const textToCopy = props.desc;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  }

  function formatDateString(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    const inputDateString = props.createdAt;
    const formattedDate = formatDateString(inputDateString);
    setCreatedAt(formattedDate);
  }, [props.createdAt]);

  return (
    <>
      <div
        className={`relative group ring-1 ring-gray-400 text-gray-800 shadow lg:p-6 p-5 rounded-lg relative isolate ${
          copied ? "group-active" : ""
        }`}
        onClick={clipboard}
      >
        <pre className={"whitespace-pre-line pb-5 " + inter.className}>
          {props.desc}
        </pre>
        <p className="text-xs absolute bottom-0 my-2">{createdAt}</p>
        <div className="absolute top-0 right-0 text-xs flex items-center justify-center gap-2 m-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <ClipboardIcon className="w-5 h-5 text-gray-700" />
        </div>
        <div
          className={`absolute inset-0 backdrop-blur-xl bg-gray-300 rounded-lg flex items-center justify-center gap-2 m-2 transition duration-300 ease-in-out ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-2 text-sm rounded-full ring-1 ring-gray-800">
            <CheckIcon className="w-6 h-6 text-emerald-800" />
          </div>
        </div>
      </div>
    </>
  );
}
