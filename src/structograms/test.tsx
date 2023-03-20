import { FC, Fragment } from "react";
import {
  ProcessBlock,
  BranchBlock,
  CaseBlock,
  TestFirstLoopBlock,
  StartBlock,
  EndBlock,
  TestLastLoopBlock,
} from "../components";

export const Test: FC = () => {
  return (
    <Fragment>
      <StartBlock>Test</StartBlock>
      <ProcessBlock>n := 10</ProcessBlock>

      <TestLastLoopBlock condition="i < n">
        <ProcessBlock>i := i + 1</ProcessBlock>
        <TestFirstLoopBlock condition="j < i">
          <ProcessBlock>j := j + 1</ProcessBlock>
          <BranchBlock condition="n = 9">
            <CaseBlock condition="True">
              <ProcessBlock>Exit</ProcessBlock>
            </CaseBlock>
            <CaseBlock condition="False">
              <ProcessBlock>-</ProcessBlock>
            </CaseBlock>
          </BranchBlock>
        </TestFirstLoopBlock>
      </TestLastLoopBlock>

      <EndBlock>Exit</EndBlock>
    </Fragment>
  );
};
