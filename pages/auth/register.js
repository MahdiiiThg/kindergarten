import React, { useEffect, useState } from "react";

// Next
import Link from 'next/link'

// Components
import InputText from '../../components/from/TextInput'
import Title from '../../components/Typography/Title'
import http from "../../api/http";
import { message } from "antd";


const Register = () => {

  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(null);
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

  const handleLogin = (event) => {
    event.preventDefault();
    
    setDisplay(true)
    if (validateMobile(inputs.mobile)) {
      http.http().register(({data}) => {
        message.success(data.message)
        setTimeout(() => {
          window.location.replace("/auth/register-verify");
          setLoading(true);
        }, 1000);
        console.log(data, "register");
      }, inputs)
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

  return (
    <div>
      <div
        className="flex flex-wrap content-center items-center py-14 px-4 h-screen w-screen bg-gradient-to-br from-red via-green-100 to-blue"
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
          <div className="h4 pb-4 text-center">
            <Title title="به دانامانا خوش آمدید" />
          </div>
          <p className={""}>
            ثبت نام در دانامانا
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
            name="name"
            white
            type={"text"}
            onChange={change}
            className="input_defult"
            placeholder="نام و نام خانوادگی"
          />
          <InputText
            name="password"
            white
            type={"password"}
            onChange={change}
            className="input_defult"
            placeholder="رمز ورود"
          />
          <InputText
            name="password_confirmation"
            white
            type={"password"}
            onChange={change}
            className="input_defult"
            placeholder="تکرار رمز ورود"
          />

          <button type="submit" className={`btn_defult w-full ${ display ? 'opacity-40	' : ''} bg-primary text-white py-2 rounded-md shadow-sm`} disabled={ display ? 'disabled' : '' }>
            <div style={{ display: display ? 'inline-block' : 'none' }} className="spinner-border text-light mx-3" role="status">
              <span className="sr-only"></span>
            </div>
            <span>ورود</span>
          </button>
          
          <div className="d-flex pt-8 fs-1sm">
            <div>قبلا ثبت نام کردید؟</div>
            <Link href="/auth/login">
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
                ورود به کاربری
              </div>
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Register
