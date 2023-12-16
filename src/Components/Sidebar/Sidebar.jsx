import React from 'react'
import Style from './Sidebar.module.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
return <>
    <div className={` ${Style.sidebar}`}>
      <div className='logo pt-2'>
                 <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="88"
            viewBox="0 0 220 88"
            fill="none"
          >
             <rect width="240" height="88" fill="#006672" />
             <path
               d="M105.061 40.1637C109.282 40.1194 111.636 40.5509 116.115 42.4064L116.985 40.2466C112.239 38.2815 109.581 37.7835 105.038 37.8313L105.061 40.1637ZM116.115 47.0713C111.636 45.217 109.282 44.7843 105.061 44.8286L105.038 42.4962C109.581 42.4484 112.237 42.9464 116.985 44.9114L116.115 47.0713ZM105.061 49.4935C109.282 49.4492 111.636 49.8807 116.115 51.7362L116.985 49.5763C112.239 47.6112 109.581 47.1133 105.038 47.1611L105.061 49.4935ZM134.938 49.4935C130.718 49.4492 128.364 49.8807 123.885 51.7362L123.015 49.5763C127.761 47.6112 130.419 47.1133 134.961 47.1611L134.938 49.4935ZM123.885 47.0713C128.364 45.217 130.719 44.7843 134.938 44.8286L134.961 42.4962C130.419 42.4484 127.762 42.9464 123.015 44.9114L123.885 47.0713ZM134.938 40.1637C130.718 40.1194 128.364 40.5509 123.885 42.4064L123.015 40.2466C127.761 38.2815 130.419 37.7835 134.961 37.8313L134.938 40.1637ZM107.925 34.3292V30.8305H105.625V34.3292H107.925ZM111.95 31.9967V35.4954H109.65V31.9967H111.95ZM115.975 36.6616V33.1629H113.675V36.6616H115.975ZM132.075 34.3292V30.8305H134.375V34.3292H132.075ZM128.05 31.9967V35.4954H130.35V31.9967H128.05ZM124.025 36.6616V33.1629H126.325V36.6616H124.025Z"
               fill="white"
             />
             <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M120 28.778L120.297 28.7139C126.042 25.9079 130.993 23.8904 137.855 25.6723C138.342 25.8008 138.773 26.0901 139.08 26.4945C139.387 26.8988 139.552 27.3954 139.55 27.9057V28.2334C140.378 28.4025 141.236 28.5949 142.129 28.8141C142.378 28.8754 142.599 29.0197 142.757 29.2239C142.915 29.428 143.001 29.6801 143 29.9395V59.7236C143 60.4619 142.33 61.0123 141.615 60.8747C134.47 59.4927 129.655 59.3959 123.075 60.4082C122.786 60.9837 122.346 61.467 121.804 61.8045C121.261 62.1421 120.637 62.3208 120 62.3208C119.363 62.3208 118.739 62.1421 118.196 61.8045C117.654 61.467 117.214 60.9837 116.925 60.4082C110.346 59.3959 105.528 59.4927 98.3846 60.8747C98.2168 60.9078 98.0438 60.903 97.878 60.8605C97.7123 60.8181 97.5578 60.7391 97.4256 60.6292C97.2933 60.5192 97.1866 60.3811 97.1131 60.2246C97.0395 60.0681 97.0009 59.897 97 59.7236V29.9395C96.9993 29.68 97.0848 29.4278 97.2427 29.2237C97.4007 29.0195 97.6218 28.8752 97.8706 28.8141C98.7266 28.6038 99.5866 28.4102 100.45 28.2334V27.9057C100.45 26.8794 101.12 25.9382 102.145 25.6723C109.007 23.8904 113.958 25.9079 119.703 28.7139L120 28.778ZM121.15 30.8854C126.877 28.0818 131.194 26.3604 137.25 27.9232V54.2191C137.25 54.2191 137.247 54.2249 137.241 54.2284C137.233 54.2352 137.223 54.24 137.213 54.2426C137.202 54.2453 137.191 54.2456 137.181 54.2436C131.546 53.1963 127.198 54.2867 122.467 56.3731C122.098 55.9906 121.647 55.6989 121.15 55.5206V30.8854ZM118.85 30.8865V55.5206C118.353 55.6989 117.902 55.9906 117.533 56.3731C112.802 54.2856 108.453 53.1963 102.819 54.2436C102.808 54.2458 102.797 54.2455 102.787 54.2429C102.776 54.2403 102.766 54.2353 102.758 54.2284H102.757L102.75 54.2179V27.9232C108.806 26.3604 113.123 28.0829 118.85 30.8865ZM140.7 30.869C140.309 30.7792 139.926 30.6941 139.55 30.6148V54.2191C139.55 55.7468 138.158 56.7964 136.766 56.5387C132.423 55.7305 128.946 56.3136 125.182 57.7656C130.441 57.144 134.874 57.2967 140.7 58.3335V30.869ZM114.818 57.7656C111.055 56.3136 107.577 55.7305 103.234 56.5387C101.843 56.7976 100.45 55.7457 100.45 54.2191V30.6148C100.074 30.6941 99.691 30.7781 99.3 30.869V58.3335C105.126 57.2967 109.558 57.144 114.818 57.7656Z"
               fill="white"
             />
           </svg>
      </div>
      <div className="List mx-3">
             <Link to={'/'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fa-regular fa-keyboard pe-2"></i>
               <span>لوحة التحكم</span>
           </div>
             </Link>
             <Link to={'/Students'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-users pe-2"></i>
               <span>الطلبة</span>
           </div>
             </Link>
             <Link to={'/Levels'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rr-graduation-cap pe-2"></i>
               <span>الصفوف</span>
           </div>
             </Link>
             <Link to={'/Videos'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fa-regular fa-circle-play pe-2"></i>
               <span>الفيديوهات</span>
           </div>
             </Link>
             <Link to={'/Exercises'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fa-regular fa-pen-to-square pe-2"></i>
               <span>التدريبات</span>
           </div>
             </Link>
             <Link to={'/QuestionBank'} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-file-invoice-dollar pe-2"></i>
               <span>بنك الأسئلة</span>
           </div>
             </Link>
             <Link className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-blog-text pe-2"></i>
               <span>المنشورات</span>
           </div>
             </Link>
             <Link className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-comments-question pe-2"></i>
               <span>اسألة الطلبة</span>
           </div>
             </Link>
             <Link className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-trophy-star pe-2"></i>
               <span>المسابقات</span>
           </div>
             </Link>
             <Link className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-calendar-clock pe-2"></i>
               <span>المواعيد</span>
           </div>
             </Link>
             <Link to={''} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rr-chalkboard-user pe-2"></i>
               <span>اراء الطلبة</span>
           </div>
             </Link>
             <Link to={''} className={Style.Text_dashboard}>
           <div className={`student ${Style.student} py-2 px-2 mb-2`}>
               <i className="fi fi-rs-megaphone pe-2"></i>
               <span>الشكاوي</span>
           </div>
             </Link>
         </div> 
    
    </div></>
}
