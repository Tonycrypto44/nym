import React from 'react';
import { Box, Button } from '@mui/material';
import { DateTime } from 'luxon';
import { AppWindowFrame } from '../components/AppWindowFrame';
import { ConnectionStatus } from '../components/ConnectionStatus';
import { ConnectionStatusKind } from '../types';
import { ConnectionStats, ConnectionStatsItem } from '../components/ConnectionStats';
import { NeedHelp } from '../components/NeedHelp';
import { ConnectionButton } from '../components/ConnectionButton';
import { IpAddressAndPort } from '../components/IpAddressAndPort';

export const ConnectedLayout: React.FC<{
  status: ConnectionStatusKind;
  stats: ConnectionStatsItem[];
  ipAddress: string;
  port: number;
  connectedSince?: DateTime;
}> = ({ status, stats, ipAddress, port, connectedSince }) => (
  <AppWindowFrame>
    <Box pb={4}>
      <ConnectionStatus status={status} connectedSince={connectedSince} />
    </Box>
    <Box pb={4}>
      <IpAddressAndPort label="SOCKS5 Proxy" ipAddress={ipAddress} port={port} />
    </Box>
    <ConnectionStats stats={stats} />
    <ConnectionButton status={status} />
    <NeedHelp />
  </AppWindowFrame>
);
