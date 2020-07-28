import styled from 'styled-components';
import { breakpoints, colors, Utils } from 'constants';
const { calculateRem, readColor } = Utils;

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  margin-top: 90px;
  max-width: 1000px;
  padding: 25px;
`;

export const FormTitle = styled.h2`
  font-size: ${calculateRem(30)};
  color: ${readColor(colors.blue)};
  font-weight: 600;
  margin-bottom: 20px;

  @media ${breakpoints.mediumDevice} {
    font-size: ${calculateRem(50)};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > input,
  & > textarea {
    border: none;
    outline: none;
    color: ${readColor(colors.blue)};
    font-size: ${calculateRem(20)};
    padding: 10px 20px;
    border-radius: 18px;

    &::placeholder {
      color: ${readColor(colors.blue)};
      font-weight: 300;
    }
  }

  & .form-button {
    margin: 20px auto;
    margin-top: 50px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin: 20px 0;
  height: 50px;

  @media ${breakpoints.mediumDevice} {
    width: 45%;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 250px;
  resize: none;
  font-family: 'Work Sans', sans-serif;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${readColor(colors.blue.darken(0.15).fade(0.25))};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const FormErrorWarning = styled.span`
  text-align: center;
  color: ${readColor(colors.blue)};
  font-size: ${calculateRem(20)};
`;
