import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateDetailLayout.module.css";

export function CandidateDetailLayout({
  as: _Component = _Builtin.Block,
  slotCandidateDetailHeader,
  slotCandidateDetailTabs,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "candidate-detail-page")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-detail-header-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-detail-container")}
          tag="div"
        >
          {slotCandidateDetailHeader}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-detail-bottom-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-detail-container")}
          tag="div"
        >
          {slotCandidateDetailTabs}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
