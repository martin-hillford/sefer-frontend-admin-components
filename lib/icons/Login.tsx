import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Login = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M19 3h-6c-.55 0-1 .45-1 1s.45 1 1 1h6v14h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
          </path>
          <path
              d="M11 9.21V11H4c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36z">
          </path>
      </svg>
  </Icon>
);
