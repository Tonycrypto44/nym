import React from 'react';
import { ConnectionStatusKind } from '../types';

export const ConnectionStatus: React.FC<{
  status: ConnectionStatusKind;
}> = ({ status }) => <div>{status}</div>;
