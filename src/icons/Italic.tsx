import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Italic = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M9 5.5c0 .83.67 1.5 1.5 1.5h2l-4 10h-2c-.83 0-1.5.67-1.5 1.5S5.67 20 6.5 20h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2l4-10h2c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-7C9.67 4 9 4.67 9 5.5z">
          </path>
      </svg>
  </Icon>
);
