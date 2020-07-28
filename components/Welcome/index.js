import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';

import {
  Welcome as Wrapper,
  SceneContainer,
  Logo,
  SceneTitle,
  SceneGridContainer,
  TimelineWrapper,
} from './styles';

export default function Welcome() {
  return (
    <Wrapper>
      <SceneContainer
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        initial={{ opacity: 0 }}>
        <Logo>
          <SVG src="/icons/logo_outline.svg" />
        </Logo>
        <SceneTitle>¡Un framework para tus cursos y capacitaciones!</SceneTitle>
      </SceneContainer>

      <SceneGridContainer>
        <Logo>Hola</Logo>
      </SceneGridContainer>
    </Wrapper>
  );
}
