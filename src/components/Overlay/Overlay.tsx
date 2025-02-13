import React, { useEffect, useState } from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import Box from "../Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

interface OverlayProps {
    open: boolean;
    title: string;
    styleSheet?: StyleSheet;
    children: React.ReactNode;
}

export default function Overlay({ open, styleSheet, children, title }: OverlayProps) {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (open) {
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [open]);

    return (
        <Box
            styleSheet={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: `rgba(0, 0, 0, 0.8)`,
                zIndex: 9999,
                display: open ? 'flex' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px',
                ...styleSheet,
            }}
        >
            <Box styleSheet={{
                width: '100%',
                height: '100%',
                backgroundColor: theme.colors.neutral.x100,
                padding: '15px',
                borderRadius: '4px',
            }}>
                <Box styleSheet={{}}>
                    <Box styleSheet={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'black',
                    }}>
                        <Text variant="heading1">{title}</Text>
                        <Icon name="default_icon" onClick={() => setIsVisible(false)}/>
                    </Box>

                    { children }
                </Box>
            </Box>
        </Box>
    );
}
