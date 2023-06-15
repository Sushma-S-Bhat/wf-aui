import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateDetailTabs.module.css";

export function CandidateDetailTabs({
  as: _Component = _Builtin.TabsWrapper,
  slotQa,
  isQaEmpty = true,
  isProgressEmpty = true,
  slotProgress,
  slotSearchJob,
  isJobEmpty = true,
  isJobLoading = true,
  slotCoachJobCard,
  isJobListing = true,
  isJobDetail = true,
  slotPlanDetails,
  slotJobDetails,
  onClickBack = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "candidates-tab")}
      current="Tab 3"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <_Builtin.TabsMenu
        className={_utils.cx(_styles, "candidate-tabs-menu")}
        tag="div"
      >
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "candidate-tab-link")}
          data-w-tab="Tab 1"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "link-embed-icon")}
            value="%3Csvg%20width%3D%2223%22%20height%3D%2219%22%20viewBox%3D%220%200%2023%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.55469%2017.4375C5.27865%2017.4375%205.0651%2017.3516%204.91406%2017.1797C4.76823%2017.013%204.69531%2016.7786%204.69531%2016.4766V14.3359H3.66406C2.98698%2014.3359%202.39323%2014.2057%201.88281%2013.9453C1.3776%2013.6797%200.984375%2013.2969%200.703125%2012.7969C0.421875%2012.2969%200.28125%2011.6927%200.28125%2010.9844V3.78906C0.28125%203.08594%200.421875%202.48438%200.703125%201.98438C0.984375%201.48438%201.3776%201.10156%201.88281%200.835938C2.39323%200.570312%202.98698%200.4375%203.66406%200.4375H14.8438C15.5521%200.4375%2016.1589%200.570312%2016.6641%200.835938C17.1693%201.10156%2017.5547%201.48438%2017.8203%201.98438C18.0911%202.48438%2018.2266%203.08594%2018.2266%203.78906V4.92969H16.9688V3.83594C16.9688%203.10677%2016.7734%202.55469%2016.3828%202.17969C15.9974%201.80469%2015.4583%201.61719%2014.7656%201.61719H3.74219C3.04948%201.61719%202.50781%201.80469%202.11719%202.17969C1.73177%202.55469%201.53906%203.10677%201.53906%203.83594V10.9531C1.53906%2011.6823%201.73177%2012.2344%202.11719%2012.6094C2.50781%2012.9792%203.04948%2013.1641%203.74219%2013.1641H5.26562C5.4375%2013.1641%205.58073%2013.2188%205.69531%2013.3281C5.8151%2013.4323%205.875%2013.5938%205.875%2013.8125V16.0469L9.125%2013.0469L10.0312%2013.9219L6.75%2016.8594C6.5%2017.0781%206.28906%2017.2292%206.11719%2017.3125C5.94531%2017.3958%205.75781%2017.4375%205.55469%2017.4375ZM18.2812%2018.3125C18.0938%2018.3125%2017.9219%2018.2604%2017.7656%2018.1562C17.6094%2018.0521%2017.4115%2017.8984%2017.1719%2017.6953L14.5625%2015.4609H11.8672C11.1849%2015.4609%2010.599%2015.3333%2010.1094%2015.0781C9.625%2014.8281%209.2526%2014.4635%208.99219%2013.9844C8.73698%2013.5%208.60938%2012.9167%208.60938%2012.2344V7.61719C8.60938%206.9349%208.73698%206.35417%208.99219%205.875C9.2526%205.39062%209.625%205.02083%2010.1094%204.76562C10.599%204.51042%2011.1849%204.38281%2011.8672%204.38281H19.4531C20.1042%204.38281%2020.6745%204.51042%2021.1641%204.76562C21.6536%205.02083%2022.0339%205.39062%2022.3047%205.875C22.5807%206.35417%2022.7188%206.9349%2022.7188%207.61719V12.2344C22.7188%2012.9167%2022.5807%2013.4974%2022.3047%2013.9766C22.0339%2014.4557%2021.6536%2014.8229%2021.1641%2015.0781C20.6745%2015.3333%2020.1042%2015.4609%2019.4531%2015.4609H19.125V17.3359C19.125%2017.6328%2019.0521%2017.8698%2018.9062%2018.0469C18.7604%2018.224%2018.5521%2018.3125%2018.2812%2018.3125ZM17.9531%2016.8984V14.9219C17.9531%2014.7031%2018.0104%2014.5417%2018.125%2014.4375C18.2448%2014.3333%2018.388%2014.2812%2018.5547%2014.2812H19.3828C20.0286%2014.2812%2020.5365%2014.1068%2020.9062%2013.7578C21.276%2013.4036%2021.4609%2012.8828%2021.4609%2012.1953V7.65625C21.4609%206.96875%2021.276%206.44792%2020.9062%206.09375C20.5417%205.73958%2020.0339%205.5625%2019.3828%205.5625H11.9453C11.2943%205.5625%2010.7839%205.73958%2010.4141%206.09375C10.0495%206.44792%209.86719%206.96875%209.86719%207.65625L9.85938%2012.1953C9.85938%2012.888%2010.0443%2013.4089%2010.4141%2013.7578C10.7839%2014.1068%2011.2943%2014.2812%2011.9453%2014.2812H14.5156C14.7292%2014.2812%2014.8984%2014.3099%2015.0234%2014.3672C15.1484%2014.4193%2015.2891%2014.513%2015.4453%2014.6484L17.9531%2016.8984Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tab-link-text")}
            tag="div"
          >
            {"Question & Answer"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "candidate-tab-link")}
          data-w-tab="Tab 2"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "link-embed-icon")}
            value="%3Csvg%20width%3D%2220%22%20height%3D%2215%22%20viewBox%3D%220%200%2020%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.91406%2014.7109C1.30469%2014.7109%200.84375%2014.5651%200.53125%2014.2734C0.223958%2013.9818%200.0703125%2013.5469%200.0703125%2012.9688V6.30469C0.0703125%205.72656%200.223958%205.29167%200.53125%205C0.84375%204.70312%201.30469%204.55469%201.91406%204.55469H4.01562C4.625%204.55469%205.08594%204.70312%205.39844%205C5.71094%205.29167%205.86719%205.72656%205.86719%206.30469V12.9688C5.86719%2013.5469%205.71094%2013.9818%205.39844%2014.2734C5.08594%2014.5651%204.625%2014.7109%204.01562%2014.7109H1.91406ZM2.11719%2013.5312H3.8125C4.11458%2013.5312%204.32552%2013.4714%204.44531%2013.3516C4.5651%2013.237%204.625%2013.0339%204.625%2012.7422V6.53125C4.625%206.23438%204.5651%206.02865%204.44531%205.91406C4.32552%205.79427%204.11458%205.73438%203.8125%205.73438H2.11719C1.82031%205.73438%201.61198%205.79427%201.49219%205.91406C1.3724%206.02865%201.3125%206.23438%201.3125%206.53125V12.7422C1.3125%2013.0339%201.3724%2013.237%201.49219%2013.3516C1.61198%2013.4714%201.82031%2013.5312%202.11719%2013.5312ZM8.9375%2014.7109C8.32812%2014.7109%207.86719%2014.5651%207.55469%2014.2734C7.2474%2013.9818%207.09375%2013.5469%207.09375%2012.9688V4.03125C7.09375%203.45312%207.2474%203.01823%207.55469%202.72656C7.86719%202.42969%208.32812%202.28125%208.9375%202.28125H11.0469C11.6562%202.28125%2012.1146%202.42969%2012.4219%202.72656C12.7344%203.01823%2012.8906%203.45312%2012.8906%204.03125V12.9688C12.8906%2013.5469%2012.7344%2013.9818%2012.4219%2014.2734C12.1146%2014.5651%2011.6562%2014.7109%2011.0469%2014.7109H8.9375ZM9.14844%2013.5312H10.8438C11.1406%2013.5312%2011.349%2013.4714%2011.4688%2013.3516C11.5885%2013.237%2011.6484%2013.0339%2011.6484%2012.7422V4.25781C11.6484%203.96615%2011.5885%203.76042%2011.4688%203.64062C11.349%203.52083%2011.1406%203.46094%2010.8438%203.46094H9.14844C8.84635%203.46094%208.63542%203.52083%208.51562%203.64062C8.39583%203.76042%208.33594%203.96615%208.33594%204.25781V12.7422C8.33594%2013.0339%208.39583%2013.237%208.51562%2013.3516C8.63542%2013.4714%208.84635%2013.5312%209.14844%2013.5312ZM15.9609%2014.7109C15.3568%2014.7109%2014.8984%2014.5651%2014.5859%2014.2734C14.2786%2013.9818%2014.125%2013.5469%2014.125%2012.9688V1.75C14.125%201.17188%2014.2786%200.736979%2014.5859%200.445312C14.8984%200.148438%2015.3568%200%2015.9609%200H18.0703C18.6797%200%2019.1406%200.148438%2019.4531%200.445312C19.7656%200.736979%2019.9219%201.17188%2019.9219%201.75V12.9688C19.9219%2013.5469%2019.7656%2013.9818%2019.4531%2014.2734C19.1406%2014.5651%2018.6797%2014.7109%2018.0703%2014.7109H15.9609ZM16.1719%2013.5312H17.8672C18.1693%2013.5312%2018.3802%2013.4714%2018.5%2013.3516C18.6198%2013.237%2018.6797%2013.0339%2018.6797%2012.7422V1.97656C18.6797%201.67969%2018.6198%201.47396%2018.5%201.35938C18.3802%201.23958%2018.1693%201.17969%2017.8672%201.17969H16.1719C15.875%201.17969%2015.6667%201.23958%2015.5469%201.35938C15.4271%201.47396%2015.3672%201.67969%2015.3672%201.97656V12.7422C15.3672%2013.0339%2015.4271%2013.237%2015.5469%2013.3516C15.6667%2013.4714%2015.875%2013.5312%2016.1719%2013.5312Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tab-link-text")}
            tag="div"
          >
            {"View Progress"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "candidate-tab-link")}
          data-w-tab="Tab 3"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "link-embed-icon")}
            value="%3Csvg%20width%3D%2211%22%20height%3D%2219%22%20viewBox%3D%220%200%2011%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.273438%204.84375C0.273438%204.17188%200.40625%203.54427%200.671875%202.96094C0.942708%202.3776%201.3151%201.86719%201.78906%201.42969C2.26823%200.986979%202.82292%200.643229%203.45312%200.398438C4.08854%200.153646%204.77083%200.03125%205.5%200.03125C6.22917%200.03125%206.91146%200.153646%207.54688%200.398438C8.18229%200.643229%208.73698%200.986979%209.21094%201.42969C9.6901%201.86719%2010.0625%202.3776%2010.3281%202.96094C10.5938%203.54427%2010.7266%204.17188%2010.7266%204.84375C10.7266%205.44792%2010.6641%205.98177%2010.5391%206.44531C10.4193%206.90365%2010.263%207.35417%2010.0703%207.79688C9.8776%208.23958%209.67188%208.72656%209.45312%209.25781C9.23958%209.78906%209.04167%2010.4193%208.85938%2011.1484C8.67708%2011.8724%208.53646%2012.7552%208.4375%2013.7969C8.42188%2013.9375%208.3724%2014.0495%208.28906%2014.1328C8.21094%2014.2161%208.09635%2014.2578%207.94531%2014.2578H3.05469C2.90365%2014.2578%202.78906%2014.2161%202.71094%2014.1328C2.63281%2014.0495%202.58594%2013.9375%202.57031%2013.7969C2.47135%2012.7552%202.32812%2011.8724%202.14062%2011.1484C1.95833%2010.4193%201.76042%209.78906%201.54688%209.25781C1.33333%208.72656%201.13021%208.23958%200.9375%207.79688C0.744792%207.35417%200.585938%206.90365%200.460938%206.44531C0.335938%205.98177%200.273438%205.44792%200.273438%204.84375ZM1.45312%204.84375C1.45312%205.29167%201.50521%205.69271%201.60938%206.04688C1.71354%206.40104%201.84896%206.76562%202.01562%207.14062C2.1875%207.51562%202.3724%207.95573%202.57031%208.46094C2.76823%208.96615%202.96094%209.58854%203.14844%2010.3281C3.34115%2011.0677%203.50781%2011.9844%203.64844%2013.0781H7.35938C7.5%2011.9844%207.66406%2011.0677%207.85156%2010.3281C8.03906%209.58854%208.23177%208.96615%208.42969%208.46094C8.6276%207.95573%208.8099%207.51562%208.97656%207.14062C9.14844%206.76562%209.28646%206.40104%209.39062%206.04688C9.49479%205.69271%209.54688%205.29167%209.54688%204.84375C9.54688%204.31771%209.4401%203.83333%209.22656%203.39062C9.01823%202.94792%208.72656%202.5651%208.35156%202.24219C7.97656%201.91406%207.54427%201.66146%207.05469%201.48438C6.57031%201.30208%206.05208%201.21094%205.5%201.21094C4.95312%201.21094%204.4349%201.30208%203.94531%201.48438C3.46094%201.66146%203.03125%201.91406%202.65625%202.24219C2.28125%202.5651%201.98698%202.94792%201.77344%203.39062C1.5599%203.83333%201.45312%204.31771%201.45312%204.84375ZM3.03125%2015.9453C2.90104%2015.9453%202.79167%2015.901%202.70312%2015.8125C2.61458%2015.724%202.57031%2015.6146%202.57031%2015.4844C2.57031%2015.3594%202.61458%2015.2526%202.70312%2015.1641C2.79167%2015.0755%202.90104%2015.0312%203.03125%2015.0312H7.97656C8.10156%2015.0312%208.20833%2015.0755%208.29688%2015.1641C8.38542%2015.2526%208.42969%2015.3594%208.42969%2015.4844C8.42969%2015.6146%208.38542%2015.724%208.29688%2015.8125C8.20833%2015.901%208.10156%2015.9453%207.97656%2015.9453H3.03125ZM5.5%2018.2109C4.89062%2018.2109%204.36198%2018.0729%203.91406%2017.7969C3.47135%2017.526%203.23698%2017.1667%203.21094%2016.7188H7.79688C7.76042%2017.1667%207.51823%2017.526%207.07031%2017.7969C6.6276%2018.0729%206.10417%2018.2109%205.5%2018.2109Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tab-link-text")}
            tag="div"
          >
            {"Suggest a job"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "candidate-tab-link")}
          data-w-tab="Tab 4"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "link-embed-icon")}
            value="%3Csvg%20width%3D%2218%22%20height%3D%2217%22%20viewBox%3D%220%200%2018%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.19531%2016.9453C4.92448%2016.9453%204.71354%2016.8542%204.5625%2016.6719C4.41667%2016.4948%204.34375%2016.2552%204.34375%2015.9531V13.9219H3.96875C3.19271%2013.9219%202.53906%2013.7839%202.00781%2013.5078C1.47656%2013.2266%201.07292%2012.8203%200.796875%2012.2891C0.526042%2011.7578%200.390625%2011.1094%200.390625%2010.3438V4.35938C0.390625%203.59375%200.526042%202.94531%200.796875%202.41406C1.07292%201.88281%201.47656%201.47917%202.00781%201.20312C2.53906%200.921875%203.19271%200.78125%203.96875%200.78125H14.0312C14.8073%200.78125%2015.4609%200.921875%2015.9922%201.20312C16.5234%201.47917%2016.9245%201.88281%2017.1953%202.41406C17.4714%202.94531%2017.6094%203.59375%2017.6094%204.35938V10.3438C17.6094%2011.1094%2017.4714%2011.7578%2017.1953%2012.2891C16.9245%2012.8203%2016.5234%2013.2266%2015.9922%2013.5078C15.4609%2013.7839%2014.8073%2013.9219%2014.0312%2013.9219H9.01562L6.32031%2016.3203C6.08594%2016.5286%205.88802%2016.6849%205.72656%2016.7891C5.5651%2016.8932%205.38802%2016.9453%205.19531%2016.9453ZM5.51562%2015.5156L8.01562%2013.0312C8.16146%2012.8802%208.30208%2012.7812%208.4375%2012.7344C8.57292%2012.6875%208.75%2012.6641%208.96875%2012.6641H14.0312C14.8177%2012.6641%2015.401%2012.4688%2015.7812%2012.0781C16.1615%2011.6823%2016.3516%2011.1016%2016.3516%2010.3359V4.35938C16.3516%203.59896%2016.1615%203.02344%2015.7812%202.63281C15.401%202.23698%2014.8177%202.03906%2014.0312%202.03906H3.96875C3.17708%202.03906%202.59115%202.23698%202.21094%202.63281C1.83594%203.02344%201.64844%203.59896%201.64844%204.35938V10.3359C1.64844%2011.1016%201.83594%2011.6823%202.21094%2012.0781C2.59115%2012.4688%203.17708%2012.6641%203.96875%2012.6641H4.92969C5.14323%2012.6641%205.29427%2012.7083%205.38281%2012.7969C5.47135%2012.8854%205.51562%2013.0365%205.51562%2013.25V15.5156Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "tab-link-text")}
            tag="div"
          >
            {"Plan details"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
      </_Builtin.TabsMenu>
      <_Builtin.TabsContent tag="div">
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
          <_Builtin.Block tag="div">
            {isQaEmpty ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-empty-state")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "coach-empty-image")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6488569aaa0ebba938408f66_empty-job.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-lg-bold",
                    "text-align-center"
                  )}
                  tag="div"
                >
                  {"Nothing found"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block tag="div">{slotQa}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
          <_Builtin.Block tag="div">
            {isProgressEmpty ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-empty-state")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "coach-empty-image")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6488569aaa0ebba938408f66_empty-job.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-lg-bold",
                    "text-align-center"
                  )}
                  tag="div"
                >
                  {"Nothing found"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block tag="div">{slotProgress}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
          <_Builtin.Block tag="div">
            {isJobListing ? (
              <_Builtin.Block tag="div">
                <_Builtin.Block tag="div">{slotSearchJob}</_Builtin.Block>
                {isJobEmpty ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coach-empty-state")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "coach-empty-image")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6488569aaa0ebba938408f66_empty-job.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-lg-bold",
                        "text-align-center"
                      )}
                      tag="div"
                    >
                      {"No jobs found."}
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-job-listing-grid")}
                  tag="div"
                >
                  {slotCoachJobCard}
                </_Builtin.Block>
                {isJobLoading ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coach-job-listing-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "coach-job-card",
                        "skeleton"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-logo-wrap")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "coach-job-detail-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-detail-row-stack"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "text-lg-skeleton")}
                            tag="div"
                          >
                            {"Job Title"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "job-type-chip",
                              "skeleton"
                            )}
                            tag="div"
                          >
                            {"Job-Type"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Location"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-md-skeleton")}
                          tag="div"
                        >
                          {"Posted day"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            ) : null}
            {isJobDetail ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-job-detail")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button",
                    "is-blue",
                    "align-left"
                  )}
                  tag="div"
                  {...onClickBack}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "link-embed-icon")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-arrow-left%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M15%208a.5.5%200%200%200-.5-.5H2.707l3.147-3.146a.5.5%200%201%200-.708-.708l-4%204a.5.5%200%200%200%200%20.708l4%204a.5.5%200%200%200%20.708-.708L2.707%208.5H14.5A.5.5%200%200%200%2015%208z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Back to search"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">{slotJobDetails}</_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 4">
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">{slotPlanDetails}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.TabsPane>
      </_Builtin.TabsContent>
    </_Component>
  );
}
