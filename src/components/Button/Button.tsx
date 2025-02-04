import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { buttonSize, ButtonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
    children: React.ReactNode;
    fullWidth: boolean;
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize;
}

export default function Button(
    {
        styleSheet,
        children,
        fullWidth = false,
        colorVariant = 'primary',
        variant = 'contained',
        size = 'md',
    }: ButtonProps) {

    const theme = useTheme();

    return (
      <ButtonBase styleSheet={{
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        alignSelf: 'flex-start',
        ...(fullWidth && {
            alignSelf: 'inital',
        }),
        ...styleSheet
      }}>
        {children}
      </ButtonBase>  
    );
}

Button.Base = ButtonBase;