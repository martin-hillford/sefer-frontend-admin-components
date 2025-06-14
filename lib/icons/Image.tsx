import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Image = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 384 512" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zM96 224c17.67 0 32 14.33 32 32s-14.3 32-32 32-32-14.3-32-32 14.33-32 32-32zm222.1 215.5c-2.8 5.3-8.2 8.5-14.1 8.5H80c-5.9 0-11.32-3.248-14.11-8.451a15.991 15.991 0 0 1 .795-16.42l53.33-80C122.1 338.7 127.1 336 133.3 336s10.35 2.674 13.31 7.125L160 363.2l45.35-68.03c2.95-4.47 7.95-7.17 13.35-7.17s10.35 2.674 13.31 7.125l85.33 128c3.26 4.875 3.56 11.175.76 16.375zM256 0v128h128L256 0z">
          </path>
      </svg>
  </Icon>
);
