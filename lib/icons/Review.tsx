import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Review = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M20 2H4.01a2 2 0 0 0-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1zm-11-.5v-1.76c0-.13.05-.26.15-.35l5.73-5.74c.2-.2.51-.2.71 0l1.77 1.77c.2.2.19.51 0 .71l-5.74 5.73c-.1.09-.23.14-.36.14H6.5c-.28 0-.5-.22-.5-.5z">
          </path>
      </svg>
  </Icon>
);
