import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { Button, Emoji } from 'components';
import {
  setSending,
  setError,
  setSent,
  useFormSubmissionDispatch,
} from 'components/FormSubmissionContext';
import {
  FormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormTextarea,
  FormErrorWarning,
} from './styles';

const errorsInitialState = {
  name: false,
  email: false,
  text: false,
};

export default function ContactForm() {
  const dispatchFormSubmission = useFormSubmissionDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [formErrors, setFormErrors] = useState(errorsInitialState);

  function handleChange(stateRef, data) {
    setFormData({ ...formData, [stateRef]: data });
    setFormErrors(errorsInitialState);
  }

  function validateForm() {
    const { name, email, text } = formData;
    if (validator.isEmpty(name) || !validator.isLength(name, { min: 2 })) {
      setFormErrors({ ...formErrors, name: true });
      return false;
    }
    if (!validator.isEmail(email)) {
      setFormErrors({ ...formErrors, email: true });
      return false;
    }
    if (!validator.isLength(text, { min: 4 })) {
      setFormErrors({ ...formErrors, text: true });
      return false;
    }

    return true;
  }

  async function handleFormSubmition(event, finalData) {
    event.preventDefault();
    if (validateForm()) {
      const { text, email, name } = finalData;
      dispatchFormSubmission(setSending());
      await axios
        .post(`${window.location.origin}/api/send-email`, {
          msg: text,
          email,
          subject: name,
          API_KEY: process.env.SENDGRID_API_KEY,
          EMAIL_SECRET: process.env.EMAIL_ADRESS,
        })
        .then(() => {
          dispatchFormSubmission(setSent());
        })
        .catch(() => dispatchFormSubmission(setError()));
    }
  }

  return (
    <FormWrapper id="contacto">
      <FormTitle>¿Tenés algo que enseñar? Contactanos</FormTitle>
      <Form onSubmit={e => handleFormSubmition(e, formData)}>
        <FormInput
          placeholder="Nombre"
          onChange={e => handleChange('name', e.target.value)}
        />
        <FormInput
          placeholder="Dirección de E-mail"
          onChange={e => handleChange('email', e.target.value)}
          type="email"
        />
        <FormTextarea
          placeholder="Contanos sobre tu empresa."
          onChange={e => handleChange('text', e.target.value)}
        />
        <Button label="Enviar" className="form-button" type="submit" />
      </Form>
      {formErrors !== errorsInitialState && (
        <FormErrorWarning>
          <Emoji symbol="🚨" label="Warning" /> Por favor, corrobora que los
          datos sean correctos.
        </FormErrorWarning>
      )}
    </FormWrapper>
  );
}
