import React, { useContext, useState } from "react";
import Style from "./Login.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";

export default function Login() {
  const notify = (mess, type) => {
    toast[type](mess);
  };
  let { setuserToken } = useContext(UserContext);
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  async function submitLogin(values) {
    setisLoading(true);
    let response = await axios
      .post(
        "https://historian-api.up.railway.app/api/v1/auth/teachers/login",
        values
      )
      .then((data) => {
        if (data.status === 200) {
          setisLoading(false);
          notify("success", "success");
          localStorage.setItem("userToken", data.data.data.token);
          setuserToken(data.data.data.token);
          setTimeout(() => {
            navigate("/");
          }, 800);
        }
      })
      .catch((err) => {
        setisLoading(false);
        notify(err.response.data.message, "error");
        seterror(err.response.data.message);
      });
  }

  function validate(values) {
    let errors = {};
    if (!values.phone) {
      errors.phone = "Phone is Required";
    } else if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validate,
    onSubmit: submitLogin,
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div
        className={`flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${Style.big_boss}`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
            width="100"
            height="50"
            viewBox="0 0 106 85"
            fill="none"
          >
            <path
              d="M18.5764 34.4566C28.3019 34.3559 33.7265 35.3364 44.0482 39.5525L46.0516 34.6447C35.1151 30.1795 28.9909 29.0479 18.5234 29.1566L18.5764 34.4566ZM44.0482 50.1525C33.7265 45.939 28.3019 44.9559 18.5764 45.0566L18.5234 39.7566C28.9909 39.6479 35.1124 40.7795 46.0516 45.2447L44.0482 50.1525ZM18.5764 55.6566C28.3019 55.5559 33.7265 56.5364 44.0482 60.7525L46.0516 55.8447C35.1151 51.3795 28.9909 50.2479 18.5234 50.3566L18.5764 55.6566ZM87.4234 55.6566C77.6979 55.5559 72.2734 56.5364 61.9516 60.7525L59.9482 55.8447C70.8848 51.3795 77.0089 50.2479 87.4764 50.3566L87.4234 55.6566ZM61.9516 50.1525C72.2734 45.939 77.7006 44.9559 87.4234 45.0566L87.4764 39.7566C77.0089 39.6479 70.8874 40.7795 59.9482 45.2447L61.9516 50.1525ZM87.4234 34.4566C77.6979 34.3559 72.2734 35.3364 61.9516 39.5525L59.9482 34.6447C70.8848 30.1795 77.0089 29.0479 87.4764 29.1566L87.4234 34.4566ZM25.1749 21.1986V13.2486H19.8749V21.1986H25.1749ZM34.4499 15.8986V23.8486H29.1499V15.8986H34.4499ZM43.7249 26.4986V18.5486H38.4249V26.4986H43.7249ZM80.8249 21.1986V13.2486H86.1249V21.1986H80.8249ZM71.5499 15.8986V23.8486H76.8499V15.8986H71.5499ZM62.2749 26.4986V18.5486H67.5749V26.4986H62.2749Z"
              fill="#006672"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53 8.58472L53.6837 8.43898C66.9231 2.06308 78.3313 -2.52142 94.1439 1.52778C95.2661 1.81972 96.2592 2.47697 96.9665 3.39586C97.6738 4.31475 98.055 5.44297 98.05 6.60252V7.34717C99.958 7.73142 101.935 8.16867 103.994 8.66687C104.567 8.80608 105.076 9.13401 105.44 9.59788C105.804 10.0617 106.001 10.6346 106 11.2241V78.9025C106 80.5799 104.455 81.8307 102.809 81.518C86.3449 78.3778 75.2494 78.1578 60.0861 80.458C59.421 81.7657 58.407 82.8639 57.1563 83.6309C55.9056 84.3979 54.4671 84.8039 53 84.8039C51.5329 84.8039 50.0944 84.3979 48.8437 83.6309C47.593 82.8639 46.579 81.7657 45.9139 80.458C30.7533 78.1578 19.6524 78.3778 3.19061 81.518C2.80388 81.5932 2.40531 81.5822 2.02332 81.4858C1.64133 81.3894 1.2853 81.2099 0.980616 80.9601C0.67593 80.7103 0.43008 80.3964 0.260584 80.0408C0.0910876 79.6851 0.00211661 79.2964 1.05632e-05 78.9025V11.2241C-0.00166217 10.6344 0.195375 10.0614 0.559332 9.59743C0.92329 9.13347 1.43294 8.80566 2.00606 8.66687C3.97874 8.18892 5.96042 7.74894 7.95001 7.34717V6.60252C7.95001 4.27052 9.49496 2.13198 11.8561 1.52778C27.6687 -2.52142 39.0769 2.06308 52.3163 8.43898L53 8.58472ZM55.65 13.3733C68.847 7.00268 78.7951 3.09128 92.75 6.64228V66.3945C92.75 66.3945 92.742 66.4077 92.7288 66.4157C92.7097 66.431 92.6875 66.4421 92.6637 66.448C92.6399 66.454 92.6151 66.4547 92.591 66.4501C79.606 64.0704 69.5863 66.5482 58.6842 71.289C57.8342 70.4199 56.7962 69.7572 55.65 69.3519V13.3733ZM50.35 13.3759V69.3519C49.2038 69.7572 48.1658 70.4199 47.3157 71.289C36.4137 66.5455 26.3914 64.0704 13.409 66.4501C13.3845 66.4551 13.3592 66.4546 13.3349 66.4486C13.3106 66.4427 13.288 66.4314 13.2686 66.4157H13.2659L13.25 66.3918V6.64228C27.2049 3.09128 37.153 7.00533 50.35 13.3759ZM100.7 13.3362C99.799 13.1321 98.9165 12.9387 98.05 12.7585V66.3945C98.05 69.866 94.8435 72.251 91.6343 71.6653C81.6279 69.8289 73.6143 71.1539 64.9409 74.4531C77.0593 73.0407 87.2751 73.3878 100.7 75.7437V13.3362ZM41.0591 74.4531C32.3883 71.1539 24.3721 69.8289 14.3657 71.6653C11.1592 72.2536 7.95001 69.8633 7.95001 66.3945V12.7585C7.08346 12.9387 6.20101 13.1295 5.30001 13.3362V75.7437C18.7249 73.3878 28.938 73.0407 41.0591 74.4531Z"
              fill="#006672"
            />
          </svg>
          <h2 className="my-5 main-color text-center text-3xl font-bold  tracking-tight text-gray-900">
            المـــــــــــــــــــــؤرخ
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={formik.handleSubmit}
            className={Style.form_Login}
            method="POST"
          >
            <div>
              <div className="mt-2">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  placeholder="ادخل رقم الهاتف"
                  className=" w-full rounded-md sm:text-sm sm:leading-6"
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div
                    role="alert"
                    className="alert alert-error p-2 mt-1 w-11/12 mx-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{formik.errors.phone}</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              <div className="mt-4">
                <input
                  id="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  type="password"
                  // autoComplete="current-password"
                  placeholder="ادخل  كلمة المرور"
                  className="w-full rounded-md  sm:text-sm sm:leading-6"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div
                    role="alert"
                    className="alert alert-error p-2 mt-1  w-11/12 mx-auto "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="">{formik.errors.password}</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="pt-10 text-center ">
              {!isLoading ? (
                <button type="submit" className="text-xl ">
                  تسجيل الدخول
                </button>
              ) : (
                <button type="button" className="text-xl ">
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
