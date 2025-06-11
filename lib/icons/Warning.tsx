import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Warning = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="m11.53 5 7.53 13.01H4L11.53 5M2.27 17.01c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.26 4c-.77-1.33-2.69-1.33-3.46 0L2.27 17.01z">
          </path>
          <path d="M10.53 10.01V13c0 .55.45 1 1 1s1-.45 1-1v-2.99c0-.55-.45-1-1-1s-1 .45-1 1z"></path>
          <circle cx="11.53" cy="16.01" r="1"></circle>
      </svg>
  </Icon>
);
