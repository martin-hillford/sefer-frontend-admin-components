import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Message = (props: IconProps) => (
    <Icon {...props}>
        <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z">
            </path>
        </svg>
    </Icon>
);
