import React, { useEffect } from 'react';
import { Welcome, ContactForm, Emoji, Header, Features } from 'components';
import SVG from 'react-inlinesvg';
import {
  useFormSubmissionState,
  useFormSubmissionDispatch,
  setWaitingInput,
} from 'components/FormSubmissionContext';

import {
  Wrapper,
  ThankYou,
  FormSectionWrapper,
  ErrorSave,
  BottomSection,
} from './styles';

function Home() {
  const { sending, sent, error, waitingInput } = useFormSubmissionState();
  const FormSubmissionDispatch = useFormSubmissionDispatch();

  function renderFormSection() {
    if (waitingInput) {
      return <ContactForm />;
    } else if (sending) {
      return (
        <FormSectionWrapper id="contacto">
          <SVG src="./icons/loading-transparent.svg" />
        </FormSectionWrapper>
      );
    } else if (sent) {
      return (
        <FormSectionWrapper id="contacto">
          <ThankYou>
            Gracias por contactarte. ¡Te responderemos lo antes posible!{' '}
            <Emoji symbol="😄" label="Happy" />
          </ThankYou>
        </FormSectionWrapper>
      );
    } else if (error) {
      return (
        <FormSectionWrapper id="contacto">
          <ThankYou>Ups, algo salio mal...</ThankYou>
          <ErrorSave onClick={() => FormSubmissionDispatch(setWaitingInput())}>
            Por favor, intentalo otra vez. <Emoji symbol="🙏" label="Please" />
          </ErrorSave>
        </FormSectionWrapper>
      );
    }
  }

  return (
    <Wrapper>
      <Header />
      <Welcome />
      <Features />
      {renderFormSection()}
      <BottomSection>
        <a
          href="https://gonzarascon.com"
          target="_blank"
          rel="noopener noreferrer">
          Desarrollado por Gonzalo Rascón
        </a>
      </BottomSection>
    </Wrapper>
  );
}

export default Home;
