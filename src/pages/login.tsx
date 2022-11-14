import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroups'

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        try {
            /**
             * 로그인 로직 추가
             */
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }
    }

    return (
        <div>
            <div className='mx-auto py-20 max-w-md'>
                <h1 className='mb-12 mx-auto text-3xl font-semibold w-fit'>
                    로그인
                </h1>
                <form onSubmit={handleSubmit}
                    className='bg-white p-10 rounded-md border'>
                    <div className='mb-8'>
                        <h4 className='mb-2 font-semibold'>이메일</h4>
                        <InputGroup 
                            placeholder = "example@soomgo-clone.com"
                            value={email}
                            setValue={setEmail}
                            error={errors.email}
                            className=''
                        />
                    </div>
                    <div className='mb-8'>
                        <h4 className='mb-2 font-semibold'>비밀번호</h4>
                        <InputGroup 
                            placeholder = "비밀번호를 입력해주세요."
                            value={password}
                            setValue={setPassword}
                            // error={errors.password}
                            error='패스워드가 잘못되었습니다.'
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
                    <button className='flex my-3 p-3 w-full rounded-md font-medium bg-[#fee500] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>카카오로 시작</span>
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#03c75a] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-naver-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>네이버로 시작</span>
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#1876f1] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>페이스북으로 시작</span>
                    </button>
                </form>
              </div>
        </div>
    )
}

export default login