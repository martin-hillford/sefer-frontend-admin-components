import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const WindowOpen = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H5V7h14v12h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm-7.35 8.35-2.79 2.79c-.32.32-.1.86.35.86H11v5c0 .55.45 1 1 1s1-.45 1-1v-5h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01z">
          </path>
      </svg>
  </Icon>
);
