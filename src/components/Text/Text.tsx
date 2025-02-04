import React from "react";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import { BaseComponent } from "@src/theme/BaseComponent";

interface TextProps {
    variant?: ThemeTypographyVariants;
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'a' | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
    ref: any;
}

const Text = React.forwardRef(({
    tag = 'p',
    styleSheet,
    variant = 'body2',
    ...props
}: TextProps, ref) => {

    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
        <BaseComponent 
            as={tag}
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
                ...textVariant,
                ...styleSheet,
            }}
            ref={ref}
            {...props}
        />
    )
})

export default Text;