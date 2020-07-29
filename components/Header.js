import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';
const { calculateRem, readColor } = Utils;

import { MenuToggle } from './MenuToggle';

const HeaderStyled = styled(motion.header)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  padding: 25px;
`;

const Navigation = styled(motion.nav)`
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101c47;

  @media ${breakpoints.mediumDevice} {
    width: 30%;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  font-size: ${calculateRem(25)};
  align-items: center;

  li {
    text-align: center;
    margin: 20px auto;
  }
`;

const NavVariants = {
  open: {
    right: '0px',
    display: 'flex',
    transition: {
      type: 'tween',
    },
  },
  closed: {
    right: '-30px',
    display: 'none',
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <HeaderStyled initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation variants={NavVariants}>
        <NavList>
          <li>
            <a href="#welcome" onClick={handleClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#features" onClick={handleClick}>
              Características
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={handleClick}>
              Contacto
            </a>
          </li>
        </NavList>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;
