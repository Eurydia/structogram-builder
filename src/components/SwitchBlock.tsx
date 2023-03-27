import { FC, ReactNode } from "react";

import "./SwitchBlock.css";

type CaseBlockProps = {
  condition: ReactNode;
  children: ReactNode;
};
export const CaseBlock: FC<CaseBlockProps> = (props) => {
  const { condition, children } = props;

  return (
    <div data-case>
      <div data-case-condition>
        <div data-case-condition-triangle />
        <div data-case-condition-text>
          <span>{condition}</span>
        </div>
      </div>
      <div data-case-process>{children}</div>
    </div>
  );
};

type SwitchBlockProps = {
  condition: ReactNode;
  children: ReactNode;
};
export const SwitchBlock: FC<SwitchBlockProps> = (props) => {
  const { condition, children } = props;

  return (
    <div data-switch>
      <div data-switch-condition>{condition}</div>
      <div data-cases>{children}</div>
    </div>
  );
};
