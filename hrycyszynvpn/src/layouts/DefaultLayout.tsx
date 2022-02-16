import React from 'react';
import { Box, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { AppFrame } from '../components/AppFrame';

export const DefaultLayout: React.FC = ({ children }) => (
  <AppFrame
    footer={
      <Box sx={{ display: 'grid', placeItems: 'center', color: '#60D6EF' }}>
        <Box display="flex" alignItems="center" fontSize="12px" fontWeight="600">
          <HelpOutlineIcon color="inherit" fontSize="inherit" fontWeight="inherit" />
          <Typography ml={0.5} color="inherit" fontSize="inherit" fontWeight="inherit">
            Need help?
          </Typography>
        </Box>
      </Box>
    }
  >
    {children}
  </AppFrame>
);
