export enum Colors {
    Blue = '#0C497A',
    Green = '#3FAb49',
    Orange = '#ff9800',
    Red ='#e51c23',
    Purple = '#9c27b0'
}

export const VariantColors = [
  { text: '#444444', border: '#dddddd', background: '#ffffff', textHover: '#444444', borderHover: '#dddddd', backgroundHover: '#f0f0f0', disabled: '#e5e5e5' },
  { text: '#ffffff', border: Colors.Blue, background: Colors.Blue, textHover: '#ffffff', borderHover: '#0c7cd5', backgroundHover: '#0c7cd5', disabled: Colors.Blue },
  { text: '#ffffff', border: '#439a46', background: '#439a46', textHover: '#ffffff', borderHover: '#3d8b40', backgroundHover: '#3d8b40', disabled: '#439a46' },
  { text: '#ffffff', border: '#862197', background: '#862197', textHover: '#ffffff', borderHover: '#771e86', backgroundHover: '#771e86', disabled: '#862197' },
  { text: '#ffffff', border: '#e08600', background: '#e08600', textHover: '#ffffff', borderHover: '#cc7a00', backgroundHover: '#cc7a00', disabled: '#e08600' },
  { text: '#ffffff', border: '#cb171e', background: '#cb171e', textHover: '#ffffff', borderHover: '#b9151b', backgroundHover: '#b9151b', disabled: '#cb171e' },
  { text: '#ffffff', border: '#444444', background: '#444444', textHover: '#444444', borderHover: '#dddddd', backgroundHover: '#f0f0f0', disabled: '#e5e5e5' },
] as ColorDef[];

export type ColorDef = {
    text : string,
    border : string,
    background : string,
    textHover : string,
    borderHover : string,
    backgroundHover : string,
    disabled : string,
}

export const getVariantColors = (variant: string | null | undefined) => {
    const typed = getVariant(variant);
    return VariantColors[typed] as ColorDef;
}

const getVariant = (variant: string | null | undefined) => {
    switch (variant?.toLowerCase()) {
        case "primary" : return 1;
        case "success" : return 2;
        case "info" : return 3;
        case "warning" : return 4;
        case "danger" : return 5;
        case "selected" : return 6;
        default: return 0;
    }
}
