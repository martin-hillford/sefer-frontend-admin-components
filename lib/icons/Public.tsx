import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Public = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M19 11c0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-6.74 5.15A5.49 5.49 0 0 0 1 14.5C1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52 0-2.33-1.75-4.22-4-4.48z">
          </path>
      </svg>
  </Icon>
);
