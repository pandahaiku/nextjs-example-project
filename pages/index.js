import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/blog-posts'
import Link from 'next/link'
import Date from '../components/date'
import CoffeeButton from '../components/coffee-button'
import SideBar from '../components/sidebar'

// TODO: move this to config
const payPalLink = "https://www.paypal.com/donate/?business=CAPDXWBRXRRH2&no_recurring=0&currency_code=USD";

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
    <div className="flex">
      <SideBar>
        
      </SideBar>
      {/* home is passed to layout which is used as a boolean to determin
    when the home screen is loaded
    this format is called a JSX attribute: https://reactjs.org/docs/jsx-in-depth.html */}
      <Layout home={1}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="text-xl leading-normal">
          <p>Anime Repo is a website for everything Anime. Top Rated Anime. Reviews. Discussions. Everything.
            Currently Under Construction. Please come back later!
          </p>
        </section>
        <section className="text-xl leading-normal pt-px my-4">
          <h2 className="text-2xl mx-0 my-4">Blog</h2>
          <ul className="m-0 p-0">
            {/* {allPostsData.map(({ id, date, title }) => (
              <li className="mx-0 mt-0 mb-5" key={id}>
                <Link href={`/posts/${id}`}>
                  <a className="text-blue-500 no-underline hover:underline hover:text-yellow-500">{title}</a>
                </Link>
                <br />
                <small className="text-gray-500">
                  <Date dateString={date} />
                </small>
              </li>
            ))} */}
            <Link href="https://www.ign.com/articles/2019/11/25/top-25-best-anime-series-of-all-time">
                  <a className="text-blue-500 no-underline hover:underline hover:text-yellow-500">IGN&apos;s TOP 25 Anime of All Time</a>
            </Link>
          </ul>
        </section>
        <Link href={payPalLink} passHref>
          <CoffeeButton></CoffeeButton>
        </Link>
      </Layout>
    </div>

  )
}
