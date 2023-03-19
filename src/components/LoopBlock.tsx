import { FC, Fragment, ReactNode } from "react";

type LoopBlockProps = {
  condition: string;
  children: ReactNode;
  variant?: "first" | "last" | undefined;
};
export const LoopBlock: FC<LoopBlockProps> = (props) => {
  const { condition, children, variant } = props;

  return (
    <div
      style={{
        paddingTop: variant === "last" ? "0" : "0.75em",
        paddingLeft: "0.75em",
        paddingRight: "0",
        paddingBottom: !(variant === "last") ? "0" : "0.75em",
        borderWidth: "0.15em",
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      {variant === "last" ? (
        <Fragment>
          <div
            style={{
              paddingBottom: "0.75em",
              marginLeft: "2.75em",
            }}
          >
            {children}
          </div>
          {condition}
        </Fragment>
      ) : (
        <Fragment>
          {condition}
          <div
            style={{
              paddingTop: "0.75em",
              marginLeft: "2.75em",
            }}
          >
            {children}
          </div>
        </Fragment>
      )}
    </div>
  );
};
