import '../styles/main.scss';
import NextNprogress from "nextjs-progressbar";

export default function Myapp({Component, pageProps}) {
  return (
    <>
    <NextNprogress
      color="#29D"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
      <Component {...pageProps} />
    </>
  )
}