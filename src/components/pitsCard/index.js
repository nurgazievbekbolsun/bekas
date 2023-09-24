import React from 'react'
import { useSelector } from 'react-redux'
import { addTadk } from '../../store/reduser/pitSlice'
const CardPtis = () => {
    const {pit} = useSelector(s => s.pits)
  return (
    <div className='container'>
        <h1></h1>
      <div className="mx-auto bg-gray-200 w-[80%] rounded ">
        {
            pit.map(el => (
                <div className='py-4 pl-4 '>
                    <b className='text-xl '>{el.val}</b>
                    <h1>{el.val1}</h1>
                    <h1>{el.val2}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CardPtis
