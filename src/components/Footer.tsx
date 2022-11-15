import React from 'react'

const Footer = () => {
  return (
    <div className='h-96 bg-white border-t border-[#e1e1e1] pt-5 pb-10 justify-center items-center'>
        <div className='h-full mx-96 px-20'>
            <div className='flex h-1/2'>
                <div className='h-full'>
                    <div className='h-full pb-7'>
                        <p className='pb-1 text-xl font-medium text-[#9370db]'>
                            1234-5678
                        </p>
                        <p className='pb-8 text-sm text-[#737373]'>
                            평일 88: - 88:00 <br />
                            (점심시간 88:00 - 88:00 제외 · 주말/공휴일 제외)
                        </p>
                        <div className='flex'>
                            <button className='flex h-9 w-36 mr-2 bg-[#9370db] text-xs text-white font-medium rounded-3xl justify-center items-center'>
                                <img src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg" alt="앱스토어" />
                                APP STORE
                            </button>
                            <button className='flex h-9 w-36 bg-[#9370db] text-xs text-white font-medium rounded-3xl justify-center items-center'>
                                <img src="https://assets.cdn.soomgo.com/icons/icon-download-palystore.svg" alt="구글플레이" />
                                PLAY STORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='relative left-72 h-full w-96 inline'>
                    <div className='inline'>
                        <p>숨고소개</p>
                        <p>회사소개</p>
                        <p>채용안내</p>
                        <p>팀블로그</p>
                    </div>
                    <div className='flex'>
                        <p>고객안내</p>
                        <p>이용안내</p>
                        <p>안전정책</p>
                        <p>예상금액</p>
                        <p>고수찾기</p>
                        <p>숨고보증</p>
                        <p>고수에게묻다</p>
                    </div>
                    <div className='flex'>
                        <p>고수안내</p>
                        <p>이용안내</p>
                        <p>고수가이드</p>
                        <p>고수가입</p>
                        <p>고수센터</p>
                    </div>
                    <div className='flex'>
                        <p>고객센터</p>
                        <a>공지사항</a>
                        <a>자주묻는질문</a>
                    </div>
                </div>
            </div>
            <div className='h-1/2 pt-5'>
                FOOTER 2
            </div>
        </div>
    </div>
  )
}

export default Footer