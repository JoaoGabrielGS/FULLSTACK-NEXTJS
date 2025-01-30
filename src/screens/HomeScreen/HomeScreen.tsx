import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { BaseComponent } from "@src/theme/BaseComponent";

export default function HomeScreen() {
    return (
        <BaseComponent
            tag="main"
            styleSheet={{
                backgroundColor: 'grey',
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