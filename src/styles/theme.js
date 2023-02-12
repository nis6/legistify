import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './ButtonStyles';
import { FlexStyle as Flex } from './FlexStyle';


const myTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                position: 'relative',
                margin: '0',
                overflowX: 'hidden',
                boxSizing: 'border-box',
                userSelect: 'none',
                color: 'black',
                fontWeight: 'normal',
                fontSize: "22px",
                bg: "bg200"
            },
            ':: -webkit - scrollbar': {
                display: 'none'
            },
            '*, *: before, *: after': {
                boxSizing: 'border-box',
                padding: '0',
                margin: '0'
            },
        },
    },
    colors: {
        fontblack: "#281f18",
        rust: "#b75c44",
        bg100: "#f3eceb",
        bg200: "#c4bdb8",
        beige: "#a0948c",
        grey100: "#acacac",
        grey200: "#747471",
        french_beige: "#9a7d62",
        hazelyellow: "#e6c795",
    },
    components: {
        Button,
        Flex
    },
})

export default myTheme;