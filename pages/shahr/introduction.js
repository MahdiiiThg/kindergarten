import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// API
import Http from '../../api/http'

// components
import Layout from '../../components/Layouts/LayoutMain.jsx'
import Slider from "../components/Slider/Slider"
import DetailsCart from '../../components/Carts/DetailsCart'
import PrimaryButton from '../../components/Buttons/PrimaryButton'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// antd
import { Modal, Button } from 'antd';
import ModalAddress from "../../components/Shared/Modal";


function introduction() {

  const router = useRouter()
  const {
    query: { id },
  } = router
  
  console.log(router, id, "router.query");
  const [pageData, setPageData] = useState({})
  const [addImage, setAddImage] = useState([
    "/assets/icon/social.png",
  ]);
  
  useEffect(() => {
    getPageData()
  },[])

  const data = {
    id: id
  }


  const getPageData = () => {
    if(id) {
      http.http().getSingleIntroduction(({data}) => {
        setPageData(data)
      }, data)
    }
  }

  console.log("pageData", pageData);

  const responsive={
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

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="mb-10 md:mb-20 h-full">
      {
        pageData &&
        pageData.data &&
        pageData.data.introductions.map((data, index) => {
          return <Slider responsive={responsive} >
            {
              data.galleries.map((image, index) => {
                return <img 
                  style={{height: '280px', width: '100%'}}
                  key={index} 
                  src={'Http://danamana-back.herokuapp.com/public/storage/introductions/placeholder10-6226a0d0-b301-11eb-82b0-db351296ded7.png'} 
                  alt={image.name}
                  />
              })
            }
          </Slider>
        })
      }
      
      <div className="p-8">
        <DetailsCart data={pageData && pageData.data && pageData.data.introductions}/>
        <div className="pt-10">
          <PrimaryButton onClick={showModal} bg="green-100" rounded=" rounded-full" text="اطلاعات تماس"/>
        </div>
      </div>
      <ModalAddress 
        pageData={pageData}
        visible={isModalVisible}
        onClick={handleOk}
      />
    </div>
  )
}

export default Layout(introduction)
