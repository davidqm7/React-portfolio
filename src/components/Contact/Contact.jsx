import React, { useState } from 'react';
import {
  ContactSection,
  ContactGrid,
  ContactCard,
  ContactForm,
  Input,
  TextArea,
  SubmitBtn,
  ErrorMsg,
  SuccessBanner,
} from './Contact.styles';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = 'Name is required.';
  if (!email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';
  if (!message.trim()) errors.message = 'Message is required.';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const EMPTY = { name: '', email: '', message: '' };

const Contact = () => {
  const [state, setState] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = e => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const errs = validate(state);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${state.name}`);
    const body = encodeURIComponent(`${state.message}\n\nFrom: ${state.name} <${state.email}>`);
    window.location.href = `mailto:davidqm7@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setState(EMPTY);
    setErrors({});
  };

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <ContactGrid>
        <ContactCard>
          <h3>Connect</h3>
          <p className="tagline">
            Open to new opportunities, collaborations, and conversations.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/david-quintanilla-386621272/"
              target="_blank"
              rel="noreferrer"
              className="link linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/davidqm7"
              target="_blank"
              rel="noreferrer"
              className="link github"
            >
              <FaGithub /> GitHub
            </a>
            <a href="mailto:davidqm7@outlook.com" className="link email">
              <FaEnvelope /> Email
            </a>
          </div>
        </ContactCard>

        <ContactForm onSubmit={onSubmit} noValidate>
          <h3>Send a message</h3>

          {submitted && (
            <SuccessBanner>
              Your email client should have opened — thanks for reaching out!
            </SuccessBanner>
          )}

          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={state.name}
              onChange={onChange}
              aria-label="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={state.email}
              onChange={onChange}
              aria-label="Your email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          </div>

          <div>
            <TextArea
              name="message"
              placeholder="Your message"
              rows="6"
              value={state.message}
              onChange={onChange}
              aria-label="Your message"
              aria-invalid={!!errors.message}
            />
            {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
          </div>

          <SubmitBtn type="submit">Send</SubmitBtn>
        </ContactForm>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact;
