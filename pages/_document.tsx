import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => 
                originalRenderPage({
                    enhanceApp: (App) => (props) => 
                        sheet.collectStyles(<App { ...props } />),
                })
            
                const initialProps = await Document.getInitialProps(ctx)
                return {
                    ...initialProps,
                    styles: [initialProps.styles, sheet.getStyleElement]
                }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}