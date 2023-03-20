import { FC, ReactNode } from "react";

type TestFirstLoopBlockProps = {
  condition: string;
  children: ReactNode;
};
export const TestFirstLoopBlock: FC<TestFirstLoopBlockProps> = (
  props,
) => {
  const { condition, children } = props;

  return (
    <div className="loop test-first">
      {condition}
      {children}
    </div>
  );
};

type TestLastLoopBlockProps = {
  condition: string;
  children: ReactNode;
};
export const TestLastLoopBlock: FC<TestLastLoopBlockProps> = (
  props,
) => {
  const { condition, children } = props;

  return (
    <div className="loop test-last">
      {children}
      {condition}
    </div>
  );
};
