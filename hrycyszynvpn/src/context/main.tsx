import React, { createContext, useState } from 'react';
import { ConnectionStatusKind } from '../types';

type ModeType = 'light' | 'dark';

type TClientContext = {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
  connectionStatus: ConnectionStatusKind;
  setConnectionStatus: (connectionStatus: ConnectionStatusKind) => void;
};

export const ClientContext = createContext({} as TClientContext);

export const ClientContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatusKind>(ConnectionStatusKind.disconnected);
  const [mode, setMode] = useState<ModeType>('light');

  return (
    <ClientContext.Provider
      value={{
        mode,
        setMode,
        connectionStatus,
        setConnectionStatus,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
