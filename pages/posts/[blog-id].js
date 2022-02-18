import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/blog-posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params["blog-id"])
  return {
    props: {
      postData
    }
  }
}

// getStaticPaths() is a special function in next.js that is used to setup
// dynamic routes, getStaticPaths() provides a list of paths to be statically
// generated, next.js will statically pre-render all paths returned from this
// Note: return object must be in this form
// Note: getStaticPaths cannot be used with getServerSideProps, only getStaticProps
export async function getStaticPaths() {
  const paths = getAllPostIds()
  // Example paths: 
  /*
  [
    { params: { 'blog-id': 'pre-rendering' } },
    { params: { 'blog-id': 'ssg-ssr' } }
  ]
  */
  return {
    paths,
    fallback: false
  }
}


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
