import Link from "next/link";
import {MainLayout} from "../components/MainLauout";
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error page</h1>
      <p><Link href="/"><a>Go back to safety</a></Link></p>
    </MainLayout>
  )
}