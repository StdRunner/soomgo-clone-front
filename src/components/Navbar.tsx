import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className='flex fixed top-0 left-0 w-full h-16 px-80 bg-white '>
            <div className='flex w-full px-14 justify-center items-center'>
                <div className='w-4/12 h-min pr-14'>
                    <a href="/">PlatForm Logo</a>
                </div>
                <div className='w-3/12 h-min'>
                    Search Input
                </div>
                <div className='flex w-3/12 pl-14 justify-evenly text-sm items-center'>
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