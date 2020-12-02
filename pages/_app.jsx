import { BaseStyles } from '../styles/base'
import { ThemeProvider, useTheme } from '@material-ui/core'
import NProgress from 'nextjs-progressbar'

const App = ({ Component, pageProps }) => {
  const muiTheme = useTheme()

  const theme = {
    ...muiTheme,
    palette: {
      ...muiTheme.palette,
      primary: {
        dark: '#790e8b',
        light: '#df78ef',
        main: '#ab47bc',
        contrastText: '#fff',
      },
      secondary: {
        dark: '#c79a00',
        light: '#fffd61',
        main: '#ffca28',
        contrastText: '#000',
      },
      action: {
        ...muiTheme.palette.action,
        active: `rgba(171, 71, 188, 0.54)`,
        hover: `rgba(171, 71, 188, 0.04)`,
        selected: ` rgba(171, 71, 188, 0.15)`,
        focus: `rgba(171, 71, 188, 0.12)`,
      },
    },
  }

  return (
    <>
      <BaseStyles />
      <ThemeProvider theme={theme}>
        <NProgress color={'#ab47bc'} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
