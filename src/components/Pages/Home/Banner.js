import React from 'react'

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/Vt7CnTK/banner.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='flex items-center'
    >
      <div className='container mx-auto my-48'>
        <h1 className='md:text-5xl text-4xl font-semibold'>
          Best Foods Are Waiting
          <br />
          For Your Belly
        </h1>
        <form action='' className='flex md:w-4/12 w-8/12 mx-auto md:border mx-auto mt-10 md:bg-white md:rounded-full md:flex-row flex-col' >
          <input type='text' name='search' id='' className="text-2xl px-5 py-2 w-full rounded-full md:mb-0 mb-2"/>
          <button className="rounded-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white text-xl">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Banner
