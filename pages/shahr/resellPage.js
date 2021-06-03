import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// api
import http from '../../api/http'

// components
import Layout from '../../components/Layouts/LayoutMain.jsx'
import UploadForm from '../../components/Form/UploadForm'

// Antd
import { message } from "antd";

function ResellPage() {

  const router = useRouter()
  const {
    query: { id },
  } = router

  const [pageData, setPageData] = useState({})
  const [inputs, setInputs] = useState({})
  const [addImage, setAddImage] = useState([
    "/assets/icon/social.png",
  ]);

  useEffect(() => {
    getPageData()
  },[])

  const data = {
    id: id
  }

  const initialInputs = () => {
    let formData = new FormData();
    formData.append("page_id", "609b96881fc23446cc56fcf2");
    formData.append("description", inputs.description);
    formData.append("title", inputs.title);
    formData.append("name", "consultantPage");
    return formData;
  };

  const getPageData = () => {
    http.http().getSingleMainPage(({data}) => {
      setPageData(data.data.consultantPage)
      
    }, data)
  }
  console.log("pageData",pageData.galleries && pageData.galleries[0].image_url);

  const addNewConsultant = () => {
    let formData = initialInputs()
    
    if(inputs && inputs.title && inputs.description) {
      
      http.http().addNewResell(({data}) => {
        message.success(data.message)
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
        title="فروش"
        addImage={addImage}
        changeImage={changeImage}
        onChange={changeValues}
        onClick={addNewConsultant}
        inputs={inputs}
        imgUrl={pageData.galleries && pageData.galleries[0].image_url}
      />
    </div>
  )
}

export default Layout(ResellPage)
