import React, { useEffect, useState } from 'react'

const useDishes = () => {

  const [dishes, setDishes] = useState({})
  useEffect(() => {
    fetch('/fakeDB.json')
      .then(res => res.json())
      .then(data => {
        setDishes(data)
      })
  }, [])
    return {
      dishes
  }
}

export default useDishes
