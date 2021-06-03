import React , {useEffect, useState} from "react";
import { useRouter } from 'next/router'

// API
let http = require('../../../api/http')
// components
import Layout from '../../../components/Layouts/LayoutMain'
import UploadForm from "../../../components/Form/UploadForm"

// Antd
import { message } from "antd";

function ConsultantPage() {

  const router = useRouter()
  const {
    query: { id },
  } = router

  const [pageData, setPageData] = useState(null)
  const [inputs, setInputs] = useState({})
  const [pageId, setPageId] = useState(null)
  const [addImage, setAddImage] = useState([
    "/assets/img/babybos.png",
  ]);
  const [images, setImages] = useState({});

  useEffect(() => {
      getPageData()
      console.log('called data ');
  },[])

  const data = {
    id: id
  }

  const initialInputs = () => {
    let formData = new FormData();
    formData.append("page_id", "609b96881fc23446cc56fcf2");
    formData.append("id", data.id);
    formData.append("description", inputs.description);
    formData.append("title", inputs.title);
    formData.append("name", "consultantPage");
    return formData;
  };

  const getPageData = () => {
    http.http().getSingleConsultant(({data}) => {
      setPageData(data)
      console.log('getSingleConsultant',data);
    }, data)
  }
  console.log("pageData",pageData);

  const updateConsultant = () => {
    let formData = initialInputs()
    
    if(inputs && inputs.title && inputs.description) {
      
      http.http().updateSingleConsultant(({data}) => {
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
        title="مشاوره"
        addImage={addImage}
        changeImage={changeImage}
        onChange={changeValues}
        onClick={updateConsultant}
        inputs={inputs}
        imgUrl={pageData?.galleries && pageData.galleries[0].image_url}
      />
    </div>
  )
}

export default Layout(ConsultantPage)
