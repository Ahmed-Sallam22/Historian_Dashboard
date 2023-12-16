import React from 'react'
import Style from './Videos.module.css'
import SecondNavbar from '../Second_navbar/Second_navbar'

export default function Videos() {
  

return <>
   <SecondNavbar />
   <div className=" grid grid-cols-12	gap-20 ">
<div className="search me-16  col-span-4">
<form className=''>   
    <div className={`${Style.search} relative`}>
        <div className=" absolute inset-y-0 start-0 flex items-center ps-5 cursor-pointer	">
            <svg className=" w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="myInput" 
         className="block w-full p-4 pe-16 ps-12 text-sm  border-none rounded-lg outline-none" placeholder="ابحث هنا..." />
    </div>
</form>
</div>

<div className={`col-span-3       ${Style.select}`}>
  <select id="Levels" className="text-right block w-full py-4 ps-8   text-sm  border-none rounded-lg outline-none">
  <option  selected>الكل</option>
  <option value="الصف الأول الأعدادي">الصف الأول الأعدادي</option>
  <option value="الصف الثاني الأعدادي">الصف الثاني الأعدادي</option>
  <option value="الصف الثالث الأعدادي">الصف الثالث الأعدادي</option>
  <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
  <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
  <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
</select>
    
    </div>
    <div className={`col-span-3  ${Style.select}`}>
  <select id="Levels" className="text-right block w-full py-4 ps-8   text-sm  border-none rounded-lg outline-none">
  <option  selected>الكل</option>
  <option value="داخل السنتر">داخل السنتر</option>
  <option value="خارج السنتر">خارج السنتر</option>
 
</select>
    
    </div>
    <div className='col-span-2' onClick={()=>document.getElementById('my_modal_2').showModal()}  >
    <button type="button" className={`${Style.button} btn block text-white w-full border-none outline-none`} >
  
  <span className='pe-1'>اضافه فيديو </span> 
  <i class="fa-solid fa-sm fa-video"></i> 
  
    
    </button>
</div>

    </div>
   
    <div className=" pt-5 overflow-x-auto ">
        <table id="myTable" className={`${Style.table} table border-spacing-y-2 border-spacing-x-2 border-separate  	rounded  `}>
          {/* head */}
          <thead>
            <tr className="bg-white ">
                
              <th className="w-2 ps-3 py-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="18"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M0 0L1.50842 0L1.50842 24H0L0 0ZM21 6.75L3.01683 13.4531L3.01683 0.046875L21 6.75ZM4.52525 11.2969L16.7104 6.75L4.52525 2.20313L4.52525 11.2969Z"
                    fill="#006672"
                  />
                </svg>
              </th> 
              <div className="grid grid-cols-4 auto-cols-max justify-stretch 	 ">
                <th className={` ${Style.tabel_head}`}>
                <div className="ps-6 " >عنوان الفيديو</div>
                </th>
                <th className={` ${Style.letter} ${Style.tabel_head}`}>

                <div className="text-center">الصف</div>

                </th>
                <th className={`  ${Style.tabel_head}`} >
                <div className=" text-center" >الوحدة</div>

                </th>
                <th className={` ${Style.tabel_head}`}>
                <div  className="text-center" >الدرس</div>
                </th>
              </div>
              <th className={`   ${Style.tabel_head_icons}  `}>
              <i class=" fa-solid fa-lg fa-pen"></i>                            
              </th>         
              <th className={ ` ${Style.delete} text-center  w-2`}>
              <i class="fa-regular  fa-trash-can"></i>
                            </th>         
                 </tr>
          </thead>
          <span className={Style.brmedium}></span>
          <tbody>
            {/* row 1 */}
            <tr className="bg-white ">
                
                <td className={`${Style.tabel_data2} text-center pe-10`}>1</td>
                <div className="grid grid-cols-4 auto-cols-max justify-stretch 	 ">

                     
                    <td className={` ${Style.tabel_data}`}>
                  <div className=" ps-4 text-right">الحضارة الفرعونية</div>
  
                  </td>
                
              
                  <td className={` ${Style.tabel_data}`}>
                  <div className="text-center"> الصف الأول الثانوي</div>
  
                  </td>
                  <td className={` ${Style.spaceing} ${Style.tabel_data2}`}>
                  <div className="text-center">الأولي</div>
  
                  </td>
                  <td className={`${Style.spaceing} ${Style.tabel_data2}`} >
                  <div className="text-center" >الأول</div>
                  </td>
                </div>
                {/* $ */}
                <td className={`text-center ${Style.tabel_data}`} >
                <i class="fa-solid fa-pen fa-md"></i>                            
                  </td>

                 
                                <td className={`cursor-pointer	 ${Style.tabel_delete}`} >
                              <div className="flex justify-between">
                                <div>
                                    حذف
                </div>
                
                                                <div className="px-2 ">
                    <i class="fa-regular fa-trash-can "></i> 
                                        </div>


                                </div>
                                </td>

            

      
                   </tr>
                     {/* row 2 */}
                     <tr className="bg-white ">
                
                <td className={`${Style.tabel_data2} text-center pe-10`}>2</td>
                <div className="grid grid-cols-4 auto-cols-max justify-stretch 	 ">

                     
                    <td className={` ${Style.tabel_data}`}>
                  <div className=" ps-4 text-right">العصر القديم</div>
  
                  </td>
                
              
                  <td className={` ${Style.tabel_data}`}>
                  <div className="text-center"> الصف الأول الثانوي</div>
  
                  </td>
                  <td className={` ${Style.spaceing} ${Style.tabel_data2}`}>
                  <div className="text-center">الأولي</div>
  
                  </td>
                  <td className={`${Style.spaceing} ${Style.tabel_data2}`} >
                  <div className="text-center" >الأول</div>
                  </td>
                </div>
                {/* $ */}
                <td className={`text-center ${Style.tabel_data}`} >
                <i class="fa-solid fa-pen fa-md"></i>                            
                  </td>

                 
                                <td className={`cursor-pointer	 ${Style.tabel_delete}`} >
                              <div className="flex justify-between">
                                <div>
                                    حذف
                </div>
                
                                                <div className="px-2 ">
                    <i class="fa-regular fa-trash-can "></i> 
                                        </div>


                                </div>
                                </td>

            

      
                   </tr>

            {/* row 3 */}
            <tr className="bg-white ">
                
                <td className={`${Style.tabel_data2} text-center pe-10`}>1</td>
                <div className="grid grid-cols-4 auto-cols-max justify-stretch 	 ">

                     
                    <td className={` ${Style.tabel_data}`}>
                  <div className=" ps-4 text-right">الحضارة الفرعونية</div>
  
                  </td>
                
              
                  <td className={` ${Style.tabel_data}`}>
                  <div className="text-center"> الصف الأول الثانوي</div>
  
                  </td>
                  <td className={` ${Style.spaceing} ${Style.tabel_data2}`}>
                  <div className="text-center">الأولي</div>
  
                  </td>
                  <td className={`${Style.spaceing} ${Style.tabel_data2}`} >
                  <div className="text-center" >الأول</div>
                  </td>
                </div>
                {/* $ */}
                <td className={`text-center ${Style.tabel_data}`} >
                <i class="fa-solid fa-pen fa-md"></i>                            
                  </td>

                 
                                <td className={`cursor-pointer	 ${Style.tabel_delete}`} >
                              <div className="flex justify-between">
                                <div>
                                    حذف
                </div>
                
                                                <div className="px-2 ">
                    <i class="fa-regular fa-trash-can "></i> 
                                        </div>


                                </div>
                                </td>

            

      
                   </tr>
    
          </tbody>
          <span className={Style.brmedium}></span>
      
        </table>
      </div>

<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    </>
}
