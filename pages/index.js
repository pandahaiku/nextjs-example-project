import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/blog-posts'
import Link from 'next/link'
import Date from '../components/date'

// getStaticProps() is a special function in next.js that populates the props
// that will be passed to Home component
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

// TODO: if fetching data from server use the following
/*
export async function getServerSideProps(context) {
  // 'context' contains request specific parameters
  // fetch data from external API
  const res = await fetch("https://google.com");
  const data = await res.json();
  
  // pass data to the page via props
  return { props: { data }}
}
*/

// Any pages in the /pages directory are js files that export React Components
// These components can use other components but index.js is special to next.js
// It is always used as the home page
// Note: Home() is not a key name, it can be anything
export default function Home({ allPostsData, data }) {
  return (
    // home is passed to layout which is used as a boolean to determin
    // when the home screen is loaded
    // this format is called a JSX attribute: https://reactjs.org/docs/jsx-in-depth.html
    <Layout home={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* className= sets the attribute for the given section, and we can use styles defined from utilStyles which was imported*/}
      <section className={utilStyles.headingMd}>
        <p>Hello, today my name is Douglas Galm. I am a software engineer and I love the sweet flavor of Yellow Watermelons - and the color too.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
