import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Moon = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M15.5 22h.21c.84-.02 1.12-1.11.41-1.56a9.99 9.99 0 0 1-4.63-8.43c0-3.55 1.85-6.66 4.63-8.44.7-.45.44-1.54-.39-1.56h-.13c-4.9-.05-9.21 3.53-9.98 8.37C4.64 16.61 9.45 22 15.5 22z">
          </path>
      </svg>
  </Icon>
);
