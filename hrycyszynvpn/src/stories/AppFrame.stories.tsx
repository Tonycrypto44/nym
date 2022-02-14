import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppFrame } from '../components/AppFrame';

export default {
  title: 'App/AppFrame',
  component: AppFrame,
} as ComponentMeta<typeof AppFrame>;

export const Default: ComponentStory<typeof AppFrame> = () => <AppFrame />;
