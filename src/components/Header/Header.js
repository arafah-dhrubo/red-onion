import React from 'react'
import { BiCart } from 'react-icons/bi'

const Header = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between container mx-auto h-30 my-5 md:px-0 ">
            <div className="md:w-10/12 w-full">
                <img src="https://i.ibb.co/bFJG15V/logo2.png" alt="red onion" width="150px" className="mx-auto md:mx-0"/>
            </div>
            <div className="md:w-3/12 w-full flex md:justify-between justify-around">
                <button><BiCart className="text-3xl"/></button>
                <button>Login</button>
                <button className="rounded-xl py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white">Sign up</button>
            </div>
        </div>
    )
}

export default Header
