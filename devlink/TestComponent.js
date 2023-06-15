import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TestComponent.module.css";

export function TestComponent({
  as: _Component = _Builtin.Block,
  wrapperProps = {},
}) {
  return (
    <_Component tag="div" {...wrapperProps}>
      <_Builtin.Block className={_utils.cx(_styles, "_w-content")} tag="div">
        <_Builtin.Block tag="div">
          {"This is some text inside of a div block."}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "_w-loading")} tag="div">
        <_Builtin.Block tag="div">{"loading"}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
