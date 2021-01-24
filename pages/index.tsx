// import Layout from '../src/Layout/Layout'
import { wrapper } from '@store/index'
import { fetchMenu } from '@store/menu/menu.action'
import { MDBCol, MDBRow } from 'mdbreact'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import React from 'react'
const Home: React.FC = () => {
  const dispatch = useDispatch()

  dispatch(fetchMenu())

  return (
    <>
      <MDBRow style={{ height: '100vh' }} className="mt-5">
        <MDBCol className="mx-auto">
          <h1 style={{ textAlign: 'center' }}>page index</h1>
          <Image
            src={require('../public/favicon/android-chrome-192x192.png')}
            width={100}
            height={100}
            className="abc"
          />
        </MDBCol>
      </MDBRow>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }: any) => {
  store.dispatch(fetchMenu())
})

export default Home
