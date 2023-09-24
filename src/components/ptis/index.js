import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTadk } from '../../store/reduser/pitSlice'
import { NavLink, useNavigate } from 'react-router-dom'

const Pits = () => {
    const [val,setVal] = useState('')
    const [val1,setVal1] = useState('')
    const nav = useNavigate()
    const [blo,setVlo] = useState(1)
    const dispatch = useDispatch()
    const handle = () => {
        const newTask = {
            val,
            val1,
        }
        dispatch(addTadk(newTask))
        setVal('')
        setVal1('')
        // setVal2('')
    }
  return (
    <div className='container'>
      <div style={{display: blo === 1 ? 'block' : 'none'}} className="flex pb-2 flex-col mx-auto border w-[300px]">
        <h2 className='font-bold py-10 text-xl w-[80%] text-center mx-auto'>Напишите заговолок петицей</h2>
        <div className="flex w-[300px] gap-4 flex-col">
            <p className='w-[80%] text-center mx-auto'>опишите ситуацию и расскажите, что бы вы хотели изменить</p>
            <input value={val} onChange={(e) => setVal(e.target.value)} className='border w-[80%] mx-auto p-[2px 0 2px 10px]' type="text" placeholder='Заголовок петицей'/>
            <button style={{
              background:'orange',
              margin: '0 auto',
              width:'60%',
              height:'40px',
              color:'white',
              borderRadius:'10px',

            }} onClick={() => setVlo(2)}>Продалжить</button>
            <NavLink className="mx-auto" to={"/"}><button>Вернуться</button></NavLink>
        </div>
      </div>
      <div style={{display:blo === 2 ? "block" : "none"}} className="flex flex-col mx-auto border w-[300px] text-center">
        <h2 className='font-bold py-10'>опишите проблему подронее</h2>
        <div className="flex w-[300px] gap-4 pb-2 flex-col">
             <textarea 
                         value={val1} onChange={(e) => setVal1(e.target.value)} className='p-2 border w-[80%] mx-auto p-[2px 0 2px 10px]' type="text" placeholder='text'
             cols="30" rows="4"></textarea>
            <button style={{
              background:'orange',
              margin: '0 auto',
              width:'60%',
              height:'40px',
              color:'white',
              borderRadius:'10px',

            }} onClick={() => setVlo(3)}>Продалжить</button>
            <button onClick={() => setVlo(2)}>Вернуться</button>
        </div>
      </div>
      <div style={{display:blo === 3 ? "block" : "none"}} className="pb-2 flex flex-col mx-auto border w-[300px] ">
        <h2 className='font-bold py-10 text-center text-xl'>ваша петицей готова</h2>
        <div className="flex w-[300px] gap-4 flex-col">
            <p className=' pl-4'>Дальнейшие действия:</p>
            <h1 className='w-[90%] pl-4'>1.<b>создайте петицию.</b> Ее можно изменить в любое время.</h1>
            <h1 className='w-[90%] pl-4'>2.<b>поделитесь ею </b>со знакомыми или в онлайн-сообщества</h1>
            <button style={{
              background:'orange',
              margin: '0 auto',
              width:'60%',
              height:'40px',
              color:'white',
              borderRadius:'10px',

            }} onClick={()=> {
              handle()
              nav("/")
            }}>Cоздать</button>
            <button onClick={() => setVlo(1)}>Вернуться</button>
        </div>
      </div>
    </div>
  )
}

export default Pits
