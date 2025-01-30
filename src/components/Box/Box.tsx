import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
    styleSheet?: StyleSheet;
    children?: React.ReactNode;
    tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {

    const Tag = tag || 'div';

    return (
        <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
            {children}
        </BaseComponent>
    )
}