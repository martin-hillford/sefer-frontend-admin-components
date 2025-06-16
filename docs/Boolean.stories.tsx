import type { Meta, StoryObj } from '@storybook/react-vite';
import { Boolean } from '../src/components';

const meta = {
    component: Boolean,
} satisfies Meta<typeof Boolean>;

type Story = StoryObj<typeof meta>;

export const Parameters: Story = {
    args: {
        value: true,
        colored: true,
        size: 20

    },
};

export default meta;
