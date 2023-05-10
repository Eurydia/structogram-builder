import { FC } from "react";
import {
  Pattern,
  Algo,
} from "./structograms/BirthOfGraduateBySeason";

export const App: FC = () => {
  return (
    <div className="structogram">
      <Pattern />
    </div>
  );
};
