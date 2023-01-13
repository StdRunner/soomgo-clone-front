import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {

  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

  return <div className='bg-[#fafafa]'>
    <Navbar />
    <div className='w-full min-h-fit'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </div>
}

export default MyApp
