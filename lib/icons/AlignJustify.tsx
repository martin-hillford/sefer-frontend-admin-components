import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const AlignJustify = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 24 24" height="48" width="48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
      </svg>
  </Icon>
);
