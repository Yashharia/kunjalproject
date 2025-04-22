import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormTextarea = styled.textarea`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

