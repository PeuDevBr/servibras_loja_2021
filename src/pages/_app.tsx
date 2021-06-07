import { AppProps } from "next/app"
import Head from 'next/head'
import { GlobalStyle } from "../../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Loja Servibras</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp
