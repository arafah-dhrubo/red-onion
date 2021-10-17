import React from 'react'
import { BiTrain, BiRightArrowAlt, BiBell, BiBox
 } from 'react-icons/bi'

const Features = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='md:text-left text-center mx-auto md:mx-0'>
        <h1 className='text-3xl font-semibold'>Why You Choose Us</h1>
        <p className="text-xl md:w-6/12 my-6 w-10/12 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          eligendi ipsum vel asperiores, expedita itaque?
        </p>
      </div>
      <div className="my-6  grid md:grid-cols-3 gap-4 text-left md:p-0 p-6">
        <div className="w-10/12 mx-auto">
          <img
            src='https://i.ibb.co/CQKZrYQ/adult-blur-blurred-background-687824.png'
            alt='Fast Delivery'
          />
          <div className="p-4">
            <div className="flex my-2">
              <BiTrain className="rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-5xl p-2"/>
              <h1 className="my-2 mx-2 text-2xl text-semibold">Fast Delivery</h1>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              commodi dolore blanditiis velit ducimus ullam voluptatibus rerum
              tempora sequi eius!
            </p>
            <button className="flex uppercase text-blue-500 my-2 font-semibold">See More <BiRightArrowAlt className="text-2xl rounded-full bg-green-600 text-white ml-2"/></button>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <img
            src='https://i.ibb.co/5FH7Pnh/chef-cook-food-33614.png'
            alt='A Good Auto Responder'
          />
          <div className="p-4">
            <div className="flex my-2">
              <BiBell className="rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-5xl p-2"/>
              <h1 className="my-2 mx-2 text-2xl text-semibold">A Good Auto Responder</h1>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              commodi dolore blanditiis velit ducimus ullam voluptatibus rerum
              tempora sequi eius!
            </p>
            <button className="flex uppercase text-blue-500 my-2 font-semibold">See More <BiRightArrowAlt className="text-2xl rounded-full bg-green-600 text-white ml-2"/></button>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <img
            src='https://i.ibb.co/R6FzZs6/architecture-building-city-2047397.png'
            alt='Home Delivery'
          />
          <div className="p-4">
            <div className="flex my-2">
              <BiBox
 className="rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-5xl p-2"/>
              <h1 className="my-2 mx-2 text-2xl text-semibold">Home Delivery</h1>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              commodi dolore blanditiis velit ducimus ullam voluptatibus rerum
              tempora sequi eius!
            </p>
            <button className="flex uppercase text-blue-500 my-2 font-semibold">See More <BiRightArrowAlt
 className="text-2xl rounded-full bg-green-600 text-white ml-2"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
