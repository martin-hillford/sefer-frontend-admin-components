import { useTheme } from "styled-components";
import { getVariantColors } from "../types/Colors";

export const useThemeVariant = (variant: string | undefined | null) => {
    const theme = useTheme();
    const themed = getVariantColors(variant);
    return {...theme, ...themed};
}
