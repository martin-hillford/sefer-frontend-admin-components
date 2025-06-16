import styled, { keyframes } from 'styled-components';
import { Colors } from '../../types/Colors';

export type LoadingProps = {
    variant? : "small" | "medium" | "large" | "huge" | "massive" | "extra-small" | "x-large" | "xx-large" | "x-small",
    color? : string,
    background? : string
    center? : boolean
}

const sizes = {
    "extra-small" : { size: '25px', border: '2px' },
    "x-small" : { size: '25px', border: '2px' },
    "small" : { size: '40px', border: '3px' },
    "medium" : { size: '50px', border: '4px' },
    "large": { size: '75px', border: '6px' },
    "huge": { size: '100px', border: '9px' },
    "x-large": { size: '100px', border: '9px' },
    "xx-large": { size: '12px', border: '1px' },
    "massive": { size: '12px', border: '1px' }
};

const getSize = (size: string | undefined | null) => {
    if(!size) return sizes["small"];
    if(!Object.keys(sizes).includes(size.toLowerCase())) return sizes["small"];
    return (sizes as any)[size] as { size: string, border: string };
}

export const Loading = ({ variant = "small", background = '#F5F5F5', color = Colors.Blue, center } : LoadingProps) => {
    const { size, border } = getSize(variant);
    return (
    <Wrapper $center={center}>
      <Spinner $background={background} $color={color} $border={border} $size={size} />
    </Wrapper>
  );
};



const Wrapper = styled.div<{$center? : boolean}>`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${p => (p.$center ? '100%' : 'auto')};
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div<{$size : string, $border: string, $color : string, $background : string}>`

    display: inline-block;
    width: ${p => p.$size};
    height: ${p => p.$size};
    border: ${p => p.$border} solid ${p => p.$background};
    border-radius: 50%;
    border-top-color: ${p => p.$color};
    animation: ${spin} 1s ease-in-out infinite;
`;
