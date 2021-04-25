import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment
  return (
    <DefaultSeo {...SEO}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </DefaultSeo>
  )
}

export default MyApp
