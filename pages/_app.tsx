import { wrapper } from '@store/index'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

// import { AppProps } from 'next/app'
import React from 'react'
// import defaultLayout from 'layouts/default'
// import LayoutWrapper from 'layouts/layout-wrapper'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default wrapper.withRedux(MyApp)
