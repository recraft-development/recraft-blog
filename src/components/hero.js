import React, { useLayoutEffect, useState } from "react";

import styles from "./hero.module.css";
import styled from "styled-components";
import { Progress } from "./progress";
import Stopwatch from "./stopwatch";
import { Clouds } from "./clouds";
import Layout from "./layout";

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const AudioPlayer = styled.audio`
  invert(100%);
  border-radius: 0;
  position: fixed;
`;

const ProgressWrapper = styled.div`
  padding: 0 20px;
  padding-bottom: 50px;
  width: 40%;
  //background: rgba(0, 0, 0, .4);
  //border-radius: 6px;
  opacity: 0.9;
  @keyframes fadeIn {
    from {
      opacity: 0.5;
    }
  }
  animation: fadeIn 8s infinite alternate;
`;

const StopwatchWrapper = styled.div`
  margin-top: 40px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  padding: 12px;
`;

const PlayBtn = styled.div`
  transition: all 0.4s;
  opacity: 0.6;
  &:hover {
    opacity: 0.8;
  }
`;

export default ({ data }) => {
  let [show, setShow] = useState(false);
  useLayoutEffect(() => {}, []);

  return (
    <div className={styles.hero}>
      <Clouds />

      <Content>
        <ProgressWrapper>
          <h1 css={"margin-bottom: 48px"}>
            <b>Progress</b>
          </h1>
          <Progress />
        </ProgressWrapper>
          <PlayBtn
              show={show}
              onClick={() => {
                  const audio = document.getElementById("bgm");
                  audio.volume = 0.3;
                  audio.play();
                  setShow(true);
              }}
              css={`
            margin-left: 16px;
          `}
          >
              <svg
                  width={"32px"}
                  className="button"
                  viewBox="0 0 60 60"
                  onClick={undefined}
              >
                  <polygon fill={"#fff"} points="0,0 50,30 0,60" />
              </svg>
          </PlayBtn>

        <StopwatchWrapper>
          <Stopwatch />
        </StopwatchWrapper>
      </Content>
      <AudioPlayer autoplay id="bgm" autoPlay src="/epic-sweden.mp3" />
      <div className={styles.heroDetails}>
        <p className={styles.heroTitle}>Patientia Vincit Omnia</p>
      </div>
    </div>
  );
};
