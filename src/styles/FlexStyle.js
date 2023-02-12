
export const FlexStyle = {
    // style object for base or default style
    baseStyle: {
        gap: '3rem'
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        centerFlex: {
            borderColor: "black",
            borderWidth: "1px",
            h: "max-content",
            direction: "column",
            gap: "3rem",
            align: "center",
            justify: "center",
            borderRadius: "1rem",
            w: "95%",
            p: "1rem",
            m: "0.8rem",
            mt: "2rem",
            bg: "grey100",
        }
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {
        variant: 'borderFlex',
    },
}