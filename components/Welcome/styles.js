import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';
const { readColor, calculateRem } = Utils;

export const Welcome = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  margin: auto;
  right: 0;
  left: 0;
`;

export const SceneContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SceneGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media ${breakpoints.largeDevice} {
    grid-template-columns: 30% 1fr;
  }
`;

export const SceneTitle = styled.h2`
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: ${calculateRem(30)};
  margin-top: 20px;
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 300px;
  & svg {
    width: 100%;
  }
`;
