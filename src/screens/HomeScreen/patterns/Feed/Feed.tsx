import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface FeedProps {
    children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {

    const theme = useTheme()

    return (
        <Box styleSheet={{
            width: '100%',
            marginTop: '-228px',
            maxWidth: '683px',
            borderRadius: '8px',
            paddingVertical: '40px',
            paddingHorizontal: '40px',
            backgroundColor: theme.colors.neutral.x000,
        }}>
            {children}
        </Box>
    )
}

Feed.Header = () => {

    const theme = useTheme();

    return (
        <Box styleSheet={{
            borderBottom: `1px solid ${theme.colors.neutral.x200}`,
            marginBottom: '24px',
        }}>
            <Box styleSheet={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '16px',
                paddingBottom: '24px',
            }}>
                <Image src="https://github.com/joaogabrielgs.png" alt="João Gabriel" styleSheet={{
                    width: { xs: '100px', md: '128px' },
                    height: { xs: '100px', md: '128px' },
                    borderRadius: '100%',
                }} />

                <Box styleSheet={{
                    justifyContent: 'space-between',
                }}>
                    <Box styleSheet={{
                        flex: '1',
                        justifyContent: 'space-between',
                        display: { xs: 'none', md: 'flex' }
                    }}>
                        <Button fullWidth colorVariant="primary" size="xl" href="/">Newsletter</Button>
                        <Button fullWidth colorVariant="neutral" size="xl" href="/">Buy me a coffee</Button>
                    </Box>
                    <Box styleSheet={{
                        flex: '1',
                        justifyContent: 'space-between',
                        display: { xs: 'flex', md: 'none' }
                    }}>
                        <Button fullWidth colorVariant="primary" size="xs" href="/">Newsletter</Button>
                        <Button fullWidth colorVariant="neutral" size="xs" href="/">Buy me a coffee</Button>
                    </Box>
                </Box>

            </Box>
            <Text tag="h1" variant="heading4">
                João Gabriel
            </Text>
            <Link href="https://youtube.com">
                <Icon name="youtube"/>
            </Link>
            <Icon name="twitter" />
            <Icon name="instagram" />
            <Icon name="github" />
            <Text>
                Feed Header
            </Text>
        </Box>
    )
}

Feed.Posts = () => {
    return (
        <Box>
            <Text>
                Feed Posts
            </Text>
        </Box>
    )
}