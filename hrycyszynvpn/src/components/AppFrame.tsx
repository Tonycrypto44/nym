import React from 'react';
import { Paper } from '@mui/material';

export const AppFrame: React.FC = ({ children }) => <Paper>{children || 'This is the app frame'}</Paper>;
