import dynamic from 'next/dynamic'
const HomeLayout = dynamic(() => import('layouts/home'))

const HomePage = () => {
  return null
}

HomePage.Layout = HomeLayout

export default HomePage
