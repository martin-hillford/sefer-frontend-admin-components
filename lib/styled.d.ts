// styled.d.ts
import 'styled-components';
interface IPalette {
    main: string
    contrastText: string
}
declare module 'styled-components' {
    export interface DefaultTheme {
        border: string // the color of the border for buttons etc.
        borderHover: string,
        text: string // the text color for buttons  etc
        textHover: string
        backgroundHover: string
        colors: {
            text: string,
            error: string,
            success: string,
        }
    }
}
