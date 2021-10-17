import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 md:h-60'>
      <div className='container mx-auto py-10 h-full flex md:flex-row flex-col'>
        <div className='md:w-8/12 w-full md:text-left text-center md:relative block h-full'>
          <img
            src='https://i.ibb.co/bFJG15V/logo2.png'
            alt='Re d Onion'
            width='200px'
            className="mx-auto md:mx-0 md:mb-0 mb-3"
          />
          <p
            className='text-white md:absolute md:bottom-0 md:left-0 block md:mb-0 mb-3
'
          >
            Copyright ©2021 Red Onion Food
          </p>
        </div>
        <div className='md:w-4/12 md:relative block w-full'>
          <div className='flex md:justify-between md:flex-row flex-col'>
            <div className='flex flex-col md:mb-0 mb-3'>
              <button className='text-white text-center md:text-left'>About Red Onion</button>
              <button className='text-white text-center md:text-left'>Read Our Blog</button>
              <button className='text-white text-center md:text-left'>
                Sign up to deliver
              </button>
              <button className='text-white text-center md:text-left'>
                Add Your Interest
              </button>
            </div>
            <div className='flex flex-col mb-3'>
              <button className='text-white text-center md:text-left'>Get Help</button>
              <button className='text-white text-center md:text-left'>Read FAQs</button>
              <button className='text-white text-center md:text-left'>View All Cities</button>
              <button className='text-white text-center md:text-left'>
                Restaurants Near Me
              </button>
            </div>
          </div>
          <div className='flex justify-evenly md:absolute bottom-0 right-0 md:flex-row flex-col'>
            <button className='text-white  text-centertmd:ext-left'>Privacy Policy</button>
            <button className='text-white text-center md:text-left ml-4'>Terms of Use</button>
            <button className='text-white text-center md:text-left ml-4'>Pricing</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
