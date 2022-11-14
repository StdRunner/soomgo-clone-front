import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar: React.FC = () => {
    return (
        <div className='flex fixed top-0 left-0 w-full h-16 bg-white '>
            <div className='flex w-full px-14 justify-center items-center'>
                <div className='flex w-96 h-9 justify-evenly items-center'>
                    <a href="/" className='italic text-lg font-bold text-[#9370db]'>
                        Soomgo<br/>
                        Clone
                    </a>
                    <div className='font-semibold text-[#323232]'>
                        <a href='/'>
                            고수매칭
                        </a>
                    </div>
                    <div className='font-semibold text-[#323232]'>
                        <a href='/'>
                            고수찾기
                        </a>
                    </div>
                    <div className='font-semibold text-[#323232]'>
                        <a href='/'>
                            마켓
                        </a>
                    </div>
                    <div className='font-semibold text-[#323232]'>
                        <a href='/'>
                            커뮤니티
                        </a>
                    </div>
                </div>
                <div className='w-80 h-min pl-10'>
                    <input type="text" 
                        placeholder='어떤 서비스가 필요하세요?'
                        className='service-search w-full h-10 pr-3 pl-10 bg-[#f4f4f4] text-sm rounded-md bg-[0.5rem] bg-no-repeat bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iI0I1QjVCNSIgc3Ryb2tlLXdpZHRoPSIxLjYiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K")]'
                    />
                </div>
                <div className='flex w-72 pl-10 justify-evenly text-sm items-center'>
                    <Link href='/login'>
                        로그인
                    </Link>
                    <Link href='/register'>
                        회원가입
                    </Link>
                    <button className='h-9 px-3 text-white rounded-md font-semibold bg-[#9370db] hover:bg-[#663399]'>
                        <a href="/master">고수가입</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar