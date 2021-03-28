import Head from 'next/head'
import Link from 'next/link'

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta charSet="utf-8" />
      </Head>
      <div>
        <div className="sidenav">
          <Link href="/">Home</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div id="main">{children}</div>
      </div>
    </>
  )
}

export default AdminLayout
