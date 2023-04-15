import '@/styles/globals.css'
import { BACKEND_URL } from "next.config";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
