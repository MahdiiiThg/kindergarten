import React , {useState} from "react";

// components
import Layout from '../components/Layouts/LayoutMain.jsx'
import CategoryCol from '../components/Categories/CategoryCol'
import Slider from "../components/Slider/Slider"
import Bear from "../components/bear/Bear.jsx"

function HomeSecondary() {
  const [data, setCard] = useState([
    {title: 'متن پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: ' پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن پیشنها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متا ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن پیها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن نها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
    {title: 'متن نها ', desc: ' متن پیشنهادیمتن پیشنهادیمتن پیشنهادی'},
  ])

  return (
      <div
        className="bg-no-repeat bg-cover text-2xl p-4 relative overflow-hidden bkg"
        style={{
          background: 'url(/assets/img/christmas-winter.jpg)',
          }}
      >
      <div className="max-width">
        {/* <Bear />
        <div className="relative text-center">
          <img className="mx-auto red-title" src="/assets/img/redtitle.png" alt="redtitle"/>
          <div className="absolute top-14 md:top-28 lg:top-16 left-0 right-0 font-semibold">
            <Slider items={1} >
              {
                data.map((data, index) => {
                  return <p key={index}>رو سرمایه های خود سرمایه گذاری کنید</p>
                })
              }
            </Slider>
          </div>
        </div>
        <div className="mb-52">
            <Slider items={1} >
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

export default Layout(HomeSecondary)
