import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/globals.css'
import Nav from '../components/Nav/index'
import Footer from '../components/Footer/index'




export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>张培国的博客</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://peiguo.oss-cn-beijing.aliyuncs.com/blog/%E6%9C%88%E4%BA%AE.png" />
      </Head>
      <Nav />
      <Footer />
      <Component {...pageProps} />
    </>
  )
}
