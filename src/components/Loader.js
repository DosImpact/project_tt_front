import React from "react";
import styled, { keyframes } from "styled-components";
import { FaThinkPeaks } from "react-icons/fa";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  min-height: 50px;
  padding: 20px 10px;
  text-align: center;
`;

export default () => (
  <Loader>
    <FaThinkPeaks size={52} />
  </Loader>
);
