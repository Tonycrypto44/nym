import React from 'react';

export const DefaultLayout: React.FC = ({ children }) => (
  <div>
    <div>{children}</div>
    <div>Need help?</div>
  </div>
);
