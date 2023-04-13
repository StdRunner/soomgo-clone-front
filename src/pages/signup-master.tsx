import React, {  } from 'react'
import styles from '../styles/Icons.module.css'

const signup = () => {

    return (
        <div className=''>
            <div className='flex w-full bg-[#9370db]'>
                <div 
                    className='flex mx-auto w-full h-96'
                    style={{ 
                        maxWidth: '60.5rem',
                    }}
                >
                    <div className='left-0 w-5/12 right-auto pt-20 text-4xl font-bold text-white'>
                    숨은고수가 되어 <br />
                    수익을 만들어보세요!
                    </div>
                    <div className='flex justify-end'>
                        <img className='h-96' src="workers.jpg" />
                    </div>
                </div>
            </div>

            <div className='flex h-40 justify-center'>
                <div
                    className='relative w-full h-5'
                    style={{ 
                        maxWidth: '60rem',
                    }}
                >
                    <div className='absolute bg-white h-48 w-full py-7 px-11 rounded-xl drop-shadow-lg' style={{top: '-3.5rem'}}>
                        <div className='flex justify-center text-xl font-bold mb-4 text-[#323232]'>
                            활동 분야를 선택하세요
                        </div>
                        <div className='flex justify-between h-32'>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/lesson.svg" alt="레슨" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    레슨
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/home-living.svg" alt="홈/리빙" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    홈/리빙
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/event.svg" alt="이벤트" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    이벤트
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/business.svg" alt="비즈니스" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    비즈니스
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/design-development.svg" alt="디자인/개발" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    디자인/개발
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/health-beauty.svg" alt="건강/미용" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    건강/미용
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/part-time-job.svg" alt="알바" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    알바
                                </div>
                            </div>
                            <div className={styles.cat_icon + ' w-24 h-24 py-2'}>
                                <div className='flex justify-center'>
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/etc.svg" alt="기타" />
                                </div>
                                <div className='flex justify-center font-semibold text-[#323232]'>
                                    기타
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className='flex mx-auto w-full'
                style={{ 
                    maxWidth: '60.5rem',
                }}
            >
                <div className='mx-auto w-full py-12'>
                    <div className='flex w-full text-3xl mt-5 mb-8 justify-center'>
                        수많은 고객들이 고수님을 기다립니다
                    </div>
                    <div className='flex text-[#909090] mb-4 text-base justify-center'>
                        가장 많은 고객이 숨고에 있습니다. 숨고에서 빠르고 편리하게 고객을 만나세요.
                    </div>
                    <div className='flex justify-around'>
                        <div className='px-4'>
                            <div className='flex justify-center my-5 text-5xl text-[#9370db] font-semibold'>
                                9,941,032
                            </div>
                            <div className='flex justify-center mb-7'>
                                누적 요청서
                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='flex justify-center my-5 text-5xl text-[#9370db] font-semibold'>
                                720,093
                            </div>
                            <div className='flex justify-center mb-7'>
                                등록된 고수
                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='flex justify-center my-5 text-5xl text-[#9370db] font-semibold'>
                                4.9 / 5점
                            </div>
                            <div className='flex justify-center mb-7'>
                                평균 리뷰별점
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-12 bg-white'>
                <div 
                    className='flex w-full mx-auto'
                    style={{ 
                        maxWidth: '60.5rem',
                    }}
                >
                    <div className='mx-auto w-full py-12'>
                        <div className='flex justify-center w-full mb-12 text-3xl font-semibold'>
                            숨고는 어떻게 운영되나요?
                        </div>
                        <div className='flex justify-around'>
                            <div className=''>
                                <div className='flex justify-center'>
                                    <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_1.png?webp=1" alt="" />
                                </div>
                                <div className='flex justify-center my-5 text-xl font-semibold text-[#323232]'>
                                    고객의 요청을 받아보세요
                                </div>
                                <div className='flex justify-center text-sm text-[#5A5A5A]'>
                                    고객이 필요한 서비스의 요청서를 작성하면
                                </div>
                                <div className='flex justify-center mb-12 text-sm text-[#5A5A5A]'>
                                숨고가 검토 후 고수님께 무료로 보내드려요.
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-center'>
                                    <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_2.png?webp=1" alt="" />
                                </div>
                                <div className='flex justify-center my-5 text-xl font-semibold text-[#323232]'>
                                    맞춤 견적을 보내세요
                                </div>
                                <div className='flex justify-center text-sm text-[#5A5A5A]'>
                                    요청서 확인 후 간단히 견적금액만 입력하면
                                </div>
                                <div className='flex justify-center mb-12 text-sm text-[#5A5A5A]'>
                                    프로필과 함께 고객에게 메시지로 전송돼요.
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-center'>
                                    <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_3.png?webp=1" alt="" />
                                </div>
                                <div className='flex justify-center my-5 text-xl font-semibold text-[#323232]'>
                                    상담 후 거래하세요
                                </div>
                                <div className='flex justify-center text-sm text-[#5A5A5A]'>
                                    원하는 고객과 채팅 및 전화(안심번호)로 자세한
                                </div>
                                <div className='flex justify-center mb-12 text-sm text-[#5A5A5A]'>
                                    사항을 협의하고 거래하세요.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-36 h-14 bg-[#9370db] rounded-md text-white font-semibold'>
                                더 알아보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup