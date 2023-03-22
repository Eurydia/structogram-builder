import { FC, Fragment } from "react";
import {
  ProcessBlock,
  SwitchBlock,
  CaseBlock,
  LoopBlock,
  // StartBlock,
  // EndBlock,
} from "../components";

export const Test: FC = () => {
  return (
    <Fragment>
      <ProcessBlock>Test</ProcessBlock>
      <ProcessBlock>Read n</ProcessBlock>

      <SwitchBlock condition="rem of n / 3">
        <CaseBlock condition="is 0">
          <ProcessBlock>Hi</ProcessBlock>
        </CaseBlock>
        {/* <CaseBlock condition="is 1">
          <ProcessBlock>:|</ProcessBlock>
        </CaseBlock> */}
        <CaseBlock condition="is 2">
          <ProcessBlock>:(</ProcessBlock>
        </CaseBlock>
      </SwitchBlock>

      <ProcessBlock>Exit</ProcessBlock>
    </Fragment>
  );
};
