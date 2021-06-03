import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// API
let http = require('../../../api/http')

// components
// components
import Layout from '../../../components/Layouts/LayoutMain'
import UploadForm from "../../../components/Form/UploadForm"
import Slider from "../components/Slider/Slider"
import DetailsCart from '../../../components/Carts/DetailsCart'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function introduction() {

  const router = useRouter()
  const {
    query: { id },
  } = router
  
  console.log(router, id, "router.query");
  const [pageData, setPageData] = useState({})

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

  const [detailsCard, setDetailsCard] = useState([
    {
      title: 'جزئیات ',
      desc: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ',
      gallery:['/assets/img/default.jpg', '/assets/img/docter_flint.png']},
  ])
  const  responsive={
    0:{
        items:1
    },
    600:{
        items:1
    },
    900:{
        items:2.5
    },
    1000:{
        items:4.3
    },
  }
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
                  src={'http://danamana-back.herokuapp.com/public/storage/introductions/placeholder10-6226a0d0-b301-11eb-82b0-db351296ded7.png'} 
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
          <PrimaryButton bg="green-100" rounded=" rounded-full" text="اطلاعات تماس"/>
        </div>
      </div>
    </div>
  )
}

export default Layout(introduction)
