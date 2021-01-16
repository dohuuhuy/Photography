import ArticleSpecial from '@components/organisms/ArticleSpecial'
import DownloadApp from '@components/organisms/DownloadApp'
import HowWork from '@components/organisms/HowWork'
import NewsHorizontal from '@components/organisms/NewsHorizontal'
import SearchHolder from '@components/organisms/SearchHolder'
import SlideHome from '@components/organisms/SlideHome'
import { save_List_Post, save_News_Top } from '@store/include/include.action'
import { withRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { IndexController } from 'src/controllers/index.controller'

const HomePage = ({ result }: any) => {
  if (result === null) return <em>Đang cập nhật ...</em>
  const { list_post, news_Top } = result?.data
  const dispatch = useDispatch()
  dispatch(save_News_Top(news_Top))
  dispatch(save_List_Post(list_post))

  return (
    <>
      <SlideHome />
      <SearchHolder />
      <HowWork />
      <ArticleSpecial />
      <DownloadApp />
      <NewsHorizontal />
    </>
  )
}

export const getStaticProps = async (ctx: any) => {
  const result = await IndexController(ctx)
  return {
    props: { result },
    revalidate: 1,
  }
}

export default withRouter(HomePage)
