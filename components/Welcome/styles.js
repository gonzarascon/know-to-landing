import styled, { keyframes } from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';
const { readColor, calculateRem } = Utils;

const AnimateGradient = keyframes`
    0%{background-position:39% 0%}
    50%{background-position:62% 100%}
    100%{background-position:39% 0%}
`;

export const Welcome = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background: linear-gradient(52deg, #12172c, #1c48e6, #101c47, #101c47);
  background-size: 800% 800%;
  animation: ${AnimateGradient} 34s ease infinite;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: auto;
  right: 0;
  left: 0;
`;

export const SceneContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  padding: 15px;
  @media ${breakpoints.mediumDevice} {
    padding: 0;
  }
`;

export const SceneGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  padding: 25px;
  grid-template-rows: 50% 1fr;

  @media ${breakpoints.mediumDevice} {
    grid-template-rows: 1fr;
    grid-template-columns: 44% 1fr;
    grid-gap: 50px;
  }

  @media ${breakpoints.largeDevice} {
    grid-template-columns: 50% 1fr;
    grid-gap: 75px;
    padding: 50px;
  }
`;

export const SceneTitle = styled.h2`
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: ${calculateRem(30)};
  margin-top: 20px;
  color: white;
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 300px;
  & svg {
    width: 100%;
  }
`;

export const Screen = styled.figure`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const GridDescription = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const GridTitle = styled.h2`
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;

  margin-bottom: 20px;

  font-size: ${calculateRem(32)};

  @media ${breakpoints.largeDevice} {
    font-size: ${calculateRem(40)};
  }
`;

export const GridText = styled.p`
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  font-size: ${calculateRem(20)};
  line-height: ${calculateRem(27)};
  @media ${breakpoints.largeDevice} {
    font-size: ${calculateRem(25)};
  }
`;
