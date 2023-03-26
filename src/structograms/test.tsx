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
      {/* <ProcessBlock>In: N</ProcessBlock>
      <ProcessBlock>In: AQ[1..N, 1..2]</ProcessBlock>
      <ProcessBlock>result := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 2..N">
        <SwitchBlock condition="cmp(i)">
          <CaseBlock condition="True">
            <ProcessBlock>result := result + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
      <ProcessBlock>return result</ProcessBlock> */}
      <ProcessBlock>In: N</ProcessBlock>
      <ProcessBlock>In: AQ[1..N, 1..2]</ProcessBlock>
      <ProcessBlock>result := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 2..N">
        <ProcessBlock>
          prev_morning := AQ[i - 1, 1],
          <br />
          prev_evening := AQ[i - 1, 2],
          <br />
          curr_morning := AQ[i, 1],
          <br />
          curr_evening := AQ[i, 2]
        </ProcessBlock>
        <SwitchBlock condition="curr_morning > prev_morning AND curr_evening > prev_evening">
          <CaseBlock condition="True">
            <ProcessBlock>result := result + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
      <ProcessBlock>return result</ProcessBlock>
    </Fragment>
  );
};
