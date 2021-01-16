import PostDetail from '@components/organisms/PostDetail'
import React from 'react'
import { FetchPostDetails } from 'src/controllers/post.controller'

const PostPage = ({ post }: any) => {
  if (!post) return <em>Đang cập nhật ...</em>

  return <PostDetail details_Post={post} />
}

export const getStaticProps = async ({ params }: any) => {
  if (params.cate) {
    const post = await FetchPostDetails(params?.post)
    return {
      props: { post },
      revalidate: 1,
    }
  }
}
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default PostPage
