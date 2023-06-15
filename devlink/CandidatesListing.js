import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidatesListing.module.css";

export function CandidatesListing({
  as: _Component = _Builtin.Block,
  slotSearch,
  slotCandidateListingCard,
  isLoading = true,
  isEmpty = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "candidates-listing-page")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "text-xxl-bold")} tag="div">
        {"My Candidates"}
      </_Builtin.Block>
      <_Builtin.Block tag="div">{slotSearch}</_Builtin.Block>
      {isEmpty ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-empty-state")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "coach-empty-image")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/648708b2f7d889bb3eb81d51_wishlist-tour-image.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold", "text-align-center")}
            tag="div"
          >
            {"You do not have any candidates yet"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isLoading ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-candidate-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_67e00740-2a81-63f0-22aa-cc7ecbbaada9-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_67e00740-2a81-63f0-22aa-cc7ecbbaadae-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_67e00740-2a81-63f0-22aa-cc7ecbbaadb3-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_640c7d5f-613a-eaa0-8be3-445affb1ccf5-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_640c7d5f-613a-eaa0-8be3-445affb1ccfa-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_640c7d5f-613a-eaa0-8be3-445affb1ccff-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_716a831b-cc5e-3707-b5e2-2d062ed582d0-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_716a831b-cc5e-3707-b5e2-2d062ed582d5-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_716a831b-cc5e-3707-b5e2-2d062ed582da-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-b4ed5245-48a7-2280-9e41-5978302cf0af-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-b4ed5245-48a7-2280-9e41-5978302cf0b4-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-b4ed5245-48a7-2280-9e41-5978302cf0b9-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_073c7ec2-c898-246f-eb42-26404d91d5ec-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_073c7ec2-c898-246f-eb42-26404d91d5f1-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_073c7ec2-c898-246f-eb42-26404d91d5f6-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a27ec540-2c0b-c2fd-1117-cc7472823e01-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a27ec540-2c0b-c2fd-1117-cc7472823e06-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a27ec540-2c0b-c2fd-1117-cc7472823e0b-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_09806ead-ad9f-24d3-1d12-86e596b2b5cb-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_09806ead-ad9f-24d3-1d12-86e596b2b5d0-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_09806ead-ad9f-24d3-1d12-86e596b2b5d5-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "career-candidate-card", "skeleton")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-main-detail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-profilepic")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"This is the default text value"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-progress-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-name-text", "skeleton")}
                tag="div"
              >
                {"Name's progress"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "candidate-progress-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ccb844fb-cc6c-9798-5ffa-2866bc8ba8fc-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Apfed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ccb844fb-cc6c-9798-5ffa-2866bc8ba901-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Offed"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "candidate-progress-block")}
                  id={_utils.cx(
                    _styles,
                    "w-node-ccb844fb-cc6c-9798-5ffa-2866bc8ba906-7aa4c0c8"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-xxxl-skeleton")}
                    tag="div"
                  >
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-md-skeleton")}
                    tag="div"
                  >
                    {"Decli"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      <_Builtin.Block
        className={_utils.cx(_styles, "slot-candidate-grid")}
        tag="div"
      >
        {slotCandidateListingCard}
      </_Builtin.Block>
    </_Component>
  );
}
