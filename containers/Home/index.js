import React, { useEffect } from 'react';
import { Welcome, ContactForm, Emoji, Button, Features } from 'components';
import {
  useFormSubmissionState,
  useFormSubmissionDispatch,
  setWaitingInput,
} from 'components/FormSubmissionContext';

import { Wrapper, ThankYou, FormSectionWrapper, ErrorSave } from './styles';

function Home() {
  const { sending, sent, error, waitingInput } = useFormSubmissionState();
  const FormSubmissionDispatch = useFormSubmissionDispatch();

  function renderFormSection() {
    if (waitingInput) {
      return <ContactForm />;
    } else if (sending) {
      return (
        <FormSectionWrapper>
          <SVG src="./icons/loading-transparent.svg" />
        </FormSectionWrapper>
      );
    } else if (sent) {
      return (
        <FormSectionWrapper>
          <ThankYou>
            Gracias por contactarte. ¡Te responderemos lo antes posible!{' '}
            <Emoji symbol="😄" label="Happy" />
          </ThankYou>
        </FormSectionWrapper>
      );
    } else if (error) {
      return (
        <FormSectionWrapper>
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
      <Welcome />
      <Features />
      {renderFormSection()}
    </Wrapper>
  );
}

export default Home;
