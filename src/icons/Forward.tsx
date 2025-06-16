import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Forward = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="m4.55 16.96 6.2-4.13a1 1 0 0 0 0-1.66l-6.2-4.13C3.89 6.59 3 7.07 3 7.87v8.26c0 .8.89 1.28 1.55.83zM13 7.87v8.26c0 .8.89 1.28 1.55.83l6.2-4.13a1 1 0 0 0 0-1.66l-6.2-4.13c-.66-.45-1.55.03-1.55.83z">
          </path>
      </svg>
  </Icon>
);
