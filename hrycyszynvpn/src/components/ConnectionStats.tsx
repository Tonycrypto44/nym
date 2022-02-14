import React from 'react';

export const ConnectionStats: React.FC<{
  stats: {
    label: string;
    rateBytesPerSecond: number;
    totalBytes: number;
  }[];
}> = ({ stats }) => (
  <div>
    {stats.map((stat) => (
      <div key={`stat-${stat.label}`}>
        <span>{stat.label}</span>
        <span>{formatRate(stat.rateBytesPerSecond)}</span>
        <span>{formatTotal(stat.totalBytes)}</span>
      </div>
    ))}
  </div>
);

export function formatRate(bytesPerSecond: number): string {
  return `${bytesPerSecond} B/s`;
}

export function formatTotal(totalBytes: number): string {
  return `${totalBytes} B`;
}
