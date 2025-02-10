import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { Post } from "@src/services/posts/PostsService";

// interface HomeScreenProps {
//     posts: Post[];
// }

function HomeScreen(props) {
    const theme = useTheme();

    return (
        <BaseComponent
            tag="main"
            styleSheet={{
                backgroundColor: theme.colors.neutral.x000,
                flex: 1,
                alignItems: 'center',
            }}
        >   
            <Background />
            <Menu />
            <Feed>
                <Feed.Header />
                <Feed.Posts posts={props.posts} />
            </Feed>
            <Footer /> 
        </BaseComponent>
    )
}

export default templatePageHOC(HomeScreen, {
    title: "Home",
})