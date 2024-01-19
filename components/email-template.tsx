import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ message, email
}) => (

  <div>
    <h1>Client: {email}</h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;