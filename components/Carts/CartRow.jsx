import React from 'react'
import Skeleton from 'react-loading-skeleton';

// ant
import { Col } from 'antd'

// next 
import Link from 'next/link'

export default function CartRow({data}) {
  return (
    <Link 
      href={{
        pathname: `/shahr/introduction`,
        query: { id: data.page_id }
      }}
      >
      <Col
        sm={24}
        md={12}
        lg={12}
        className=" 
          cursor-pointer
          mx-0 
          md:mx-5
          mb-2
          shadow-md
          gutter-row
          border
          border-black
          border-opacity-60
          rounded-2xl
        "> 
        <div className="flex justify-between text-right p-3">
          <img className="image-card" src={data.galleries[0].image_url} alt="default.jpg"/>
          <div className="pl-3 text-2xl text-yellow-200">
            <h4 className="text-4xl pb-3 text-yellow-200">{data.name || <Skeleton />}</h4>
            <p 
              className="pt-5"
              dangerouslySetInnerHTML={{__html: data.description || <Skeleton />}} 
            />
          </div>
        </div>
      </Col>
    </Link>

  )
}
