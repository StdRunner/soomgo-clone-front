import React from 'react'

const Footer = () => {
  return (
    <div className='h-96 bg-white border-t border-[#e1e1e1] pt-5 pb-10 justify-center items-center'>
        <div className='h-full mx-auto w-fit'>
            <div className='flex h-1/2'>
                <div className='h-full'>
                    <div className='h-full pb-7'>
                        <p className='pb-1 text-xl font-medium text-[#9370db]'>
                            1234-5678
                        </p>
                        <p className='pb-8 text-sm font-medium text-[#737373]'>
                            평일 10:00 - 18:00<br />
                            (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)
                        </p>
                        <div className='flex'>
                            <button className='flex h-9 w-36 mr-2 bg-[#9370db] text-xs text-white font-medium rounded-3xl justify-center items-center'>
                                <img src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg" alt="앱스토어" className='mr-1'/>
                                APP STORE
                            </button>
                            <button className='flex h-9 w-36 bg-[#9370db] text-xs text-white font-medium rounded-3xl justify-center items-center'>
                                <img src="https://assets.cdn.soomgo.com/icons/icon-download-palystore.svg" alt="구글플레이" className='mr-1' />
                                PLAY STORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='relative left-72 h-full w-96 flex justify-evenly'>
                    <div className='inline w-24 text-sm'>
                        <p className='pb-1 font-bold text-[#323232]'>숨고소개</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>회사소개</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>채용안내</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>팀블로그</p>
                    </div>
                    <div className='inline w-24 text-sm'>
                        <p className='pb-1 font-bold text-[#323232]'>고객안내</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>이용안내</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>안전정책</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>예상금액</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>고수찾기</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>숨고보증</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>고수에게묻다</p>
                    </div>
                    <div className='inline w-24 text-sm'>
                        <p className='pb-1 font-bold text-[#323232]'>고수안내</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>이용안내</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>고수가이드</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>고수가입</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>고수센터</p>
                    </div>
                    <div className='inline w-24 text-sm'>
                        <p className='pb-1 font-bold text-[#323232]'>고객센터</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>공지사항</p>
                        <p className='pb-1 cursor-pointer text-[#737373]'>자주묻는질문</p>
                    </div>
                </div>
            </div>
            <div className='flex h-1/2 pt-5'>
                <div style={{ width: '782px' }}>
                    <div className='flex pr-24 pb-2'>
                        <p className='text-xs font-bold text-[#737373] mr-7 cursor-pointer'>이용약관</p>
                        <p className='text-xs font-bold text-[#737373] mr-7 cursor-pointer'>개인정보처리방침</p>
                        <p className='text-xs font-bold text-[#737373] mr-7 cursor-pointer'>사업자 정보확인</p>
                    </div>
                    <div className='pr-24 pb-2'>
                        <p className='text-xs text-[#737373]'>
                            (주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
                        </p>
                    </div>
                    <ul className='text-xs text-[#737373]'>
                        <li>상호명:(주)브레이브모바일 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층</li>
                        <li>사업자등록번호:120-88-22325 · 통신판매업신고증:제 2021-서울강남-00551 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호</li>
                        <li>고객센터:1599-5319 · 이메일:support@soomgo.com</li>
                        <li>Copyright ©Brave Mobile Inc. All Rights Reserved.</li>
                    </ul>
                </div>
                <div className='grid content-end'>
                    <div className='flex w-48 justify-between pb-10'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-facebook.svg" alt="페이스북" className='cursor-pointer' />
                        <img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-instagram.svg" alt="인스타" className='cursor-pointer' />
                        <img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverblog.svg" alt="블로그" className='cursor-pointer' />
                        <img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverpost.svg" alt="포스트" className='cursor-pointer' />
                        <img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-tistory.svg" alt="티스토리" className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer