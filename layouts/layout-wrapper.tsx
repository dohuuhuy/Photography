import DefaultLayout from './default'
import AdminLayout from './admin'
import LoginLayout from './login'
import AboutLayout from './about'
import HomeLayout from './home'

const layouts: any = {
  default: DefaultLayout,
  admin: AdminLayout,
  login: LoginLayout,
  about: AboutLayout,
  home: HomeLayout,
}

const LayoutWrapper = (props: any) => {
  const Layout: any = layouts[props.children.type.layout]

  if (Layout !== null) {
    return <Layout {...props}>{props.children}</Layout>
  }

  return <DefaultLayout {...props}>{props.children}</DefaultLayout>
}

export default LayoutWrapper
