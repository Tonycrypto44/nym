import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@mui/material';
import { AppFrame } from '../components/AppFrame';

export default {
  title: 'App/AppFrame',
  component: AppFrame,
} as ComponentMeta<typeof AppFrame>;

export const Default: ComponentStory<typeof AppFrame> = () => (
  <Box p={4} sx={{ background: 'white' }}>
    <AppFrame />
  </Box>
);
