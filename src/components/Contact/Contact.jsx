import React, { useState } from 'react';
import {
  ContactSection,
  ContactGrid,
  ContactCard,
  ContactForm,
  Input,
  TextArea,
  SubmitBtn
} from './Contact.styles';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' });

  const onChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${state.name}`);
    const body = encodeURIComponent(`${state.message}\n\nFrom: ${state.name} <${state.email}>`);
    window.location.href = `mailto:davidqm7@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <ContactGrid>
        <ContactCard>
          <h3>Connect</h3>
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
        </ContactCard>

        <ContactForm onSubmit={onSubmit}>
          <h3>Send a message</h3>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={state.name}
            onChange={onChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={state.email}
            onChange={onChange}
            required
          />
          <TextArea
            name="message"
            placeholder="How can I help?"
            rows="6"
            value={state.message}
            onChange={onChange}
            required
          />
          <SubmitBtn type="submit">Send</SubmitBtn>
        </ContactForm>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact;