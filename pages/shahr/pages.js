import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
// API
import http from '../../api/http'
// components
import Layout from '../../components/Layouts/LayoutMain.jsx'
import DetailsCard from '../../components/Carts/DetailsCart'
import Slider from "../components/Slider/Slider"
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import Title from "../../components/Typography/Title";

import Skeleton from 'react-loading-skeleton'
import ModalAddress from "../../components/Shared/Modal";

import {Empty} from 'antd'

const Pages = () => {

  const router = useRouter()
  const {
    query: { id },
  } = router

  // states
  const [isModalVisibleMap, setIsModalVisibleMap] = useState(false);
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    if(id) {
      GetSinglePage()
    }

    console.log('called')
  },[id])

  const data = {
    id: id
  }

  const GetSinglePage = () => {
    http.http().getSingleMainPage(({data}) => {
      setPageData(data.data)
    }, data)
  }

  // Modal Address Map
  const showModalMap = () => {
    setIsModalVisibleMap(true);
  };

  const handleOkMap = () => {
    setIsModalVisibleMap(false);
  };

  const  responsive={
    0:{
        items:1.5
    },
    600:{
        items:2
    },
    900:{
        items:2.5
    },
    1000:{
        items:2.5
    },
  }

  return (
    <>
      <div
        className="bg-no-repeat bg-cover text-2xl p-4 relative overflow-hidden bkg"
        style={{
          background: `url(${pageData?.mainPage?.galleries[0].image_url})`,
          }}
      >
        <div className="max-width">
          <div className="max-width">
            <div className="text-center">
              <Title title={pageData && pageData.mainPage.title || <Skeleton />} />
            </div>
            {
              pageData ?
                <Slider margin={50} responsive={responsive} >
                  {
                    Object.entries(pageData).map((pages, index) => {
                      console.log("hihihih", pages);
                      return (
                        <Link  
                          key={index}
                          id={pages[1]._id} 
                          href={{
                            pathname: `/shahr/${pages[0]}`,
                            query: { id: pages[1]._id }
                          }}>
                          <div className="text-center">
                            <img style={{height: '220px'}} key={index} src={pages[1].galleries[0].image_url} alt="image"/>
                            <div className="p-8">
                            <div className="pt-10">
                                <PrimaryButton opacity="opacity-30" bg="offset" rounded="rounded-sm" text={pages[1].title}/>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })
                  }
                </Slider>
              :
              <Empty description="متاستفانه اطالاعاتی موجود نمیباشد" />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout(Pages)
