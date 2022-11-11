import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-[#fafafa]'>
    <Navbar />
    <div className='pt-16 w-full h-screen'>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
