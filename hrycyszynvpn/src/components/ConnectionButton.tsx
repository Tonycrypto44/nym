import React from 'react';
import { ConnectionStatusKind } from '../types';

export const ConnectionButton: React.FC<{
  status: ConnectionStatusKind;
  onStatusChanged?: (status: ConnectionStatusKind) => void;
}> = ({ status }) => <div>{status}</div>;
