import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { DefaultSeo } from 'next-seo'
import React from 'react'
import SEO from './../next-seo.config'

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment
  return (
    <LayoutWrapper>
      <DefaultSeo {...SEO}>
        <Component {...pageProps} />
      </DefaultSeo>
    </LayoutWrapper>
  )
}

export default MyApp
