import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { AppFrame } from '../components/AppFrame';
import { ConnectionStatus } from '../components/ConnectionStatus';
import { ConnectionStatusKind } from '../types';
import { ConnectionStats, ConnectionStatsItem } from '../components/ConnectionStats';

export const ConnectedLayout: React.FC<{
  status: ConnectionStatusKind;
  stats: ConnectionStatsItem[];
}> = ({ status, stats }) => (
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
    <Box pb={4}>
      <ConnectionStatus status={status} />
    </Box>
    <Box pb={4}>
      <ConnectionStats stats={stats} />
    </Box>
    <Button variant="contained" fullWidth color="secondary">
      Disconnect
    </Button>
  </AppFrame>
);
