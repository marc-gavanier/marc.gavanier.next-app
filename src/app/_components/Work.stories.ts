import type { Meta, StoryObj } from '@storybook/react';
import { Work } from './Work';

const meta = {
  title: 'Resume/WorkExperience',
  component: Work,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
} satisfies Meta<typeof Work>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    name: 'Tokenized',
    location: 'Melbourne',
    position: 'Senior Javascript Developer',
    startDate: '2018-03-01',
    endDate: '2020-01-01',
    summary: 'Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens.',
    description:
      'I built out the front end which was packaged as an electron app. It was a difficult frontend to build because we store the users keys locally and used them to sign transactions and contracts.',
    highlights: ['React', 'Redux', 'SCSS', 'Product'],
    url: 'https://tokenized.com/'
  }
};

export const OnlyName: Story = {
  args: {
    name: 'Tokenized'
  }
};

export const OnlyLocation: Story = {
  args: {
    location: 'Melbourne'
  }
};

export const OnlyPosition: Story = {
  args: {
    position: 'Senior Javascript Developer'
  }
};

export const OnlyStartDate: Story = {
  args: {
    startDate: '2018-03-01'
  }
};

export const OnlySummary: Story = {
  args: {
    summary: 'Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens.'
  }
};

export const OnlyDescription: Story = {
  args: {
    description:
      'I built out the front end which was packaged as an electron app. It was a difficult frontend to build because we store the users keys locally and used them to sign transactions and contracts.'
  }
};

export const OnlyHighlights: Story = {
  args: {
    highlights: ['React', 'Redux', 'SCSS', 'Product']
  }
};

export const OnlyDateAndSummary: Story = {
  args: {
    startDate: '2018-03-01',
    endDate: '2020-01-01',
    summary: 'Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens.'
  }
};
