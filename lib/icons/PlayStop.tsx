import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const PlayStop = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 384 512" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                d="M384 128v255.1c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h256c35.3 0 64 28.65 64 64z">
          </path>
      </svg>
  </Icon>
);
