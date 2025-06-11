import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const ChevronUp = (props : IconProps) =>
    <Icon {...props}>
        <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="m7.71 15.29 3.88-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0l-4.59 4.59a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z">
            </path>
        </svg>
    </Icon>
