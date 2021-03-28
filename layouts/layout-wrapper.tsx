import DefaultLayout from './default'
import AdminLayout from './admin'
import LoginLayout from './login'
import AboutLayout from './about'

const layouts: any = {
  default: DefaultLayout,
  admin: AdminLayout,
  login: LoginLayout,
  about: AboutLayout,
}

const LayoutWrapper = (props: any) => {
  console.log('props :>> ', props)
  const Layout: any = layouts[props.children.type.layout]
  console.log('Layout :>> ', Layout)

  if (Layout !== null) {
    return <Layout {...props}>{props.children}</Layout>
  }

  return <DefaultLayout {...props}>{props.children}</DefaultLayout>
}

export default LayoutWrapper
