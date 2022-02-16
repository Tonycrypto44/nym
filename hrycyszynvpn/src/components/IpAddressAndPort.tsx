import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';

const IpAddressAndPortContainer = styled('div')({
  '.hoverAddressCopy:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationColor: '#FB6E4E',
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
  },
});

export const IpAddressAndPort: React.FC<{
  label: string;
  ipAddress: string;
  port: number;
}> = ({ label, ipAddress, port }) => (
  <IpAddressAndPortContainer>
    <Box display="flex" justifyContent="space-between" color="rgba(255,255,255,0.6)">
      <Typography>{label}</Typography>
      <Typography>Port</Typography>
    </Box>
    <Box display="flex" justifyContent="space-between" fontWeight="600">
      <Tooltip title="Click to copy SOCKS5 proxy hostname">
        <Typography fontWeight="inherit" className="hoverAddressCopy">
          {ipAddress}
        </Typography>
      </Tooltip>
      <Tooltip title="Click to copy SOCKS5 proxy port">
        <Typography fontWeight="inherit" className="hoverAddressCopy">
          {port}
        </Typography>
      </Tooltip>
    </Box>
  </IpAddressAndPortContainer>
);
