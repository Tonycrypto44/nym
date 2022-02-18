import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AppWindowFrame } from '../components/AppWindowFrame';
import { ConnectionButton } from '../components/ConnectionButton';
import { ConnectionStatusKind } from '../types';

export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

export const Default: ComponentStory<typeof DefaultLayout> = () => (
  <Box p={4} sx={{ background: 'white' }}>
    <DefaultLayout />
  </Box>
);

export const Content: ComponentStory<typeof AppWindowFrame> = () => (
  <Box p={4} sx={{ background: 'white' }}>
    <DefaultLayout>
      <Typography fontWeight="700" fontSize="14px" textAlign="center">
        Connect, your privacy will be 100% protected thanks to the Nym Mixnet
      </Typography>
      <ConnectionButton status={ConnectionStatusKind.disconnected} />
    </DefaultLayout>
  </Box>
);
