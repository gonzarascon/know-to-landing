import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, colors, Utils } from 'constants';
import Emoji from 'components/Emoji';

const { readColor, calculateRem } = Utils;

const ButtonBox = styled(motion.button)`
  width: 100%;
  max-width: 350px;
  height: 75px;

  font-family: 'Work Sans', Arial, Helvetica, sans-serif;

  font-size: ${calculateRem(22)};

  border-radius: 43px;
  border: 3px solid #1c48e6;

  background-color: transparent;

  color: #1c48e6;
  font-weight: 600;
  transition: all ease 0.3s;

  & .emoji {
    margin-left: 10px;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background-color: #1c48e6;
      color: white;
    }
  }

  @media (hover: none) {
    background-color: #1c48e6;
    color: white;
  }
`;

function Button({ label, emoji, ...props }) {
  return (
    <ButtonBox {...props}>
      {label}
      {emoji && <Emoji symbol={emoji} label="Emoji" />}
    </ButtonBox>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
