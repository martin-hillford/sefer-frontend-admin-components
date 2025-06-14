import { Icon } from './Icon';
import { IconProps } from './IconsProps';

export const Images = (props: IconProps) => (
  <Icon {...props}>
      <svg viewBox="0 0 576 512" height="48" width="48" focusable="false" role="img" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                d="M528 32H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48V80c0-26.51-21.5-48-48-48zM223.1 96c17.68 0 32 14.33 32 32s-13.4 32-32 32c-17.67 0-32-14.33-32-32s15.2-32 32-32zm271 215.6c-2.8 5.2-8.2 8.4-14.1 8.4H192a15.991 15.991 0 0 1-14.26-8.75 16.003 16.003 0 0 1 1.332-16.68l70-96C252.1 194.4 256.9 192 262 192c5.111 0 9.916 2.441 12.93 6.574l22.35 30.66 62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160c3.29 4.875 3.59 11.175.79 16.475zM456 432H120c-39.7 0-72-32.3-72-72V120c0-13.2-10.75-24-24-24S0 106.8 0 120v240c0 66.2 53.83 120 120 120h336c13.25 0 24-10.75 24-24s-10.7-24-24-24z">
          </path>
      </svg>
  </Icon>
);
