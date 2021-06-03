import React from 'react'

// Header
import Header from './Includes/Header'
// Footer
import Footer from './Includes/Footer'
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseComponenet = (Slot) => {
  class LayoutMain extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div className="h-screen overflow-hidden">
          <Header />
          <div className="relative h-full overflow-y-auto pb-40">
            <Slot />
          </div>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )
    }
  }
  return LayoutMain
}

export default BaseComponenet
