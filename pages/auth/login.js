import React, { useEffect, useState } from "react";

// Next
import Link from 'next/link'

// Components
import InputText from '../../components/from/TextInput'
import Title from '../../components/Typography/Title'
import http from "../../api/http";
import { message } from "antd";
import Loading from "../../components/Loading/Loading";


const Login = () => {

  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (typeof user === "string") {
      window.location.replace("/");
      return setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const validateMobile = (num) => {
    const re = /^(\d{11})/;
    if (inputs.phone_number.search(re) === -1) {
      message.error("موبایل وارد شده اشتباه است");
      return false;
    }
    return true;
  };

  const change = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    setDisplay(false)
  };

  // formData
  const initialInputs = () => {
    let formData = new FormData()
    formData.append("phone_number",inputs.phone_number)
    formData.append("password",inputs.password)
    return formData
  }

  const handleLogin = (event) => {
    event.preventDefault();
    let formData = initialInputs()
    setDisplay(true)
    if (validateMobile(inputs.mobile)) {
      http.http().login(({data}) => {
        if(data?.error) {
          message.error(data.error)
          return
        }
        localStorage.setItem('item', data.token)
        message.success("با موفقیت وارد شدید")
        message.success("تا چند لحظه دیگر وارد صفحه اصلی میشوید")
        setTimeout(() => {
          window.location.replace("/")
        }, 2000)
      }, formData)
    }
  };

  useEffect(() => {
    if(auth !== null) {
      window.localStorage.setItem('user' , JSON.parse(auth))
      setTimeout(() => {
        window.location.replace("/");
        setLoading(true);
      }, 1000);
    }
  }, [auth]);

  if(loading) {
    return <Loading />
  }

  return (
    <div>
      <div
        className=" flex flex-wrap content-center items-center py-4 px-4 h-screen w-screen bg-gradient-to-br from-red via-green-100 to-blue"
      >
        <form
          onSubmit={handleLogin}
          className="
            bg-white
            text-right
            rounded-lg
            w-screen
            mx-auto
            max-width
            p-20
            shadow-xs
          "
        >
          <div className="h4 pb-10 text-center">
            <Title title="به دانامانا خوش آمدید" />
          </div>
          <p className={""}>
            برای استفاده از خدمات ابتدا وارد شوید.
          </p>
          <InputText
            name="phone_number"
            white
            type={"number"}
            onChange={change}
            className="input_defult"
            placeholder="موبایل"
          />
          <InputText
            name="password"
            white
            type={"password"}
            onChange={change}
            className="input_defult"
            placeholder="رمز ورود"
          />

          <button type="submit" className={`btn_defult w-full ${ display ? 'opacity-40	' : ''} bg-primary text-white py-2 rounded-md shadow-sm`} disabled={ display ? 'disabled' : '' }>
            <div style={{ display: display ? 'inline-block' : 'none' }} className="spinner-border text-light mx-3" role="status">
              <span className="sr-only"></span>
            </div>
            <span>ورود</span>
          </button>

          <div className="d-flex py-2 fs-1sm">
            <div>رمز عبور را فراموش کریدن؟ </div>
            <Link href="/auth/change-password">
              <div
                className="
                underline
                cursor-pointer
                fs-1sm
                btn
                btn-link
                text-primary
                p-0
              "
              >
                بازیابی رمز عبور
              </div>
            </Link>
          </div>
          <div className="d-flex py-2 fs-1sm">
            <div>حساب کاربری ندارید؟</div>
            <Link href="/auth/register">
              <div
                className=" 
                underline
                cursor-pointer
                fs-1sm
                btn
                btn-link
                text-primary
                p-0
              "
              >
                ایجاد حساب کاربری
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
