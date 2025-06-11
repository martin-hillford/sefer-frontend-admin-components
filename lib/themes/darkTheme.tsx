// noinspection DuplicatedCode

import { Colors } from '../types/Colors';

const colors = {
    blue: Colors.Blue,
    white: 'white',
    lightGray: '#E5E5E5',
    lightestGray: '#F5F5F5',
    middleGray: '#666666',
    darkGray: '#333333',
    green: '#3fab49',
    error: Colors.Red,
    light: '#F9F9F9',
    altBlue: '#d0dae4',
    altDarkBlue: '#2b4863',
    gray: '#dddddd',
    placeholder: '#cccccc'
};

export const darkTheme = {
    fonts: {
        text: '"Helvetica Neue" ,sans-serif',
        header: { family: '"Helvetica Neue" ,sans-serif' }
    },
    localization: 'nl-NL',
    colors: {
        text: colors.darkGray,
        error: colors.error,
        success: colors.green,
        header: colors.darkGray,
        background: colors.light,

        spinner: {
            active: colors.blue,
            background: colors.lightGray
        },

        input: {
            active: colors.blue,
            border: colors.middleGray,
            shadow: colors.gray,
            placeholder: colors.placeholder,
            background: colors.white
        },

        button: {
            text: colors.white,
            textHover: colors.blue,
            background: colors.blue,
            backgroundHover: colors.white,
            border: colors.blue,
            borderHover: colors.lightGray
        },

        chat: {
            quote: { background: 'rgba(255,255,255, 0.1)', border: colors.lightGray },
            left: { text: colors.altDarkBlue, background: colors.altBlue },
            right: { text: colors.white, background: colors.blue, icon: 'rgba(255,255,255,0.5)' }
        },

        badge: {
            active: { color: colors.blue, background: colors.lightestGray, },
            default: { color: colors.white, background: colors.middleGray, },
        }
    }
};
