import React, { useRef, useEffect, FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroups'
import { FaCheckSquare } from 'react-icons/fa'
import axios from 'axios'
import * as EmailValidator from 'email-validator';
import { Z_ASCII } from 'zlib';

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
                        maxWidth: '62.5rem',
                    }}
                >
                    <div className='absolute bg-white h-48 w-full py-7 px-11 rounded-xl drop-shadow-lg' style={{top: '-3rem'}}>
                        <div className='flex justify-center text-xl font-bold mb-4'>
                            활동 분야를 선택하세요
                        </div>
                        <div className='flex justify-between h-32'>
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
                    </div>
                </div>
            </div>

            <div 
                className='flex mx-auto w-full h-96'
                style={{ 
                    maxWidth: '60.5rem',
                }}
            >
                <div className='mx-auto w-full h-96 py-12'>
                    <div className='flex w-full text-3xl mt-5 mb-8 justify-center'>
                        수많은 고객들이 고수님을 기다립니다
                    </div>
                    <div className='flex text-[#909090] mb-4 text-base justify-center'>
                        가장 많은 고객이 숨고에 있습니다. 숨고에서 빠르고 편리하게 고객을 만나세요.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup