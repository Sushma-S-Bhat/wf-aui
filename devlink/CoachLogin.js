import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachLogin.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-131":{"id":"e-131","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"178f90fa-ea1e-fdf9-5b9d-b642ca821dea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"178f90fa-ea1e-fdf9-5b9d-b642ca821dea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686727277591},"e-133":{"id":"e-133","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"178f90fa-ea1e-fdf9-5b9d-b642ca821df1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"178f90fa-ea1e-fdf9-5b9d-b642ca821df1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686727350446},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685f4a5c-775a-5b40-7080-6ebb2dd1ddfe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686828829185},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685f4a5c-775a-5b40-7080-6ebb2dd1ddc4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686829115421}},"actionLists":{"a-92":{"id":"a-92","title":"coach-request-popup-open","actionItemGroups":[{"actionItems":[{"id":"a-92-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".coach-request-popup","selectorGuids":["6d80813d-5e70-9856-9a0e-37c34647d3e8"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686727283548},"a-93":{"id":"a-93","title":"coach-request-popup-close","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".coach-request-popup","selectorGuids":["6d80813d-5e70-9856-9a0e-37c34647d3e8"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686727283548}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachLogin({
  as: _Component = _Builtin.Block,
  slotForm,
  onClickSubmit = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "coach-login-layout")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-login-grid")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-login-content-left")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "signin-image-wrap")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "signin-image")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/64896fb12ff868fe90617fa8_signin.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-login-content-right")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxl-bold")}
              tag="div"
            >
              {"Welcome back!"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxl-bold")}
              tag="div"
            >
              {"Please Login to your account"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">{slotForm}</_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "is-green", "align-right")}
            button={false}
            options={{
              href: "/dashboard",
            }}
          >
            <_Builtin.Block tag="div">{"Login"}</_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "request-for-coach-text",
              "text-md-bold"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              {"Don't have an account?"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "request-coach-text")}
              data-w-id="178f90fa-ea1e-fdf9-5b9d-b642ca821dea"
              tag="div"
            >
              {"Request to become a Coach"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-request-popup")}
            tag="div"
          >
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "request-for-coach-formblock")}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "popup-header")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Request to become a Coach"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "event-popup-close")}
                  data-w-id="178f90fa-ea1e-fdf9-5b9d-b642ca821df1"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M1.13379%2011.4307C1.27051%2011.5628%201.42773%2011.6494%201.60547%2011.6904C1.78776%2011.736%201.96549%2011.736%202.13867%2011.6904C2.31641%2011.6494%202.46908%2011.5674%202.59668%2011.4443L6.5%207.54102L10.3965%2011.4375C10.5241%2011.5697%2010.6768%2011.6562%2010.8545%2011.6973C11.0322%2011.7383%2011.21%2011.736%2011.3877%2011.6904C11.5654%2011.6494%2011.7204%2011.5628%2011.8525%2011.4307C11.9847%2011.2985%2012.0713%2011.1436%2012.1123%2010.9658C12.1579%2010.7881%2012.1602%2010.6104%2012.1191%2010.4326C12.0781%2010.2549%2011.9938%2010.1022%2011.8662%209.97461L7.96973%206.07129L11.8662%202.1748C11.9938%202.04264%2012.0781%201.88997%2012.1191%201.7168C12.1647%201.53906%2012.1647%201.36133%2012.1191%201.18359C12.0736%201.00586%2011.9847%200.850911%2011.8525%200.71875C11.7158%200.586589%2011.5586%200.497721%2011.3809%200.452148C11.2077%200.406576%2011.0322%200.406576%2010.8545%200.452148C10.6768%200.493164%2010.5241%200.577474%2010.3965%200.705078L6.5%204.60156L2.59668%200.705078C2.46908%200.577474%202.31641%200.493164%202.13867%200.452148C1.96094%200.411133%201.78092%200.411133%201.59863%200.452148C1.4209%200.493164%201.26595%200.582031%201.13379%200.71875C1.00618%200.850911%200.919596%201.00586%200.874023%201.18359C0.833008%201.36133%200.833008%201.53906%200.874023%201.7168C0.919596%201.89453%201.00391%202.04492%201.12695%202.16797L5.03027%206.07129L1.12695%209.98145C1.00391%2010.1045%200.919596%2010.2549%200.874023%2010.4326C0.828451%2010.6058%200.826172%2010.7835%200.867188%2010.9658C0.91276%2011.1436%201.00163%2011.2985%201.13379%2011.4307Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E" />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "request-for-coach-form")}
                name="wf-form-"
                data-name="request-coach-form"
                method="get"
                id="request-coach-form"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "request-coach-input-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="name-3"
                  data-name="Name 3"
                  placeholder="Name"
                  type="text"
                  disabled={false}
                  required={false}
                  id="name-3"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "request-coach-input-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="email-4"
                  data-name="Email 4"
                  placeholder="Email"
                  type="text"
                  disabled={false}
                  required={true}
                  id="email-4"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "request-coach-input-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="phone-2"
                  data-name="Phone 2"
                  placeholder="Contact number"
                  type="tel"
                  disabled={false}
                  required={true}
                  id="phone-2"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "request-coach-input-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="designation-2"
                  data-name="Designation 2"
                  placeholder="Designation"
                  type="text"
                  disabled={false}
                  required={true}
                  id="designation-2"
                />
                <_Builtin.FormTextarea
                  className={_utils.cx(
                    _styles,
                    "request-coach-input-field",
                    "text-area"
                  )}
                  name="field-2"
                  maxLength={5000}
                  data-name="Field 2"
                  placeholder="Hello, I am a part of Aglint's coaching success team. Let me know how I can help and I'll do my best"
                  required={false}
                  autoFocus={false}
                  id="field-2"
                />
                <_Builtin.FormButton
                  className={_utils.cx(
                    _styles,
                    "coach-form-submit",
                    "is-green"
                  )}
                  type="submit"
                  value="Submit request"
                  data-wait="Please wait..."
                  {...onClickSubmit}
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(_styles, "request-submit-success-message")}
              >
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
