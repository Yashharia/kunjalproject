import { useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "./contact.styles";

const Contact = () => {
    const emptyFormFields = {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      };
  const [formField, setFormField] = useState(emptyFormFields);

  const onContactFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact-form", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formField),
      });

      const data = await response.json(); // ✅ this is the actual response body

      if (response.ok) {
        alert(data.success); // ✅ show success message from backend
        setFormField(emptyFormFields)
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Failed to submit form: " + error.message);
    }
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <p>We’d love to hear from you! Fill out the form below.</p>

      <ContactForm onSubmit={onContactFormSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={formField.name}
          onChange={(e) => {
            console.log(formField);
            setFormField({ ...formField, name: e.target.value });
          }}
          required
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={formField.email}
          onChange={(e) => {
            console.log(formField);
            setFormField({ ...formField, email: e.target.value });
          }}
          required
        />

        <FormLabel htmlFor="Phone Number">Phone Number</FormLabel>
        <FormInput
          type="tel"
          name="phoneNumber"
          value={formField.phoneNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,10}$/.test(value)) {
              setFormField({ ...formField, phoneNumber: value });
            }
          }}
          placeholder="Enter 10-digit phone number"
          required
        />

        <FormLabel htmlFor="message">Message</FormLabel>
        <FormTextarea
          id="message"
          name="message"
          rows="5"
          value={formField.message}
          onChange={(e) => {
            console.log(formField);
            setFormField({ ...formField, message: e.target.value });
          }}
          required
        />

        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
