import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Bookmark = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
              d="M17 3H7c-1.1 0-2 .9-2 2v14.48c0 .72.73 1.2 1.39.92L12 18l5.61 2.4c.66.28 1.39-.2 1.39-.92V5c0-1.1-.9-2-2-2z">
          </path>
      </svg>
  </Icon>
);
