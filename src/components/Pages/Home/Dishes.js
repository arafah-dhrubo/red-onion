import React from 'react'

const Dishes = props => {
    const { name, image, description, price}=props.dish[1]
    return (
        <div className="dishes md:px-10 px-4 py-6 rounded-lg md:m-4 m-2" >
            <img src={image} alt={name}/>
            <h3 className="font-bold text-xl">{name}</h3>
            <p>{description}</p>
            <h1 className="font-bold text-2xl">${price}</h1>
        </div>
    )
}

export default Dishes
