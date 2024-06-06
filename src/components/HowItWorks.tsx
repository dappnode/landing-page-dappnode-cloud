import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function HowItWorks() {
  const [isCovered, setIsCovered] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isCovered && videoRef.current) {
      videoRef.current.play();
    }
  }, [isCovered]);
  return (
    <div className="relative min-h-min w-full" id="howItWorks">
      <video
        ref={videoRef}
        src="/shopyfy_demo.webm"
        controls={!isCovered}
      ></video>

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
