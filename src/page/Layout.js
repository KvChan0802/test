import React, { useMemo, useState } from 'react'
import { Outlet } from 'react-router'
import {Link} from 'react-router-dom'


function useNewMemo(f1,f2,v) {

  const [firstTime,setFirstTime] = useState(true)

  useMemo(()=>{
    if (firstTime) {
      f1()
      setFirstTime(!firstTime)
    }
    else f2()
  },[...v])

}


export default function Layout() {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)

  useNewMemo(
    ()=>console.log('A - '+a),
    ()=>console.log('A update - '+a),
    [a]
  )

  useNewMemo(
    ()=>console.log('B - '+b),
    ()=>console.log('B update - '+b),
    [b]
  )



  return (
    <div>
      <Link to='/info'> 公司介紹 </Link>
      <Link to='/about'> 關於我們 </Link>
      <Link to='/contact'> 聯絡資訊 </Link>
      <div>A : {a}</div>
      <div>B : {b}</div>
      <button onClick={()=>setA(a+1)}>ADD A</button>
      <button onClick={()=>setB(b+1)}>ADD B</button>
      <br />
      <Outlet></Outlet>
    </div>
  )
}
