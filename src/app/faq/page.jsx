import Faq from '@/common/module/Faq'
import React from 'react'

export const metadata = {
  title: 'FAQ | Empowerment Consulting Services LLC',
  description: 'Find answers to frequently asked questions about credit repair services offered by Empowerment Consulting Services (ECS).',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Faq />
    </div>
  )
}

export default page
