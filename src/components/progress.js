import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import React from "react";
import ReactTooltip from "react-tooltip";

export const Progress = () => (
  <>
    <ReactTooltip id="deadline">
      <span>August, 31</span>
    </ReactTooltip>
    <ProgressBar
      filledBackground="linear-gradient(to right, rgba(252, 252, 252, 0.6), rgba(252, 252, 252, 1))"
      height={3}
      percent={75}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            🌑
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            🌒
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            🌓
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            🌔
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            data-tip
            data-for="deadline"
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            🌕
          </div>
        )}
      </Step>
    </ProgressBar>
  </>
);
