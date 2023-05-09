import React from 'react'
import '../styles/globals.scss'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from "react-redux"
import { client } from '@gql/config'
import { store } from '@store/config'
import { NextPage } from 'next'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className='h-screen overflow-auto font-montserrat'>
        {getLayout(<Component {...pageProps} />)}
        </div>
      </ApolloProvider>
    </Provider>
  )
}
