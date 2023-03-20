import { FC, ReactNode } from "react";

type ProccessBlockProps = {
  children: ReactNode;
  item?: boolean | undefined;
};
export const ProcessBlock: FC<ProccessBlockProps> = (props) => {
  const { children, item } = props;

  return <div className="process">{children}</div>;
};

type EndBlockProps = {
  children: ReactNode;
};
export const EndBlock: FC<EndBlockProps> = (props) => {
  const { children } = props;

  return <div className="process">{children}</div>;
};

type StartBlockProps = {
  children: ReactNode;
};
export const StartBlock: FC<StartBlockProps> = (props) => {
  const { children } = props;

  return <div className="process">{children}</div>;
};
