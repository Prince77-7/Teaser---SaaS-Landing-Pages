import About from '@/common/module/About'
import React from 'react'


export const metadata = {
  title: 'About Us | Empowerment Consulting Services LLC',
  description: 'Learn more about Empowerment Consulting Services (ECS) and our mission to help clients achieve financial freedom through expert credit repair.',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <About />
    </div>
  )
}

export default page
