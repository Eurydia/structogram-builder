import { FC, Fragment } from "react";
import {
  ProcessBlock,
  BranchBlock,
  CaseBlock,
  LoopBlock,
  StartBlock,
  EndBlock,
} from "../components";

export const Test: FC = () => {
  return (
    <Fragment>
      <StartBlock>def Fibonacci</StartBlock>
      <ProcessBlock>n := Read</ProcessBlock>
      <BranchBlock condition="n = 1 or n = 2">
        <CaseBlock condition="True">
          <ProcessBlock>return 1</ProcessBlock>
        </CaseBlock>
      </BranchBlock>
      <ProcessBlock>i := 2</ProcessBlock>
      <ProcessBlock>prev := 1; curr := 1; next := -1</ProcessBlock>
      <LoopBlock condition="while i < n">
        <ProcessBlock>next := curr + prev</ProcessBlock>
        <ProcessBlock>prev := curr</ProcessBlock>
        <ProcessBlock>curr := next</ProcessBlock>
        <ProcessBlock>i := i + 1</ProcessBlock>
      </LoopBlock>
      <EndBlock>return curr</EndBlock>
    </Fragment>
  );
};
