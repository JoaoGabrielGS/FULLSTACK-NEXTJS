import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import type { Post } from "@src/services/posts/PostsService";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import { FeedPost } from "./patterns/FeedPost";

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
            paddingTop: '40px',
            paddingHorizontal: '40px',
            backgroundColor: theme.colors.neutral.x000,
        }}>
            {children}
        </Box>
    )
}

Feed.Header = () => {

    const theme = useTheme();
    const templateConfig = useTemplateConfig();

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
                <Image src={templateConfig?.personal?.avatar} alt="João Gabriel" styleSheet={{
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
                        <Button fullWidth colorVariant="primary" size="xl" href="/newsletter">Newsletter</Button>
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
                {templateConfig?.personal?.name}
            </Text>

            <Box styleSheet={{
                flexDirection: 'row',
                gap: '4px',
                marginTop: '5px',
                marginBottom: '10px',
            }}>
                {Object.keys(templateConfig.personal.socialNetworks).map(key => {
                    const socialNetwork = templateConfig.personal.socialNetworks[key];

                    if (socialNetwork) {
                        return (
                            <Link key={key} href={templateConfig.personal.socialNetworks[key]} target="_blank">
                                <Icon name={key as any} />
                            </Link>
                        )
                    }

                    return null;
                })}
            </Box>
        </Box>
    )
}

interface FeedPostsProps {
    posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
    return (
        <Box>
            <Text variant="heading3" styleSheet={{ marginBottom: '27px' }}>Últimas atualizações</Text>

            {posts.map(({ title, slug, metadata, image }) => {
                const { date, excerpt, url, tags } = metadata;
               return (
                    <FeedPost
                        key={slug} 
                        title={title}
                        date={date}
                        excerpt={excerpt}
                        tags={tags}
                        url={url}
                        image={image}
                    />
               ) 
            })}
        </Box>
    )
}