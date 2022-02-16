import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { ConnectionStatusKind } from '../types';

const FONT_SIZE = '16px';
const FONT_WEIGHT = '600';
const FONT_STYLE = 'normal';

const ConnectionStatusContent: React.FC<{
  status: ConnectionStatusKind;
}> = ({ status }) => {
  switch (status) {
    case ConnectionStatusKind.connected:
      return (
        <>
          <CheckCircleOutlineIcon />
          <Typography fontWeight={FONT_WEIGHT} fontStyle={FONT_STYLE} ml={1}>
            Connected
          </Typography>
        </>
      );
    case ConnectionStatusKind.disconnecting:
      return (
        <>
          <CircularProgress size={FONT_SIZE} color="inherit" />
          <Typography fontWeight={FONT_WEIGHT} fontStyle={FONT_STYLE} ml={1}>
            Disconnecting...
          </Typography>
        </>
      );
    case ConnectionStatusKind.connecting:
      return (
        <>
          <CircularProgress size={FONT_SIZE} color="inherit" />
          <Typography fontWeight={FONT_WEIGHT} fontStyle={FONT_STYLE} ml={1}>
            Connecting...
          </Typography>
        </>
      );
    case ConnectionStatusKind.disconnected:
      return (
        <>
          <CircleOutlinedIcon />
          <Typography fontWeight={FONT_WEIGHT} fontStyle={FONT_STYLE} ml={1}>
            Disconnected
          </Typography>
        </>
      );
    default:
      return null;
  }
};

export const ConnectionStatus: React.FC<{
  status: ConnectionStatusKind;
}> = ({ status }) => {
  const color =
    status === ConnectionStatusKind.connected || status === ConnectionStatusKind.disconnecting ? '#21D072' : '#888';

  return (
    <Box color={color} fontSize={FONT_SIZE} display="flex" alignItems="center">
      <ConnectionStatusContent status={status} />
    </Box>
  );
};
