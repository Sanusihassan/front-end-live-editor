"use client";
// Import the required files for HTML mode and theme
// @ts-ignore
import AceEditor, { ace } from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
// Import the required files for autocompletion
import "ace-builds/src-noconflict/ext-language_tools";
import type { Dispatch } from "react";
import { SetStateAction, useState } from "react";

export const Editor = ({
  htmlCode,
  setHtmlCode,
}: {
  htmlCode: string;
  setHtmlCode: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="editor">
      <AceEditor
        mode="html" // Set the mode to HTML for HTML syntax highlighting
        theme="monokai" // Set the theme (you can change it if you want)
        onChange={(v) => setHtmlCode(v)} // Update the state with the new editor content
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true, // Enable basic autocompletion
          enableLiveAutocompletion: true, // Enable live autocompletion
          enableSnippets: true, // Enable code snippets
          showLineNumbers: true, // Show line numbers
          tabSize: 2, // Set the tab size
          // Add other options here as needed
        }}
        style={{ width: "100%", minHeight: "500px", height: "100vh" }}
        value={htmlCode}
      />
    </div>
  );
};
