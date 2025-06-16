import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Preview = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M12 4C7.31 4 3.26 6.74 1.35 10.7c-.24.5-.24 1.1 0 1.6C3.26 16.26 7.31 19 12 19s8.74-2.74 10.65-6.7c.24-.5.24-1.1 0-1.6C20.74 6.74 16.69 4 12 4zm0 12c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z">
          </path>
          <circle cx="12" cy="11.5" r="2.7"></circle>
      </svg>
  </Icon>
);
