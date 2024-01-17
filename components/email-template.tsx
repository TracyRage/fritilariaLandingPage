import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
}) => (
  <div>
    <h1>Welcome,!</h1>
  </div>
);
