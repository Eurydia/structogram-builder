import { FC, ReactNode } from "react";
import "./ProcessBlock.css";

type ProccessBlockProps = {
  children: ReactNode;
};
export const ProcessBlock: FC<ProccessBlockProps> = (props) => {
  const { children } = props;

  return <div data-process>{children}</div>;
};

// type EndBlockProps = {
//   children: ReactNode;
// };
// export const EndBlock: FC<EndBlockProps> = (props) => {
//   const { children } = props;

//   return <div data-process>{children}</div>;
// };

// type StartBlockProps = {
//   children: ReactNode;
// };
// export const StartBlock: FC<StartBlockProps> = (props) => {
//   const { children } = props;

//   return <div className="process">{children}</div>;
// };
