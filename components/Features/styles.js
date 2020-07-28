import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';

const { readColor, calculateRem } = Utils;

export const FeaturesContainer = styled.section`
  padding: 25px;
  padding-top: 50px;
`;

export const FeaturesTitle = styled.h3`
  font-size: ${calculateRem(25)};
  text-align: center;
  font-weight: bolder;
  margin-bottom: 50px;
  line-height: ${calculateRem(30)};

  color: ${readColor(colors.blue)};

  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(30)};
    margin-bottom: 100px;
  }
`;

export const FeaturesGrid = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  grid-gap: 50px;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
  @media ${breakpoints.mediumDevice} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export const Feature = styled.li`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.75);
  border-radius: 18px;
  min-height: 228px;

  & .anticon {
    height: 50px;
    width: 100%;
    svg {
      height: 100%;
      width: 100%;
    }
  }
  @media ${breakpoints.mediumDevice} {
    padding: 30px 50px;
  }

  @media ${breakpoints.largeDevice} {
    padding: 30px 75px;
  }
`;

export const FeatureTitle = styled.h4`
  font-size: ${calculateRem(20)};
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: ${calculateRem(16)};
`;
