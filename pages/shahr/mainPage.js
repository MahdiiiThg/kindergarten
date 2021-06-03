import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// API
import http from '../../api/http'

// components
import Layout from '../../components/Layouts/LayoutMain.jsx'
import Slider from '../../components/Slider/Slider'
import DetailsCart from '../../components/Carts/DetailsCart'
import PrimaryButton from '../../components/Buttons/PrimaryButton'

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function mainPage() {

  return (
    <div>
      <h2>mainPage</h2>
    </div>
  )
}

export default Layout(mainPage)
