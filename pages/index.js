import React , {useEffect, useState} from "react";
import Skeleton from 'react-loading-skeleton';

// components
import Layout from '../components/Layouts/LayoutMain.jsx'
import CategoryCol from '../components/Categories/CategoryCol'

// api
import http from '../api/http'


function Home(props) {

  const [mainPage, setMainPage] = useState(null)

  useEffect(() => {
    getAllMainPage()
  },[])

  const getAllMainPage = () => {
    http.http().getAllMainPage(({data}) => {
      console.log("getAllMainPage RESPONSE: ", data);
      setMainPage(data)
    })
  }

  console.log('mainPage', mainPage)
  return (
      <div
        className="bg-no-repeat bg-cover text-2xl p-4 relative overflow-hidden bkg"
        style={{
          background: 'url(/assets/img/colorfull.jpg)',
          }}
      >
      {/* <Bear /> */}
      <div className="max-width">
        <div className="pt-24">
          { mainPage ? 
            <CategoryCol data={mainPage.data}/>
            :
            <Skeleton count={5} />
          }
        </div>
        {/* <div className="relative text-center">
          <img className="mx-auto red-title" src="/assets/img/redtitle.png" alt="redtitle"/>
          <div className="absolute top-14 md:top-28 lg:top-16 left-0 right-0 font-semibold">
            <Slider autoplayTimeout={3500} items={1} >
              {
                data.map((data, index) => {
                  return <p key={index}>رو سرمایه های خود سرمایه گذاری کنید</p>
                })
              }
            </Slider>
          </div>
        </div>
        <div className="mb-52">
          <Slider autoplayTimeout={4300} items={1} >
              {
                data.map((data, index) => {
                  return <img key={index} className="mx-auto" src="/assets/img/cover.png" alt=""/>
                })
              }
            </Slider>
        </div> */}
      </div>
    </div>
  )
}

export default Layout(Home)
