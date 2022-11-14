import React from 'react'

const Footer = () => {
  return (
    <div className='h-96 bg-white border-t border-[#e1e1e1] pt-5 pb-10 justify-center items-center'>
        <div className='h-full mx-96 px-20'>
            <div className='flex h-1/2'>
                <div className='h-full w-72'>
                    <div className='mb-7'>
                        FOOTER 1-1
                    </div>
                </div>
                <div className='h-full w-96'>
                    FOOTER 1-2
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