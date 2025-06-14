import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const AlignLeft = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
      </svg>
  </Icon>
);
