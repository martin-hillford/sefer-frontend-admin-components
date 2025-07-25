import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Dictionary = (props: IconProps) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z"></path>
      <path d="M12 5v16"></path>
      <path d="M7 7h1"></path>
      <path d="M7 11h1"></path>
      <path d="M16 7h1"></path>
      <path d="M16 11h1"></path>
      <path d="M16 15h1"></path>
    </svg>
  </Icon>
);


