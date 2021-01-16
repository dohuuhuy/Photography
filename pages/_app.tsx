import React from 'react'
import { AppProps, Container } from 'next/app'
import { wrapper } from '@store/store'
import AuthTemplate from '@templates/AuthTemplate'
// begin mdreact
import 'bootstrap-css-only/css/bootstrap.min.css'
import '@common/scss/mdb.scss'
// end mdreact
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import { useDispatch } from 'react-redux'
import { fetchMenu } from '@store/menu/menu.action'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch()
  dispatch(fetchMenu())

  return (
    <Container>
      <DefaultSeo {...SEO} />
      <AuthTemplate>
        <Component {...pageProps} />
      </AuthTemplate>
    </Container>
  )
}

export default wrapper.withRedux(CustomApp)
