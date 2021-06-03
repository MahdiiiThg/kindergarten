import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// api
let http = require('../../../api/http')

// components
import Layout from '../../../components/Layouts/LayoutMain'
import UploadForm from "../../../components/Form/UploadForm"

// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ExchangePage() {

  const router = useRouter()
  const {
    query: { id },
  } = router

  const [pageData, setPageData] = useState({})
  const [inputs, setInputs] = useState({})
  const [addImage, setAddImage] = useState([
    "/assets/img/babybos.png",
  ]);

  useEffect(() => {
    getPageData()
  },[])

  const data = {
    id: id
  }

  const initialInputs = () => {
    let formData = new FormData();
    formData.append("page_id", id);
    formData.append("description", inputs.description);
    formData.append("title", inputs.title);
    formData.append("name", "consultantPage");
    return formData;
  };
  
  const getPageData = () => {
    http.http().getSingleExchange(({data}) => {
      setPageData(data)      
    }, id)
  }

  const addNewConsultant = async () => {
    let formData = initialInputs()
    
    if(inputs && inputs.title && inputs.description) {
      
      await http.http().newExchange(({data}) => {
        console.log("data", data);
      }, formData)
      
      return
    }
    message.error("لطفا فیلد های مربوطه را پرکنید")
  }

  // change Event
  const changeValues = (event) => {
    // change service global state
    let name = event.target.name;
    let value = event.target.value

    return setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  // changeImage
  const changeImage = (event) => {
    event.persist();

    // setImages(event.target.files[0]);
    console.log('event.target.files[0]', event.target.files[0]);
    let reader = new FileReader();
    reader.onload = function () {
      setAddImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <UploadForm 
        addImage={addImage}
        changeImage={changeImage}
        title="تعویض لوازم ورزشی"
        onChange={changeValues} 
        onClick={addNewConsultant} />
    </div>
  )
}

export default Layout(ExchangePage)
