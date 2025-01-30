import React from "react";
import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
    styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    display: flex;
    flex-direction: column;
    align-cotent: flex-start;
    flex-shrink: 0;
    ${({ styleSheet = {} }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
    return (
        <StyledBaseComponent { ...props } />
    )
}
BaseComponent.defaultProps = {
    styleSheet: {},
}