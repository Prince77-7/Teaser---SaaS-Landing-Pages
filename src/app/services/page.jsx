import ServicePage from '@/common/module/Service/component/ServicePage'
import React from 'react'


export const metadata = {
  title: 'Our Services | Empowerment Consulting Services LLC',
  description: 'Explore the credit repair services offered by Empowerment Consulting Services (ECS), including analysis, dispute management, and credit building.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <ServicePage />
    </div>
  )
}

export default page
