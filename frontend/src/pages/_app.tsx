import { Container, Box } from '@material-ui/core'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar/>
    
    <Container>
      <Box marginTop={1}>
        <Component {...pageProps} />
      </Box>
    </Container>
  </>
}
export default MyApp
