import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex h-[50vh] items-center justify-center overflow-hidden  "
    >
      {/*Initial clouds -> ONLY APPEAR ONCE */}
      <div className="absolute flex h-full w-screen translate-x-[100%] animate-cloud-initial">
        <CloudSvg color="#FC9E22" size={100} right="0px" top="100px" />
        <CloudSvg color="#9333ea" size={200} left="80px" top="20px" />
        <CloudSvg color="#FC9E22" size={50} left="400px" bot="50px" />
        <CloudSvg color="#00B1F4" size={80} left="60%" top="70%" />
        <CloudSvg color="#E60AF6" size={100} right="200px" bot="150px" />
      </div>
      {/*Mid clouds  */}
      <div className="absolute flex h-full w-screen animate-cloud-mid">
        <CloudSvg color="#FC9E22" size={100} right="0px" top="20px" />
        <CloudSvg color="#00B1F4" size={180} left="60%" top="25px" />
        <CloudSvg color="#E60AF6" size={50} right="60%" bot="0" />
      </div>

      {/*Fast clouds  */}
      <div className="absolute flex h-full w-screen animate-cloud-fast">
        <CloudSvg color="#E60AF6" size={70} right="0px" top="20px" />
        <CloudSvg color="#9333ea" size={80} left="5px" top="10%" />
        <CloudSvg color="#00B1F4" size={50} right="400px" top="60%" />
        <CloudSvg color="#00B1F4" size={35} left="0px" top="40%" />
      </div>

      {/*
      Decentralization, Up in the Clouds
      Decentralization Above All
      Decentralize Among the Clouds
      Lift Your Nodes to the Clouds
      Where Your Nodes Fly High
      Elevate Your Blockchain Experience
      */}
      <div className="flex flex-col text-center">
        <h1>Dappnode Cloud</h1>
        <h3 className="text-3xl text-black dark:text-dappnodeDarkText">
          No hardware? No Problem!
        </h3>
      </div>

      {/*Slow clouds  */}
      <div className="absolute flex h-full w-screen animate-cloud-mid">
        <CloudSvg color="#FC9E22" size={100} left="0px" bot="20px" />
        <CloudSvg color="#FC9E22" size={50} right="500px" top="40%" />
        <CloudSvg color="#E60AF6" size={150} left="60%" bot="5px" />
      </div>
      <div className="absolute flex h-full w-screen animate-cloud-slow">
        <CloudSvg color="#00B1F4" size={200} left="5px" top="0px" />
        <CloudSvg color="#9333ea" size={250} right="25%" bot="7%" />
      </div>
    </motion.div>
  );
}

function CloudSvg({
  color,
  size,
  top = undefined,
  right = undefined,
  bot = undefined,
  left = undefined,
}: {
  color: string;
  size: number;
  top?: string | undefined;
  right?: string | undefined;
  bot?: string | undefined;
  left?: string | undefined;
}) {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,

        position: "absolute",
        top: top,
        right: right,
        bottom: bot,
        left: left,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1792 1792"
        className="h-full w-full"
        fill={color}
      >
        <path d="M1792 1173.6q0 148.4-105 253.4t-253.4 105H418.133q-172.666 0-295.4-122.733Q0 1286.533 0 1113.867q0-123.2 66.267-225.4 66.266-102.2 174.533-152.6-1.867-26.134-1.867-40.134 0-197.866 140-337.866 140-140 337.867-140 147.467 0 267.4 82.133 119.933 82.133 175 214.667 65.333-57.867 154.933-57.867 98.934 0 168.934 70t70 168.933q0 70-38.267 128.8 120.4 28 198.8 125.534Q1792 1047.6 1792 1173.6Z"></path>
      </svg>
    </div>
  );
}
