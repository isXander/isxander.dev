import type { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}