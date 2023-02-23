import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroups'
import axios from 'axios'
import { profileEnd } from 'console';

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // 요청 baseURL을 찾을 수 없을 때
        if(axios.defaults.baseURL === undefined 
            || axios.defaults.baseURL === "") {
                console.error(`Cannot defind baseURL. check ".env*" files and "NEXT_PUBLIC_SERVER_BASE_URL" variable.`);
                return;
        }
        
        const tempErr = {
            email : '',
            password : ''
        };

        // 사용자 입력 체크
        if(!email) {
            tempErr.email = "이메일 주소를 입력해주세요.";
        }
        if(!password) {
            tempErr.password = "비밀번호를 입력해주세요.";
        }

        setErrors(tempErr);

        // 에러 존재 시 함수 종료
        if(Object.keys(tempErr).length !== 0)
            return;

        try {
            const res = await axios.post(`/auth/login`, {
                email,
                password,
                name: null,
                isMaster: null
            })

            console.log('res', res.data);
        } catch (error: any) {
            console.log('error', error);
        }
    }

    return (
        <div className='flex'>
            <div className='w-full py-20'>
                <h1 className='w-full mb-12 font-medium text-center' style={{ fontSize : '2.125rem' }}>
                    로그인
                </h1>
                <form onSubmit={handleSubmit}
                    className='mx-auto justify-center bg-white p-10 rounded-md'
                    style={{ border: '1px solid #f2f2f2', width: '424px' }}>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>이메일</h4>
                        <InputGroup 
                            placeholder = "example@soomgo-clone.com"
                            value={email}
                            setValue={setEmail}
                            error={errors.email}
                            className='' 
                        />
                    </div>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>비밀번호</h4>
                        <InputGroup 
                            placeholder = "비밀번호를 입력해주세요."
                            type='password'
                            value={password}
                            setValue={setPassword}
                            error={errors.password}
                            className=''
                        />
                    </div>
                    <button className='p-3 w-full text-white rounded-md font-medium bg-[#9370db] hover:bg-[#663399]'>
                        이메일 로그인
                    </button>
                    <div className='flex justify-evenly py-6 px-16 text-sm text-gray-500'>
                        <div>
                            <a href=''>비밀번호 찾기</a>
                        </div>
                        <div className='border-r'></div>
                        <div>
                            <a href=''>회원가입</a>
                        </div>
                    </div>
                    <button className='flex my-3 p-3 w-full rounded-md font-medium bg-[#fee500] hover:bg-[#d8c300] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>카카오로 시작</span>
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#03c75a] hover:bg-[#02a149] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-naver-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>네이버로 시작</span>
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#1876f1] hover:bg-[#0d64d6] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>페이스북으로 시작</span>
                    </button>
                </form>
              </div>
        </div>
    )
}

export default login