import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const Button = styled.button`
  background-color: #1c48e6;
  border-radius: 40px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 0;
  outline: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 6;
  @media (hover: hover) {
    cursor: pointer;
  }
`;

export const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </Button>
);
