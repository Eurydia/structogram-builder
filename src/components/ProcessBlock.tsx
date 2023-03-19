import { FC, ReactNode } from "react";

type ProccessBlockProps = {
  children: ReactNode;
  item?: boolean | undefined;
};
export const ProcessBlock: FC<ProccessBlockProps> = (props) => {
  const { children, item } = props;

  return (
    <div
      style={{
        padding: "0.75em",
        borderWidth: "0.15em",
        // borderTopWidth: "0.075em",
        // borderRightWidth: item ? "0" : "0.15em",
        // borderBottomWidth: "0.075em",
        // borderLeftWidth: "0.15em",
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      {children}
    </div>
  );
};

type EndBlockProps = {
  children: ReactNode;
};
export const EndBlock: FC<EndBlockProps> = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        padding: "0.75em",
        borderWidth: "0.15em",
        // borderWidth: "0.075em 0.15em 0.15em 0.15em",
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      {children}
    </div>
  );
};

type StartBlockProps = {
  children: ReactNode;
};
export const StartBlock: FC<StartBlockProps> = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        padding: "0.75em",
        borderWidth: "0.15em",
        borderColor: "black",
        borderStyle: "solid",
        // borderWidth: "0.15em 0.15em 0.075em 0.15em",
      }}
    >
      {children}
    </div>
  );
};
