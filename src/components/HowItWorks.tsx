import { useState } from "react";
import Button from "./Button";

export default function HowItWorks() {
  const [isCovered, setIsCovered] = useState(true);
  return (
    <div className="relative min-h-min w-full">
      <div className="flex h-[700px] items-center justify-center bg-gray-400">
        VIDEO PLACEHOLDER
      </div>
      {isCovered && (
        <div className="absolute inset-0  flex h-full w-full flex-col items-center justify-center gap-5 bg-white/80 dark:bg-black/70">
          <h2>How Does It Work?</h2>
          <p>Short guide on how to set it up</p>{" "}
          <Button onClick={() => setIsCovered(false)}>Play video</Button>{" "}
        </div>
      )}
    </div>
  );
}
