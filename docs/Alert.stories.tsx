import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from "../lib/components";

const meta = {
    component: Alert,
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof meta>;

export const Parameters: Story = {
    args: {
        hide: false,
        overlay: false,
        variant: "danger",
        children: "Houston, we've got a problem.",
    },
};

export default meta;
