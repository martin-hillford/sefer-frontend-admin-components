import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Day = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="M12 1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zM12 23c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zM20 12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1 .45-1 1zM3 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zM19.78 4.22a.996.996 0 0 0-1.41 0l-.37.37A.996.996 0 1 0 19.41 6l.36-.36c.4-.39.4-1.03.01-1.42zM4.22 19.78c.39.39 1.02.39 1.41 0l.37-.37A.996.996 0 1 0 4.59 18l-.36.36c-.4.39-.4 1.03-.01 1.42zM18 19.41l.36.36a.996.996 0 1 0 1.41-1.41l-.36-.36A.996.996 0 1 0 18 19.41zM6 4.59l-.36-.37a.996.996 0 1 0-1.41 1.41l.36.37A.996.996 0 1 0 6 4.59z">
          </path>
          <circle cx="12" cy="12" r="6"></circle>
      </svg>
  </Icon>
);
