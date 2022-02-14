import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Account, ConnectionStatusKind, Network, TCurrency, TMixnodeBondDetails } from '../types';
import { config } from '../../config';
import { getMixnodeBondDetails, selectNetwork, signOut } from '../requests';
import { currencyMap } from '../utils';

export const { ADMIN_ADDRESS } = config;

type TClientContext = {
  mode: 'light' | 'dark';
  connectionStatus: ConnectionStatusKind;
  setConnectionStatus: (connectionStatus: ConnectionStatusKind) => void;
};

export const ClientContext = createContext({} as TClientContext);

export const ClientContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatusKind>(ConnectionStatusKind.disconnected);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <ClientContext.Provider
      value={{
        mode,
        connectionStatus,
        setConnectionStatus,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
