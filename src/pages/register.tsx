    import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroups'

const register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async (event: FormEvent) => {}

    return (
        <div className='flex'>
            <div className='w-full py-20'>
            <h1 className='w-full mb-12 font-medium text-center' style={{ fontSize : '2.125rem' }}>
                    숨고에 오신 것을 환영합니다
                </h1>
                <form onSubmit={handleSubmit}
                    className='mx-auto grid justify-center bg-white p-10 rounded-md'
                    style={{ border: '1px solid #f2f2f2', width: '424px' }}>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>이름</h4>
                        {/* <InputGroup 
                            placeholder = "example@soomgo-clone.com"
                            value={name}
                            setValue={setName}
                            error={errors.name}
                            className=''
                        /> */}
                    </div>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>이메일</h4>
                        {/* <InputGroup 
                            placeholder = "example@soomgo-clone.com"
                            value={email}
                            setValue={setEmail}
                            error={errors.email}
                            className=''
                        /> */}
                    </div>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>비밀번호</h4>
                        {/* <InputGroup 
                            placeholder = "영문+숫자 조합 8자리 이상 입력해주세요"
                            value={password}
                            setValue={setPassword}
                            // error={errors.password}
                            error='패스워드가 잘못되었습니다.'
                            className=''
                        /> */}
                    </div>
                    
                    <button className='p-3 mb-3 w-full text-white rounded-md font-medium bg-[#9370db] hover:bg-[#663399]'>
                        회원가입
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#1876f1] hover:bg-[#0d64d6] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>Facebook으로 가입하기</span>
                    </button>
                </form>
              </div>
        </div>
    )
}

export default register