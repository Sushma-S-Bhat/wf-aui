import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonPrimary.module.css";

export function ButtonPrimary({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "button")} tag="div">
      <_Builtin.Block tag="div">{"Button"}</_Builtin.Block>
    </_Component>
  );
}