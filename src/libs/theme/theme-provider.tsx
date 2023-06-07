import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from './create-emotion-cache'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { theme } from './theme'
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()

type ThemeProviderProps = { children: React.ReactNode; emotionCache?: EmotionCache }
export function ThemeProvider(props: ThemeProviderProps) {
  const { children, emotionCache = clientSideEmotionCache } = props
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  )
}
