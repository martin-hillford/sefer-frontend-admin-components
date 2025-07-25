import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const ZoomOut = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none"></rect>
          <path d="M11 8.5H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
          <path
              d="M14.73 13.31c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44a6.521 6.521 0 0 0-7.72 7.73c.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56a.996.996 0 1 0 1.41-1.41l-5.56-5.57zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
          </path>
      </svg>
  </Icon>
);
