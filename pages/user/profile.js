import React, {useEffect, useState} from 'react'

// antd
import { Popconfirm, message } from 'antd';

// API
import http from '../../api/Http'

// sekeleton
import Skeleton from 'react-loading-skeleton'

// Link
import Link from 'next/link' 

// componentst
import Layout from '../../components/Layouts/LayoutMain.jsx'
import PrimaryTitle from '../../components/Typography/PrimaryTitle';

const profile = () => {
  const [user, setUser] = useState(null)
  const [inputs, setInputs] = useState(null)
  const [addImage, setAddImage] = useState([
    "/assets/icon/social.png",
  ]);

  console.log('useruseruser',user);
  useEffect(() => {
    getUser()
  },[])

  const getUser = () => {
    http.http().getCurrentUser(({data}) => {
      setUser(data)
      console.log(data?.data?.galleries?.[0].image_url);
      setAddImage(data?.data?.galleries?.[0].image_url)
    })
  }

  // change Event
  const changeValues = (event) => {
    // change service global state
    let name = event.target.name;
    let value = event.target.value

    return setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const changeImage = (event) => {
    event.persist();

    // setImages(event.target.files[0]);
    console.log('event.target.files[0]', event.target.files[0]);
    let reader = new FileReader();
    reader.onload = function () {
      setAddImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const profileInputs = () => {
    let formData = new FormData();
    formData.append("name", inputs ? inputs.name : user.data.name);
    formData.append("email ", inputs ? inputs.email : "" );
    formData.append("image ", addImage);
    formData.append("birthday ", "1400/12/12");
    return formData;
  };

  const updateUserProfile = () => {

    let formData = profileInputs()
    http.http().updateUserProfile((data) => {
      console.log('updateUserProfile',data);
    }, formData)
  }

  return (
    <div 
      className="
      text-right 
      pt-10 
      mx-10 
      px-5 
      sm:px-10 
      max-width 
      md:mx-auto 
      text-2xl 
      border-2 
      rounded-lg 
      shadow-md 
      h-full 
      my-10 
      overflow-hidden
    ">
      <form className="grid grid-cols-1 items-center justify-items-center pb-10">
        <div className="col-span-full text-center">
          <div className="flex content-center items-center text-center">
            <label
              className="shadow rounded-lg p-1 mb-3 relative bg-white"
              htmlFor="uploadImage"
            >
              <img 
                style={{height: '150px', width: '150px'}} 
                src={addImage} />
            </label>
            <input
              required
              style={{display: 'none'}}
              id="uploadImage"
              name='upload'
              type="file"
              onChange={changeImage} />
          </div>
        </div>
        <div className="col-span-full flex items-center justify-end">
          <div className="flex flex-col justify-end">
            <input
              onChange={changeValues}
              value={inputs ? inputs.name : user ? user.data.name : <Skeleton /> }
              type="text"
              name="name"
              required
              className="py-1 mb-2 text-center block"
            />
            <input
              onChange={changeValues}
              value={inputs ? inputs.alias : user ? user.data.alias : <Skeleton /> }
              type="text"
              name="alias"
              required
              className="py-1 mb-2 text-center block"
            />
            
          </div>
        </div>
        <div className="col-span-full justify-end justify-self-end">
          <input
            onChange={changeValues}
            value={inputs ? inputs.email : user ? user.data.email : 'ایمیل' }
            type="email"
            name="email"
            required
            className="border-b py-1 mb-8 text-right block w-full"
          />
          <div className="">
            <div className="border-b py-1 mb-8">شماره ملی: {user ? user.data.national_id : <Skeleton />}</div>
            <div className="border-b py-1 mb-8">شماره موبایل: {user ? user.data.phone_number : <Skeleton />}</div>
          </div>
          <button
            type="submit"
            onClick={updateUserProfile}
            className=" outline-none bg-primary px-6 py-2 mt-5 text-white rounded-md">به روز رسانی اطلاعات</button>
        </div>
      </form>
      <div className="h-3/6 pb-5 md:pb-20 overflow-y-scroll">
        <div className="py-10 border-t">
          <div className="flex justify-between px-6 text-right mb-10 py-5 shadow-md rounded-md">
            <Link href="/user/lists/exchanges" >مشاهده لیست</Link>
            <h2 className="text-4xl px-4">لیست تعویض ها</h2>
          </div>
          <div className="flex justify-between px-6 text-right  mb-10 py-5 shadow-md rounded-md">
            <Link href="/user/lists/consulatnts" >مشاهده لیست</Link>
            <h2 className="text-4xl px-4">لیست مشاوره ها</h2>
          </div>
          <div className="flex justify-between px-6 text-right  mb-10 py-5 shadow-md rounded-md">
            <Link href="/user/lists/orders" >مشاهده لیست</Link>
            <h2 className="text-4xl px-4">لیست سفارشات ها</h2>
          </div>
          <div className="flex justify-between px-6 text-right  mb-10 py-5 shadow-md rounded-md">
            <Link href="/user/lists/resells" >مشاهده لیست</Link>
            <h2 className="text-4xl px-4">لیست فروش ها</h2>
          </div>
          <div className="flex justify-between px-6 text-right  mb-10 py-5 shadow-md rounded-md">
            <Link href="/user/lists/introductions" >مشاهده لیست</Link>
            <h2 className="text-4xl px-4">لیست معرفی ها</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout(profile)
