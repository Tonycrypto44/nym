import React from 'react';
import { Paper } from '@mui/material';

export const DefaultLayout: React.FC = ({ children }) => (
  <div>
    <div>{children}</div>
    <div>Need help?</div>
  </div>
);
