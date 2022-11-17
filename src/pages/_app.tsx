import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-[#fafafa]'>
    <Navbar />
    <div className='w-full min-h-screen'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </div>
}

export default MyApp
