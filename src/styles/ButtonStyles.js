

export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {
        borderRadius: "1rem 0 1rem 1rem",
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
        },
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: {
            bg: "black",
            color: "bg100",
            _hover: {
                bg: 'fontblack',
                textDecoration: 'none',
                opacity: '0.8'
            },
            _active: {
                bg: "black",
            }
        },
        secondary: {
            bg: "beige",
            w: "max-content",
            color: "bg100",
            _hover: {
                bg: 'grey100',
                textDecoration: 'none'
            },
            _active: {
                bg: "beige",
            }
        },
        signup: {
            bg: "french_beige",
            w: "max-content",
            color: "bg100",
            _hover: {
                opacity: '0.8',
                textDecoration: 'none'
            },
            _active: {
                opacity: '1'
            }
        }
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {
        variant: "primary",
        size: "xl",
    },
}