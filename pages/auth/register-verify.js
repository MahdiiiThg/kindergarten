import React, { useEffect, useState } from "react";

// Next
import Link from 'next/link'

// Components
import InputText from '../../components/from/TextInput'
import Title from '../../components/Typography/Title'
import http from "../../api/http";
import { message } from "antd";


const RegisterVerify = () => {

  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const change = (event) => {
    event.persist();
    setDisplay(false)
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
      http.http().registerVerify(({data}) => {
          setLoading(true)
          setDisplay(true)
          setDisbale(true)

        if(data) {
          message.success(data.message)
          setLoading(false)
          setDisplay(false)
          console.log(data, "register");
        }
        // setTimeout(() => {
        //   window.location.replace("/auth/register-verify");
        //   setLoading(true);
        // }, 1000);
      }, inputs)
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
          <p >
            لطفا کد تایید را وارد کنید
          </p>
          <InputText
            name="code"
            white
            type={"text"}
            max={6}
            min={6}
            onChange={change}
            className="input_defult"
            placeholder="کد تایید"
          />
          <button 
            type="submit" 
            className={` 
              flex 
              items-center
              justify-center
              btn_defult 
              w-full 
              bg-primary 
              text-white 
              py-2 
              rounded-md 
              shadow-sm
              ${display ? 'bg-green-100' : ''}
              `}
              disabled={ display ? 'disabled' : '' }>
            <div 
              style={{ display: display ? 'inline-block' : 'none' }} 
              className="loading mx-4" 
              role="status">
            </div>
            <span>ورود</span>
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default RegisterVerify
