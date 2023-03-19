import { FC } from "react";

import { Test } from "./structograms/test";

export const App: FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "45%",
      }}
    >
      <Test />
    </div>
  );
};
