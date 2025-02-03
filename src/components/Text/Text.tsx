import React from "react";
import Box from "../Box/Box";
import theme, { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
    variant?: ThemeTypographyVariants;
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Text({
    styleSheet,
    variant,
    ...props
}: TextProps) {

    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
        <Box 
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
                ...textVariant,
                ...styleSheet,
            }}

            {...props}
        />
    )
}

Text.defaultProps = {
    tag: 'p',
    variant: 'body2',
}