import { END } from 'redux-saga'
import { wrapper } from '@store/index'
import { loadData, startClock, tickClock } from '@store/actions'
import HomeLayout from 'layouts/home'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '@components/organisms/page'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  })

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))

  if (!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  }
  await store.sagaTask?.toPromise()
})

HomePage.Layout = HomeLayout

export default HomePage
