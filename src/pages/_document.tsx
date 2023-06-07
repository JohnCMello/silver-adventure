import Document, { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { extractLocaleFromPath } from '@libs/i18n'

import createEmotionServer from '@emotion/server/create-instance'
import { createEmotionCache } from '@libs/theme/create-emotion-cache'
import { AppProps, AppType } from 'next/app'
import { EmotionCache } from '@emotion/cache'

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[]
}
class MyDocument extends Document<MyDocumentProps> {
  render() {
    const [locale] = extractLocaleFromPath(this.props.dangerousAsPath)
    const { emotionStyleTags } = this.props

    return (
      <Html lang={locale}>
        <Head>{emotionStyleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

interface EnhancedAppProps extends AppProps {
  emotionCache?: EmotionCache
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  // Run the React rendering logic synchronously
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & EnhancedAppProps>) => {
        return function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        }
      },
    })

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx)

  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return { ...initialProps, emotionStyleTags }
}

export default MyDocument
