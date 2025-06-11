import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const TriangleUp = (props: IconProps) => (
    <Icon {...props}>
        <svg viewBox="0 0 16 16" height="48" width="48" focusable="false" role="img" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z">
            </path>
        </svg>
    </Icon>
);
