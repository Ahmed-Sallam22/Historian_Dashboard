import React from 'react'
import Style from './Second_navbar.module.css'
import image from '../../image/image 11.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export default function SecondNavbar() {
let navigate=useNavigate()
let {userToken, setuserToken }=useContext(UserContext)


function logout() {
  localStorage.removeItem('userToken')
  setuserToken(null)
  navigate('/login')

}

  let date = new Date();
let months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];
let delDateString =  date.getDate() + ' '  +months[date.getMonth()] + date.getFullYear();

console.log(delDateString);
  
return <>

  <div className={` content-center px-0 mb-2	justify-between navbar ${Style.main} `}>
<div  className='bg-white rounded-xl'	>
    <h3  className=" px-20 py-2">
      <span className='px-.5'>{date.getDate()}</span>
      <span className='px-1'>{months[date.getMonth()]}</span>
      <span className='px-.5'>{date.getFullYear()}</span>
      <i className="ps-2.5 fa-solid fa-calendar-days"></i>  
        </h3>
  </div>

  <div className={Style.main}>
    <h2 className="text-2xl	 font-bold">المـــــــــــــــــــؤرخ</h2>
  </div>
  <div >
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-transparent	border-none hover:bg-transparent">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className={`badge badge-xs badge-warning  indicator-item ` }></span>
      </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-44 bg-base-100 ">
        <div className={`card-body text-white text-center ${Style.Link}`}>
          <Link className="font-bold text-md">notifications</Link>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn  btn-ghost bg-transparent	border-none hover:bg-transparent">
      <div className={Style.content}>
      <div className="flex ">
  <div className="flex-none ">
  <img  className={Style.images} src={image} />

  </div>
  <div className={`grow pe-2 pt-3 ${Style.size} `}>
{/* اسم المدرس  */}
  
    الاستاذ
    <span className='ps-2'><i className="fa-solid fa-chevron-down"></i></span>
  </div>

</div>
        
      
     
      </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-40 bg-base-100 ">
        <div className={`card-body text-white text-center ${Style.Link}`}>
          {/* <Link className="font-bold  text-md">البروفايل</Link> */}
          <span className="font-bold text-md cursor-pointer	" onClick={()=>logout()}>تسجيل خروج</span>
        </div>
      </div>
    </div>

   
  </div>

</div>






</>
}
