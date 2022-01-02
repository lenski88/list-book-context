import React from "react";
import styled from "styled-components";
import bg from "../video/bg.mp4";

export const VideoBg = () => {
  return (
    <>
      <StyledVideo src={bg} muted loop autoPlay></StyledVideo>
      <StyledOverlay></StyledOverlay>
    </>
  );
};

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .5;
  z-index: -100;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333745;
  mix-blend-mode: overlay;
`;
