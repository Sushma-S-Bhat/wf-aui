import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EventPopupContent.module.css";

export function EventPopupContent({
  as: _Component = _Builtin.Block,
  imageProfilePic = "",
  textName = "Name",
  slotEventQa,
}) {
  return (
    <_Component className={_utils.cx(_styles, "event-popup-content")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-name-pic-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "event-info-candidate-pic")}
          loading="lazy"
          width="auto"
          height="auto"
          src={imageProfilePic}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {textName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "stack-column")} tag="div">
        {slotEventQa}
      </_Builtin.Block>
    </_Component>
  );
}
