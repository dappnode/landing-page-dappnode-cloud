import React from "react";

interface buttonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick = () => undefined,
  disabled = false,
}: buttonProps) {
  return (
    <button
      className="text-text-purple  flex items-center justify-center rounded-lg  bg-purple-300 px-5 pb-2.5 pt-3 text-center transition-all duration-300 ease-in-out  hover:scale-105 hover:bg-dappnodePurple hover:text-white disabled:bg-dappnodeGrey5 disabled:tracking-normal disabled:text-gray-400 dark:bg-purple-900 dark:text-dappnodeDarkText dark:hover:bg-dappnodePurple"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
