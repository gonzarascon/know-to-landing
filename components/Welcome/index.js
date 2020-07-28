import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import {
  Welcome as Wrapper,
  SceneContainer,
  Logo,
  SceneTitle,
  SceneGridContainer,
  TimelineWrapper,
  Screen,
  GridDescription,
  GridTitle,
  GridText,
} from './styles';

export default function Welcome() {
  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={3000} pin indicators>
        {progress => (
          <Wrapper>
            <TimelineWrapper>
              <Timeline totalProgress={progress} paused>
                <Timeline
                  target={
                    <>
                      <SceneContainer>
                        <Logo>
                          <SVG src="/icons/logo_outline.svg" />
                        </Logo>
                        <SceneTitle>
                          ¡Un framework para tus cursos y capacitaciones!
                        </SceneTitle>
                      </SceneContainer>
                    </>
                  }>
                  <Tween to={{ opacity: 0 }}></Tween>
                </Timeline>

                <Timeline
                  target={
                    <>
                      <SceneGridContainer>
                        <Screen>
                          <img
                            src="/images/screen_front.png"
                            alt="Vista Front-End"
                          />
                        </Screen>
                        <GridDescription>
                          <GridTitle>
                            Simple para tus usuarios y para vos.
                          </GridTitle>
                          <GridText>
                            Interfaz minimalista, para que tus usuarios no se
                            pierdan entre opciones complicadas e innecesarias y
                            puedan concentrarse en los contenidos.
                          </GridText>
                        </GridDescription>
                      </SceneGridContainer>
                    </>
                  }>
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}></Tween>
                  <Tween to={{ opacity: 0 }}></Tween>
                </Timeline>
                <Timeline
                  target={
                    <>
                      <SceneGridContainer>
                        <Screen>
                          <img
                            src="/images/laptop_back.png"
                            alt="Vista Back-End"
                          />
                        </Screen>
                        <GridDescription>
                          <GridTitle>
                            Carga de contenido sencilla y en el acto.
                          </GridTitle>
                          <GridText>
                            Administrador de contenidos user-friendly, todo lo
                            que cargas será modificado en el momento en tu
                            curso. Carga de multimedia rápida gracias a nuestra
                            CDN.
                          </GridText>
                        </GridDescription>
                      </SceneGridContainer>
                    </>
                  }>
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}></Tween>
                </Timeline>
              </Timeline>
            </TimelineWrapper>
          </Wrapper>
        )}
      </Scene>
    </Controller>
  );
}
