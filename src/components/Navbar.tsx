import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className='flex fixed top-0 left-0 w-full h-16 bg-white '>
            <div className='flex w-full px-14 justify-center items-center'>
                <div className='flex w-96 h-9 justify-evenly items-center'>
                    <a href="/">
                        <img 
                            src="https://assets.cdn.soomgo.com/icons/icon-navi-logo.svg" 
                            alt='Logo Image'
                            className='h-6'
                        />
                    </a>
                    <div className='font-semibold'>
                        <a href='/'>
                            고수매칭
                        </a>
                    </div>
                    <div className='font-semibold'>
                        <a href='/'>
                            고수찾기
                        </a>
                    </div>
                    <div className='font-semibold'>
                        <a href='/'>
                            마켓
                        </a>
                    </div>
                    <div className='font-semibold'>
                        <a href='/'>
                            커뮤니티
                        </a>
                    </div>
                </div>
                <div className='w-72 h-min pl-10'>
                    <input type="text" 
                        placeholder='어떤 서비스가 필요하세요?'
                        className='w-full h-10 px-3 bg-[#f4f4f4] text-sm rounded-md'
                    />
                </div>
                <div className='flex w-72 pl-10 justify-evenly text-sm items-center'>
                    <Link href='/login'>
                        로그인
                    </Link>
                    <Link href='/register'>
                        회원가입
                    </Link>
                    <button className='h-9 px-3 text-white rounded-md font-semibold bg-[#00C7AE]'>
                        <a href="/master">고수가입</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar