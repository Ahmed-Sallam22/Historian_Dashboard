import React from "react";
import Style from "./Levels.module.css";
import SecondNavbar from "../Second_navbar/Second_navbar";
import imge from "../../image/image 11.png";

export default function Levels() {
  return (
    <>
      <SecondNavbar />
      <div className="overflow-x-auto pt-5 ">
        <table
          className={`${Style.table} table border-spacing-y-2 border-spacing-x-2 border-separate  	rounded  `}
        >
          {/* head */}
          <thead>
            <tr className="bg-white ">
              <th className="w-2">
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
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={` ${Style.tabel_head}`}>
                  <div className="text-right ps-12">الصف</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div> الطلبة</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div> الفيدوهات</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div>التدريبات</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div>بنك الأسئلة</div>
                </th>
              </div>
            </tr>
          </thead>

          <span className={Style.brmedium}></span>
          <tbody>
            {/* row 1 */}
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
            <tr className="bg-white  ">
              <td
                className={` ${Style.tabel_data2} text-center ${Style.space} `}
              >
                1
              </td>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={Style.tabel_data}>
                  <div className="ps-5">الصف الأول الأعدادي </div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>140 طالب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>39 فيديو</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>42 تدريب</div>
                </th>
                <th className={Style.tabel_data2}>
                  <div>20 بنك اسئلة</div>
                </th>
              </div>
            </tr>
          </tbody>

          <tfoot className={` ${Style.footer}`}>
            <tr>
              <th className="w-2 ps-3 py-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M3.25 22.75V17.3333H5.41667V20.5833H8.66667V22.75H3.25ZM17.3333 22.75V20.5833H20.5833V17.3333H22.75V22.75H17.3333ZM13 20.5833C10.9056 20.5833 9.11806 19.8431 7.6375 18.3625C6.15694 16.8819 5.41667 15.0944 5.41667 13C5.41667 10.9056 6.15694 9.11806 7.6375 7.6375C9.11806 6.15694 10.9056 5.41667 13 5.41667C15.0944 5.41667 16.8819 6.15694 18.3625 7.6375C19.8431 9.11806 20.5833 10.9056 20.5833 13C20.5833 15.0944 19.8431 16.8819 18.3625 18.3625C16.8819 19.8431 15.0944 20.5833 13 20.5833ZM13 18.4167C14.4986 18.4167 15.7762 17.8884 16.8328 16.8317C17.8894 15.7751 18.4174 14.4979 18.4167 13C18.4167 11.5014 17.8884 10.2241 16.8317 9.16825C15.7751 8.11236 14.4979 7.58406 13 7.58333C11.5014 7.58333 10.2241 8.11164 9.16825 9.16825C8.11236 10.2249 7.58406 11.5021 7.58333 13C7.58333 14.4986 8.11164 15.7762 9.16825 16.8328C10.2249 17.8894 11.5021 18.4174 13 18.4167ZM3.25 8.66667V3.25H8.66667V5.41667H5.41667V8.66667H3.25ZM20.5833 8.66667V5.41667H17.3333V3.25H22.75V8.66667H20.5833Z"
                    fill="#006672"
                  />
                </svg>
              </th>
              <div className="grid grid-cols-5 auto-cols-max justify-stretch ">
                <th className={` ${Style.tabel_head}`}>
                  <div className="ps-10 text-right">الكل</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div> 750 طالب</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div> 350 فيديو</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div>390 تدريب</div>
                </th>
                <th className={` ${Style.tabel_head}`}>
                  <div>235 بنك اسئلة</div>
                </th>
              </div>
            </tr>
          </tfoot>
          {/* <tfoot className={` ${Style.footer}`}>
            <tr>
              <th className={`ps-6`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M3.25 22.75V17.3333H5.41667V20.5833H8.66667V22.75H3.25ZM17.3333 22.75V20.5833H20.5833V17.3333H22.75V22.75H17.3333ZM13 20.5833C10.9056 20.5833 9.11806 19.8431 7.6375 18.3625C6.15694 16.8819 5.41667 15.0944 5.41667 13C5.41667 10.9056 6.15694 9.11806 7.6375 7.6375C9.11806 6.15694 10.9056 5.41667 13 5.41667C15.0944 5.41667 16.8819 6.15694 18.3625 7.6375C19.8431 9.11806 20.5833 10.9056 20.5833 13C20.5833 15.0944 19.8431 16.8819 18.3625 18.3625C16.8819 19.8431 15.0944 20.5833 13 20.5833ZM13 18.4167C14.4986 18.4167 15.7762 17.8884 16.8328 16.8317C17.8894 15.7751 18.4174 14.4979 18.4167 13C18.4167 11.5014 17.8884 10.2241 16.8317 9.16825C15.7751 8.11236 14.4979 7.58406 13 7.58333C11.5014 7.58333 10.2241 8.11164 9.16825 9.16825C8.11236 10.2249 7.58406 11.5021 7.58333 13C7.58333 14.4986 8.11164 15.7762 9.16825 16.8328C10.2249 17.8894 11.5021 18.4174 13 18.4167ZM3.25 8.66667V3.25H8.66667V5.41667H5.41667V8.66667H3.25ZM20.5833 8.66667V5.41667H17.3333V3.25H22.75V8.66667H20.5833Z"
                    fill="#006672"
                  />
                </svg>
              </th>
              <td>
                <div className="ps-8">الكل</div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </>
  );
}
