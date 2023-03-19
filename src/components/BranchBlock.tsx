import { CSSProperties, FC, ReactNode } from "react";

type CaseBlockProps = {
  condition: string;
  children: ReactNode;
};
export const CaseBlock: FC<CaseBlockProps> = (props) => {
  const { condition, children } = props;

  return (
    <div
      style={{
        marginTop: "0.75em",
      }}
    >
      {condition}
      {children}
    </div>
  );
};

type BranchBlockProps = {
  condition: string;
  children: ReactNode;
  item?: boolean | undefined;
};
export const BranchBlock: FC<BranchBlockProps> = (props) => {
  const { condition, children, item } = props;

  return (
    <div
      style={{
        padding: "0.75em 0 0 0.75em",
        // borderTopWidth: "0.075em",
        // borderRightWidth: item ? "0" : "0.15em",
        // borderBottomWidth: "0.075em",
        // borderLeftWidth: "0.15em",
        borderWidth: "0.15em",
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      {condition}
      <div
        style={{
          marginLeft: "2.75em",
        }}
      >
        {children}
      </div>
    </div>
  );
};
