import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Backward = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path
              d="m19.45 7.04-6.2 4.13a1 1 0 0 0 0 1.66l6.2 4.13a.997.997 0 0 0 1.55-.83V7.87c0-.8-.89-1.28-1.55-.83zM11 16.13V7.87c0-.8-.89-1.28-1.55-.83l-6.2 4.13a1 1 0 0 0 0 1.66l6.2 4.13c.66.45 1.55-.03 1.55-.83z">
          </path>
      </svg>
  </Icon>
);
