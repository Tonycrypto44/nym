import React from 'react';
import { ConnectionStatusKind } from '../types';

export const IpAddressAndPort: React.FC<{
  label: string;
  ipAddress: string;
  port: number;
}> = ({ label, ipAddress, port }) => (
  <div>
    <div>{label}</div>
    <div>{ipAddress}</div>
    <div>{port}</div>
  </div>
);
