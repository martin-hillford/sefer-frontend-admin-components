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

export const getTints = (color : Colors) => {
    switch (color) {
        case Colors.Green:
            return ['#3fab49', '#52b35b', '#65bb6d', '#78c47f', '#8bcc91', '#9fd5a4', '#b2ddb6', '#c5e5c8', '#d8eeda', '#ebf6ec'];
        case Colors.Orange:
            return ['#ff9800', '#ffa219', '#ffac32', '#ffb64c', '#ffc166', '#ffcb7f', '#ffd599', '#ffe0b2', '#ffeacc', '#fff4e5'];
        case Colors.Red:
            return ['#e51c23', '#e73238', '#ea494e', '#ec6065', '#ef767b', '#f28d91', '#f4a4a7', '#f7babd', '#f9d1d3', '#fce8e9'];
        case Colors.Purple:
            return ['#9c27b0', '#a53cb7', '#af52bf', '#b967c7', '#c37dcf', '#cd93d7', '#d7a8df', '#e1bee7', '#ebd3ef', '#f5e9f7'];
        default:
            return ['#0c497a', '#245b87', '#3c6d94', '#547fa1', '#6d91af', '#85a4bc', '#9db6c9', '#b6c8d7', '#cedae4', '#e6ecf1'];
    }
};

