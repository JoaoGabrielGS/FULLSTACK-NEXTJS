import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Overlay from "@src/components/Overlay/Overlay";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useState } from "react";

export default function Menu() {

    const theme = useTheme();
    const baseSize = '40px';
    const [openInfos, setOpenInfos] = useState(false);

    return (
        <Box styleSheet={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: '16px',
            paddingHorizontal: '20px',
            color: theme.colors.neutral.x000,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
        }}>
            <Button.Base styleSheet={{
                width: baseSize,
                height: baseSize,
                backgroundColor: theme.colors.primary.x500,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                hover: {
                    backgroundColor: theme.colors.primary.x400,
                },
                focus: {
                    backgroundColor: theme.colors.primary.x600,
                },
            }}
            onClick={() => setOpenInfos(true)}
            >
                <Text>
                    JG
                </Text>
            </Button.Base>

            <Overlay open={openInfos} title="Sobre mim">
                Olá a todos
            </Overlay>

            <Button.Base styleSheet={{
                borderRadius: '100%',
                backgroundColor: theme.colors.neutral.x500,
                width: baseSize,
                height: baseSize,
                alignItems: 'center',
                justifyContent: 'center',
                hover: {
                    backgroundColor: theme.colors.neutral.x400,
                },
                focus: {
                    backgroundColor: theme.colors.neutral.x600,
                },
            }}
            >
                <Icon name="menu" />
            </Button.Base>
        </Box>
    )
}