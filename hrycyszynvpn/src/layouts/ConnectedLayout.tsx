import React from 'react';
import { Box, Button } from '@mui/material';
import { AppWindowFrame } from '../components/AppWindowFrame';
import { ConnectionStatus } from '../components/ConnectionStatus';
import { ConnectionStatusKind } from '../types';
import { ConnectionStats, ConnectionStatsItem } from '../components/ConnectionStats';
import { NeedHelp } from '../components/NeedHelp';

export const ConnectedLayout: React.FC<{
  status: ConnectionStatusKind;
  stats: ConnectionStatsItem[];
}> = ({ status, stats }) => (
  <AppWindowFrame>
    <Box pb={4}>
      <ConnectionStatus status={status} />
    </Box>
    <Box pb={4}>
      <ConnectionStats stats={stats} />
    </Box>
    <Button variant="contained" fullWidth color="secondary">
      Disconnect
    </Button>
    <NeedHelp />
  </AppWindowFrame>
);
