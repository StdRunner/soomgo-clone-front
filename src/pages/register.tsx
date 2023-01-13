import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroups'
import { FaCheckSquare } from 'react-icons/fa'
import axios from 'axios'

const register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});

    // 약관 동의 State, function
    const [termsOfUse, setTermsOfUse] = useState(false);
    const [termsOfPrivacy, setTermsOfPrivacy] = useState(false);
    const [older14, setOlder14] = useState(false);

    const clickAll = () => {
        if(termsOfUse && termsOfPrivacy && older14) {
            setTermsOfUse(false);
            setTermsOfPrivacy(false);
            setOlder14(false);
        } else {
            setTermsOfUse(true);
            setTermsOfPrivacy(true);
            setOlder14(true);   
        }
    }
    const clickTermsOfUse = () => {
        termsOfUse ? setTermsOfUse(false) : setTermsOfUse(true)
    }
    const clickTermsOfPrivacy = () => {
        termsOfPrivacy ? setTermsOfPrivacy(false) : setTermsOfPrivacy(true)
    }
    const clickOlder14 = () => {
        older14 ? setOlder14(false) : setOlder14(true)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // 요청 baseURL을 찾을 수 없을 때
        if(axios.defaults.baseURL === undefined 
            || axios.defaults.baseURL === "") {
                console.error(`Cannot defind baseURL. check ".env*" files and "NEXT_PUBLIC_SERVER_BASE_URL" variable.`);
                return;
        }

        const tempErr = {};

        // 사용자 입력 체크
        if(!name) {
            tempErr.name = "이름을 입력해주세요.";
        }
        if(!email) {
            tempErr.email = "이메일 주소를 입력해주세요.";
        }
        if(!password) {
            tempErr.password = "비밀번호를 입력해주세요.";
        }
        
        // 이용 약관 동의 체크
        if(!(termsOfUse && termsOfPrivacy && older14)) {
            tempErr.terms = "이용약관에 동의해주세요.";
        }

        setErrors(tempErr);
        
        // 에러 존재 시 함수 종료
        if(Object.keys(tempErr).length !== 0)
            return;

        try {
            const res = await axios.post(`/auth/signup`, {
                email,
                password,
                name,
                isMaster: false
            })

            console.log('res', res.data);

            if(res.data.email)
                location.href = '/login';
        } catch (error: any) {
            console.log('error', error);
        }
    }

    return (
        <div className='flex'>
            <div className='w-full py-20'>
            <h1 className='w-full mb-12 font-medium text-center' style={{ fontSize : '2.125rem' }}>
                    숨고에 오신 것을 환영합니다
                </h1>
                <form onSubmit={handleSubmit}
                    className='w-full mx-auto justify-center bg-white p-10 rounded-md'
                    style={{ border: '1px solid #f2f2f2', width: '424px' }}>
                    <div className='mb-6'>
                        <h4 className='mb-2 font-semibold'>이름</h4>
                        <InputGroup 
                            placeholder = "이름(실명)을 입력해주세요"
                            value={name}
                            setValue={setName}
                            error={errors.name}
                            className=''
                        />
                    </div>
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
                            placeholder = "영문+숫자 조합 8자리 이상 입력해주세요"
                            value={password}
                            setValue={setPassword}
                            error={errors.password}
                            className=''
                        />
                    </div>

                    <div className='flex justify-between'>
                        <div 
                            className='flex cursor-pointer'
                            onClick={clickAll}
                        >
                            <FaCheckSquare 
                                className={termsOfUse && termsOfPrivacy && older14 ?
                                    'text-2xl text-[#9370db]' : 
                                    'text-2xl text-[lightgray]'
                                } 
                            />
                            <span className='font-bold ml-2'>전체동의</span>
                        </div>
                    </div>

                    <div className='border-t border-gray-200 mt-4 pb-4' />
                    <div className='h-36'>
                        <div className='flex justify-between'>
                            <div 
                                className='flex cursor-pointer'
                                onClick={clickTermsOfUse}
                            >
                                <FaCheckSquare 
                                    className={termsOfUse ? 
                                        'text-2xl text-[#9370db]' :
                                        'text-2xl text-[lightgray]'
                                    } 
                                />
                                <span className='ml-2 text-sm'>(필수) 이용약관 동의</span>
                            </div>
                            <span className='text-sm text-gray-400 cursor-pointer'>보기</span>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div 
                                className='flex cursor-pointer'
                                onClick={clickTermsOfPrivacy}
                            >
                                <FaCheckSquare 
                                    className={termsOfPrivacy ?
                                        'text-2xl text-[#9370db]' : 
                                        'text-2xl text-[lightgray]'
                                    } 
                                />
                                <span className='ml-2 text-sm'>(필수) 개인정보 수집 및 이용 동의</span>
                            </div>
                            <span className='text-sm text-gray-400 cursor-pointer'>보기</span>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div 
                                className='flex cursor-pointer'
                                onClick={clickOlder14}
                            >
                                <FaCheckSquare 
                                    className={older14 ? 
                                        'text-2xl text-[#9370db]' : 
                                        'text-2xl text-[lightgray]'
                                    } 
                                />
                                <span className='ml-2 text-sm'>(필수) 14세 이상</span>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <small className='font-medium text-red-500'>{errors.terms}</small>
                        </div>
                    </div>
                    
                    
                    <button className='p-3 mb-3 mt-3 w-full text-white rounded-md font-medium bg-[#9370db] hover:bg-[#663399]'>
                        회원가입
                    </button>
                    <button className='flex mb-3 p-3 w-full text-white rounded-md font-medium bg-[#1876f1] hover:bg-[#0d64d6] justify-center items-center'>
                        <img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg" alt="이미지가 없습니다." />
                        <span className='ml-3'>Facebook으로 가입하기</span>
                    </button>

                    <div className='flex justify-center mt-6 mb-3 text-sm font-bold text-gray-500'>
                        고수로 가입하시나요?
                    </div>
                </form>
              </div>
        </div>
    )
}

export default register