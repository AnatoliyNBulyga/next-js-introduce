import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLauout";


export default function Index() {
  return (
    <MainLayout title={'Home page'}>
      <h1>Hello Next.js</h1>
      <p><Link href="/about"><a>About</a></Link></p>
      <p><Link href="/posts"><a>Posts</a></Link></p>
      <p>Lorem</p>
    </MainLayout> 
  )
  
}
