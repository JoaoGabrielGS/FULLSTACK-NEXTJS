import React from "react";
import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
    styleSheet?: StyleSheet;
    ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    display: flex;
    flex-direction: column;
    align-cotent: flex-start;
    flex-shrink: 0;
    ${({ styleSheet = {} }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
    styleSheet: StyleSheet;
    [key: string]: any;
};

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
    return (
        <StyledBaseComponent ref={ref} { ...props } />
    )
})