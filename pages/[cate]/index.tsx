import List_News from '@components/molecules/ListNews'
import Pagination from '@components/molecules/Pagination'
import General from '@components/organisms/General'
import GeneralContent from '@components/organisms/GeneralContent'
import ArticleDetail from '@components/organisms/PostDetail'
import React from 'react'
import { TypeLinkCate } from 'src/controllers/cate.controller'

const Cate = ({ result }: any) => {
  if (!result) return <em>Đang cập nhật ...</em>
  const { data, typeLink } = result
  const {
    top_General,
    list_General,
    total_General,
    list,
    total,
    post,
  }: any = data

  switch (typeLink) {
    case 'list_post_cate':
      return (
        <>
          <List_News list_post={list} />
          <Pagination Total={total} />
        </>
      )
    case 'list_general':
      return (
        <>
          <General top_general={top_General} />
          <GeneralContent list_general={list_General} Total={total_General} />
        </>
      )
    case 'post':
      return <ArticleDetail details_Post={post} />

    default:
      return null
  }
}

export const getStaticProps = async (ctx: any) => {
  const result = await TypeLinkCate(ctx)
  return {
    props: { result },
    revalidate: 1,
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default Cate
