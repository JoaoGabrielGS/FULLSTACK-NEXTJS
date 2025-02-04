import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
    const theme = useTheme();

    return (
        <BaseComponent
            tag="main"
            styleSheet={{
                backgroundColor: theme.colors.positive.x100,
                flex: 1,
                alignItems: 'center',
            }}
        >
            
            <Link colorVariant="negative" href="/sobre">Vá para a página sobre</Link>
            <Link href="https://google.com">Vá para o google</Link>
            <Background />
            <Menu />
            <Feed>
                <Feed.Header />
                <Text variant="display1" tag="h3">
                    Últimas atualizações
                </Text>
                <Feed.Posts />
            </Feed>
            <Footer />
        </BaseComponent>
    )
}