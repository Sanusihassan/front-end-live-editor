"use client";
// this is how my complete app looks like:
import { Editor } from "@/components/Editor";
import { Output } from "@/components/Output";
import { html } from "@/components/defaulthtml";
import { useState } from "react";

export default function Home() {
  const [htmlCode, setHtmlCode] = useState(html);
  return (
    <div className="app">
      <Editor htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
      <Output htmlCode={htmlCode} />
    </div>
  );
}

// i want to crate a live code editor where the output should be visible on the output container
/**
 * it currently looks like this: export const Output = () => {
  return <div className="output">output</div>;
};

 */
