import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EventQa.module.css";

export function EventQa({
  as: _Component = _Builtin.Block,
  textAnswer = "Answer",
  textQuestion = "Question",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "question-answer-wrap")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "text-md-bold")} tag="div">
        {textQuestion}
      </_Builtin.Block>
      <_Builtin.Block tag="div">{textAnswer}</_Builtin.Block>
    </_Component>
  );
}
