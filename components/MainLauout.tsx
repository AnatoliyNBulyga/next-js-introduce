import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'New app'}) {
  return (
    <>
      <Head>
        <title>{title} | Next js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next, react, javascript"/>
      </Head>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            background-color: darkblue;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          nav a {
            color: #fff;
            margin-left: 15px;
            margin-right: 15px;
            text-decoration: none;
          }
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  )
}