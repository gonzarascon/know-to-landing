import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';

import Typed from 'react-typed';

import { ArrowDownOutlined } from '@ant-design/icons';

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
  ScrollArrow,
} from './styles';

export default function Welcome() {
  return (
    <>
      <span id="welcome" />
      <Controller>
        <Scene triggerHook="onLeave" duration={2000} pin>
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
                            ¡La solución para las capacitaciones en tu{' '}
                            <Typed
                              strings={['empresa', 'agencia', 'estudio']}
                              typeSpeed={30}
                              backSpeed={35}
                              backDelay={1500}
                              loop
                              showCursor={false}
                            />
                            !
                          </SceneTitle>
                          <ScrollArrow>
                            <span className="label">Descubre más</span>
                            <ArrowDownOutlined />
                          </ScrollArrow>
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
                              pierdan entre opciones complicadas e innecesarias
                              y puedan concentrarse en los contenidos.
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
                              curso. Carga de multimedia rápida gracias a
                              nuestra CDN.
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
    </>
  );
}
