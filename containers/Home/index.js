import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import SVG from 'react-inlinesvg';
import { Welcome, ContactForm, Emoji, Button } from 'components';
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
            Thanks for contacting me, I will respond you as soon as possible{' '}
            <Emoji symbol="😄" label="Happy" />
          </ThankYou>
        </FormSectionWrapper>
      );
    } else if (error) {
      return (
        <FormSectionWrapper>
          <ThankYou>Sorry, something went wrong.</ThankYou>
          <ErrorSave onClick={() => FormSubmissionDispatch(setWaitingInput())}>
            Please try again <Emoji symbol="🙏" label="Please" />
          </ErrorSave>
        </FormSectionWrapper>
      );
    }
  }

  return (
    <Wrapper>
      <Welcome />
    </Wrapper>
  );
}

export default Home;
