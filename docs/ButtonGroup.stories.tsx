import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonGroup } from '../src/components';

const meta = {
    component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof meta>;

const children = (
    <ButtonGroup>
        <Button variant="default" label="default" />
        <Button variant="primary" label="primary" />
        <Button variant="info" label="info" />
        <Button variant="success" label="success" />
    </ButtonGroup>

)

export const Parameters: Story = {
    args: {
        $pull: "right",
        children
    },
};

export default meta;
