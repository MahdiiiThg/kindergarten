import React, {useState, useEffect} from 'react'

// antd
import { message } from 'antd';

// API
import http from '../../../api/http'

// sekeleton
import Skeleton from 'react-loading-skeleton'

// componentst
import LinkCards from '../../../components/Shared/LinkCards'
import Layout from '../../../components/Layouts/LayoutMain.jsx'

const AllIntro = () => {

  const [allExchange, setAllExchange] = useState(null)

  useEffect(() => {
    getAllIntroduction()
  },[])

  const confirm =(e) => {
    deletExchange(e)
    message.success('تایید شده');
  }
  
  const cancel =(event) => {
    message.error('کنسل شد');
  }

  const getAllIntroduction = () => {
    http.http().getAllIntroduction(({data}) => {
      setAllExchange(data)
      console.log('data', data);
    })
  }


  const deletExchange = (id) => {
    http.http().deleteExchange(({data}) => {
      console.log("deleteExchange RESPONSE: ", data);
    }, id)
  }

  return (
    <div className="text-right py-10 px-10 md:px-20">
      <h4>لیست تعویضی ها</h4>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        { 
          allExchange ?
          allExchange.data.map((data, index) => {
            return (
              <LinkCards
                pathname='consultant-page'
                data={data} 
                key={index}
                confirm={event => confirm(data?._id)} cancel={cancel} />
            )
          }) : <div className="w-full"><Skeleton count={5}/></div>
        }
      </div>
    </div>
  )
}

export default Layout(AllIntro)
