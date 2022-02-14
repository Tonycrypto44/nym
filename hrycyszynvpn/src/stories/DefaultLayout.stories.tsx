import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

export const Default: ComponentStory<typeof DefaultLayout> = () => <DefaultLayout />;
