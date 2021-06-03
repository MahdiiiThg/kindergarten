import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// api
import http from '../../api/http'

// components
import Layout from '../../components/Layouts/LayoutMain.jsx'
import CartRow from '../../components/Carts/CartRow'

// ant
import { Col, Empty, Row } from 'antd'


function IntroductionPage() {
  const router = useRouter()
  const {
    query: { id },
  } = router

  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    getPageData()
  },[])

  const data = {
    id: id
  }


  const getPageData = () => {
    http.http().getSingleIntroduction(({data}) => {
      setPageData(data.data.introductions)
    }, data)
  }

  console.log("pageData", pageData);
  
  return (
    <div className="mb-10 md:mb-20 h-full">
      <Row justify="center gap-4 px-5 py-20" >
      { 
        pageData ? pageData.map((data, index) => {
          return <CartRow ke={index} data={data} />
        })
        :
        <Empty description="متاستفانه اطالاعاتی موجود نمیباشد" />
      }
      </Row>
    </div>
  )
}

export default Layout(IntroductionPage)
