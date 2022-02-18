import React, { createContext, useContext, useState } from 'react';
import { DateTime } from 'luxon';
import { ConnectionStatusKind } from '../types';
import { ConnectionStatsItem } from '../components/ConnectionStats';

type ModeType = 'light' | 'dark';

type TClientContext = {
  mode: ModeType;
  connectionStatus: ConnectionStatusKind;
  connectionStats?: ConnectionStatsItem[];
  connectedSince?: DateTime;

  setMode: (mode: ModeType) => void;
  setConnectionStatus: (connectionStatus: ConnectionStatusKind) => void;
  setConnectionStats: (connectionStats: ConnectionStatsItem[] | undefined) => void;
  setConnectedSince: (connectedSince: DateTime | undefined) => void;
};

export const ClientContext = createContext({} as TClientContext);

export const ClientContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ModeType>('dark');
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatusKind>(ConnectionStatusKind.disconnected);
  const [connectionStats, setConnectionStats] = useState<ConnectionStatsItem[]>();
  const [connectedSince, setConnectedSince] = useState<DateTime>();

  return (
    <ClientContext.Provider
      value={{
        mode,
        setMode,
        connectionStatus,
        setConnectionStatus,
        connectionStats,
        setConnectionStats,
        connectedSince,
        setConnectedSince,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
