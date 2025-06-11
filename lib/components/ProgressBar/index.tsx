import styled from 'styled-components';
import { ColorDef, getVariantColors } from '../../types/Colors';

interface Props {
  variant? : "default" | "primary" | "success" | "info" | "warning" | "danger" | "selected"
  progress : number
  squared? : boolean,
  height? : number
}

export const ProgressBar = (props : Props) => {
  const { progress, variant, squared, height } = props;
  const percentage = Math.min(Math.max(0, progress), 100);
  const colors = getVariantColors(variant);

  return (
    <Bar $colors={colors} $squared={squared} $height={height}>
      <Indicator $width={percentage} $colors={colors} $squared={squared} $height={height} />
    </Bar>
  );
};

const Bar = styled.div<{$colors : ColorDef, $squared? : boolean, $height? : number }>`
    height: ${p => (p.$height ? p.$height : 6)}px;
    width: 100%;
    margin-bottom: 0;
    border-radius: ${p => (p.$squared ? 0 : 4)}px;
    background-color: rgba(255,255,255,0.8);
`;

const Indicator = styled.div<{$width : number, $colors : ColorDef, $squared? : boolean, $height? : number }>`
    height: ${p => (p.$height ? p.$height : 6)}px;
    width: ${props => `${props.$width}%`};
    margin-bottom: 0;
    border-radius: ${p => (p.$squared ? 0 : 4)}px;
    background-color: ${props => props.$colors.background};
    transition: width 0.6s ease;

    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.25) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 75%, transparent 75%, transparent);
    background-size: 2rem 2rem;
    animation: 1s linear infinite progress-bar-stripes;

    @keyframes progress-bar-stripes {
    0% {
        background-position-x: 2rem;
    }
}
`;
