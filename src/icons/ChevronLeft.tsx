import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const ChevronLeft = (props : IconProps) =>
     <Icon {...props}>
         <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
             <path fill="none" d="M0 0h24v24H0V0z"></path>
             <path
                 d="m15.29 15.46-3.88-3.88 3.88-3.88a.996.996 0 1 0-1.41-1.41l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z">
             </path>
         </svg>
     </Icon>
