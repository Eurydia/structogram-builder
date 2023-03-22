import { FC, ReactNode } from "react";

import "./LoopBlock.css";

type LoopBlockProps = {
  condition: string;
  children: ReactNode;
  variant: "first" | "last";
};
export const LoopBlock: FC<LoopBlockProps> = (props) => {
  const { condition, children, variant } = props;

  if (variant === "first") {
    return (
      <div data-loop="first">
        <div data-loop-condition>{condition}</div>
        <div data-loop-process>{children}</div>
      </div>
    );
  }

  return (
    <div data-loop="last">
      <div data-loop-process>{children}</div>
      <div data-loop-condition>{condition}</div>
    </div>
  );
};
