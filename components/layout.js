import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Summary //
// This file contains information for how the layout should be rendered
// It covers the page layout for home and non-home pages

const name = 'Anime Repo'
export const siteTitle = 'Anime Repo... Under construction'

export default function Layout({ children, home }) {
  return (
    <div className="mx-auto mt-12 mb-24 max-w-xl py-0 px-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="animeRepoIcon"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              height={880}
              width={1452}
              alt={name}
            />
            <h1 className="font-extrabold text-4xl mx-0 my-4 tracking-tighter">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  height={880}
                  width={1452}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl mx-0 my-4">
              <Link href="/">
                <a className="text-inherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mx-0 mb-0 mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
