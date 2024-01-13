import { useEffect, useRef } from "react";

export const Output = ({ htmlCode }: { htmlCode: string }) => {
  const output = useRef(null)
  // htmlCode is a string of html code i want to set the iframes inner html to that html basically i want to create a code editor, this is just for development so the security does'nt matter
  useEffect(() => {
    
  }, [htmlCode]);
  return (
    <iframe className="output" ref={output} srcDoc={htmlCode} />
  );
};
