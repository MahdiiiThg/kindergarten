import React from 'react'

// antd
import { Popconfirm } from 'antd';

// icons
import {BsTrash} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'

// Link
import Link from 'next/link' 


const LinkCards = ({data, confirm, cancel, pathname, onClick}) => {
  return (
    <div
      id={data._id}
      className="
        flex
        justify-between
        items-center
        box-content
        shadow-md
        rounded-md
        p-5
        my-2
        text-right 
        cursor-pointer
      ">
      <div className="flex items-center">
        <Popconfirm
            title="آیا از حذف این کارت اطمینان دارید؟"
            onConfirm={confirm}
            onCancel={cancel}
            okText="بله"
            cancelText="خیر"
          >
            <button
              onClick={onClick}
              className="
                btn 
                ant-btn-danger 
                px-3 
                py-2 
                rounded-md 
                shadow-md 
                flex 
                items-center
              ">
              <BsTrash /> 
              حذف
            </button>
          </Popconfirm>
          <div className="flex items-center px-4">
            <Link 
              id={data.page_id} 
              href={{
                pathname: `/shahr/edit/${pathname}`,
                query: { id: data.page_id }
              }}
            >
              <div className="flex items-center">
                <span className="px-2">ویرایش</span><span><BiEdit /></span>
              </div>
            </Link>
          </div>
      </div>
      <div>
        <h3>{data.title || <Skeleton count={1}/>}</h3>
        <p>{data.title || <Skeleton count={3}/>}</p>
      </div>
    </div>
  )
}

export default LinkCards
