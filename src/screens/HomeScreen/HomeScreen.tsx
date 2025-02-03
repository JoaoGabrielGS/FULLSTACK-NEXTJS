import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

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