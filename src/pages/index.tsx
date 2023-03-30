import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className='bg-white'>
            <div 
                className='mx-auto justify-center bg-white py-4'
                style={{ 
                    maxWidth: '60.5rem',
                }}
            >
                <div 
                    className='border rounded-md'
                    style={{ 
                        height: '264px'
                    }}
                >
                    Soomgo Clone App Home Slides
                </div>

                <div className='flex border justify-between rounded-md h-32 p-4 mt-8 mb-16'>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                    <div className='border w-24 h-24 bg-[lightgray]'>
                        Service
                    </div>
                </div>


                <h2 className='text-2xl font-medium'>
                    숨고 인기 서비스
                </h2>
                <div 
                    className='border rounded-md'
                    style={{ 
                        height: '264px'
                    }}
                >
                    Content
                </div>

                <h2 className='text-2xl font-medium'>
                    숨고 커뮤니티에 물어보세요
                </h2>
                <div 
                    className='border rounded-md'
                    style={{ 
                        height: '264px'
                    }}
                >
                    Content
                </div>

                <h2 className='text-2xl font-medium'>
                    지금 바로 원하는 서비스를 받아보세요!
                </h2>
                <div 
                    className='border rounded-md'
                    style={{ 
                        height: '264px'
                    }}
                >
                    Content
                </div>

                <h2 className='text-2xl font-medium'>
                    지금 인기 있는 고수
                </h2>
                <div 
                    className='border rounded-md'
                    style={{ 
                        height: '264px'
                    }}
                >
                    Content
                </div>

                <h2 className='text-2xl font-medium'>
                    ...
                </h2>
            </div>
        </div>
    )
}

export default Home
