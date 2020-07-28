import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';

import {
  Welcome as Wrapper,
  SceneContainer,
  Logo,
  SceneTitle,
  SceneGridContainer,
  TimelineWrapper,
  Screen,
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
        <Screen>
          <img src="/images/screen_front.png" alt="Vista Front-End" />
        </Screen>
      </SceneGridContainer>
      <SceneGridContainer>
        <Screen>
          <img src="/images/laptop_back.png" alt="Vista Back-End" />
        </Screen>
      </SceneGridContainer>
    </Wrapper>
  );
}
