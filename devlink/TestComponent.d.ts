import * as React from "react";
import * as Types from "./types";

declare function TestComponent(props: {
  as?: React.ElementType;
  wrapperProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
