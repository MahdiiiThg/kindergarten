import React, { useState } from 'react';
import { Drawer, Popconfirm, message } from 'antd';

// icons
import {GiExitDoor} from 'react-icons/gi';

// API
import http from '../../../api/http'

// Link
import Link from 'next/link' 
  const Sidebar = ({showDrawer, onClose, visible}) => {

    const logOut = () => {
      http.http().logout((data) => {
        console.log("data");
      })
    }
  
  const confirm =(e) => {
    logOut(e)
    message.success('تایید شد');
  }
  
  const cancel =(event) => {
    message.error('کنسل شد');
  }

  return (
    <>
    <Drawer
      title="دانامانا"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
    >
      <div className="">
        <div className="px-2 text-2xl md:text-4xl text-center mb-10 py-2 md:py-4 text-primary">
            <Link href="/user/profile" >پروفیال</Link>
        </div>
      </div>
      <div className="h-3/6 md:h-auto overflow-y-scroll">
        <div className="py-10 border-t">
          <div className="px-2 text-xl text-center mb-10 py-2 md:py-3 shadow-md rounded-md bg-white opacity-60">
            <Link href="/user/lists/exchanges" >لیست تعویض ها</Link>
          </div>
          <div className="px-2 text-xl text-center  mb-10 py-2 md:py-3 shadow-md rounded-md bg-white opacity-60">
            <Link href="/user/lists/consulatnts" >لیست مشاوره ها</Link>
          </div>
          <div className="px-2 text-xl text-center  mb-10 py-2 md:py-3 shadow-md rounded-md bg-white opacity-60">
            <Link href="/user/lists/orders" >لیست سفارشات ها</Link>
          </div>
          <div className="px-2 text-xl text-center  mb-10 py-2 md:py-3 shadow-md rounded-md bg-white opacity-60">
            <Link href="/user/lists/resells" >لیست فروش ها</Link>
          </div>
          <div className="px-2 text-xl text-center  mb-10 py-2 md:py-3 shadow-md rounded-md bg-white opacity-60">
            <Link href="/user/lists/introductions" >لیست معرفی ها</Link>
          </div>
        </div>
      </div>
      <div 
        className="
          
          bottom-20 
          left-0 
          right-0
          mx-auto
          items-center 
          text-xl 
          md:text-3xl
          justify-center 
          ">
        <Popconfirm
          title="آیا برای خروج از حساب اطمینان دارید؟"
          onConfirm={confirm}
          onCancel={cancel}
          okText="بله"
          cancelText="خیر"
        >
          <button className="
            px-2 
            mb-10
            py-3
            md:py-5 
            shadow-md 
            rounded-md 
            bg-primary 
            flex 
            w-3/6 
            mx-auto
            items-center 
            text-3xl 
            justify-center 
          ">
            <GiExitDoor /><span className="px-2"> خروج </span>
          </button>
        </Popconfirm>
      </div>
    </Drawer>
    </>
  );
}

export default Sidebar
