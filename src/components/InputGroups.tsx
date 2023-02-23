import React from 'react';
import cls from 'classnames';

interface InputGrouProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value: string;
    canview?: boolean;
    error: string | undefined;
    setValue: (str: string) => void;
}

const InputGroup: React.FC<InputGrouProps> = ({
    className = "mb-2",
    type = "text",
    placeholder = "",
    canview,
    error,
    value,
    setValue
}) => {
    return (
        <div className={className}>
            {
                canview && type === 'password' ? 
                <div className='block w-full border border- focus:border-[#9370db]}'>
                    <input 
                        type={type}
                        className={cls(`w-10/12 pl-3 pt-3 pb-3 text-sm transition duration-200 border-t border-l border-b border-gray-400 rounded-l bg-white-50 focus:outline-none`,
                            {
                                "border-red-500": error
                            }
                        )}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div
                        className={cls(`float-right w-2/12 text-sm p-3 text-[#9370db] border-t border-r border-b border-gray-400 rounded-r cursor-pointer`,
                            {
                                "border-red-500": error
                            }
                        )}
                        onClick={(e) => {
                            const pw: any = e.currentTarget.previousSibling;
                            const visibility: any = e.currentTarget;

                            switch(pw.getAttribute('type')) {
                                case 'password' : 
                                    if(pw !== null)
                                        pw.setAttribute('type', 'text');
                                    if(visibility !== null)
                                        visibility.innerText = '숨김';
                                    break;
                                case 'text' : 
                                    if(pw !== null)
                                        pw.setAttribute('type', 'password');
                                    if(visibility !== null)
                                        visibility.innerText = '보기';
                                    break;
                                default : break;
                            }
                        }}
                    >
                        보기
                    </div>
                </div>
                :
                <input 
                    type={type} 
                    className={cls(`w-full p-3 text-sm transition duration-200 border border-gray-400 rounded bg-white-50 focus:outline-none`,
                        {
                            "border-red-500": error
                        }
                    )}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            }
            <small className='font-medium text-red-500'>{error} </small>
        </div>
    )
}

export default InputGroup