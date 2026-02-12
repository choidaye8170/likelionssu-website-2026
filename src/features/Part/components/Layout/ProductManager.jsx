import React from 'react'
import PmIntro from '../Pm/PmIntro'
import Lineup from '../Lineup'
import PmContent from '../Pm/PmContent'
import SessionSection from '../SessionSection'

export default function ProductManager() {
  return (
    <div className='flex flex-col items-center w-full px-[1.19rem] sm:px-0'>
      <div className='pb-[3.375rem] sm:pb-[3.87rem]'>
        <PmIntro/>
        <Lineup/>
      </div>
      <div className='w-full pt-[3.375rem] sm:pt-[0rem] pb-[3.375rem] sm:pb-[0rem]'>
        <PmContent/>
      </div>
      <div className='w-full'>
        <SessionSection/>
      </div>
    </div>
  )
}
