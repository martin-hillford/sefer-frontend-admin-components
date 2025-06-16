import styled from 'styled-components';
import { ColorDef, getVariantColors } from '../../types/Colors';

interface Props {
  variant: "default" | "primary" | "success" | "info" | "warning" | "danger" | "selected"
  value? : string | number
}

export const Badge = ({ value, variant } : Props) => {
  const colors = getVariantColors(variant);
  return <Base $colors={colors}>{value}</Base>;
};

const Base = styled.div<{ $colors : ColorDef }>`
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: ${p => p.$colors.text};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: ${p => p.$colors.background};
    border-radius: 10px;
`;
