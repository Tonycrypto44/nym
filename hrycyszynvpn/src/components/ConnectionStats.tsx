import React from 'react';
import { Box, Typography } from '@mui/material';
import prettyBytes from 'pretty-bytes';

export const ConnectionStats: React.FC<{
  stats: {
    label: string;
    rateBytesPerSecond: number;
    totalBytes: number;
  }[];
}> = ({ stats }) => (
  <Box color="rgba(255,255,255,0.6)" width="100%" display="flex" justifyContent="space-between">
    <div>
      {stats.map((stat) => (
        <Typography key={`stat-${stat.label}-label`}>{stat.label}</Typography>
      ))}
    </div>
    <div>
      {stats.map((stat) => (
        <Typography key={`stat-${stat.label}-rate`} textAlign="center">
          {formatRate(stat.rateBytesPerSecond)}
        </Typography>
      ))}
    </div>
    <div>
      {stats.map((stat) => (
        <Typography key={`stat-${stat.label}-total`} textAlign="right">
          {formatTotal(stat.totalBytes)}
        </Typography>
      ))}
    </div>
  </Box>
);

export function formatRate(bytesPerSecond: number): string {
  return `${prettyBytes(bytesPerSecond)}/s`;
}

export function formatTotal(totalBytes: number): string {
  return prettyBytes(totalBytes);
}
