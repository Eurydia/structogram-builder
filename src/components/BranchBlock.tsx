import { CSSProperties, FC, ReactNode } from "react";

type CaseBlockProps = {
  condition: string;
  children: ReactNode;
};
export const CaseBlock: FC<CaseBlockProps> = (props) => {
  const { condition, children } = props;

  return (
    <div className="branch-case">
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
    <div className="branch-switch">
      {condition}
      {children}
    </div>
  );
};
