import List_News from '@components/molecules/ListNews'
import Pagination from '@components/molecules/Pagination'
import ArticleDetail from '@components/organisms/PostDetail'
import SingleDetails from '@components/organisms/SingleDetails'
import { withRouter } from 'next/dist/client/router'
import React from 'react'
import { TypeLinkSubCate } from 'src/controllers/subCate.controller'

const SubCate = ({ result }: any) => {
  if (!result) return <em>Đang cập nhật ...</em>
  const { data, typeLink } = result

  switch (typeLink) {
    case 'list_post_sub_cate':
      const { list, total, page }: any = data
      return (
        <>
          <List_News list_post={list} />
          <Pagination Total={total} Page={page} />
        </>
      )
    case 'post':
      const { post_from_list, post_from_menu, type }: any = data
      const x = type === 'post_from_list' ? post_from_list : post_from_menu
      return <ArticleDetail details_Post={x} />

    case 'single':
      const { single } = data
      return <SingleDetails single={single} />

    default:
      return null
  }
}
export default withRouter(SubCate)

export const getStaticProps = async (ctx: any) => {
  const result = await TypeLinkSubCate(ctx)
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
