import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components';

const meta = {
    component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Parameters: Story = {
    args: {
        label: 'Button',
        variant: "success",
        disabled: false
    },
};

export default meta;
