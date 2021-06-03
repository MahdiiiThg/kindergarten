import React, {useState} from 'react'

// Ant Desing
import { PageHeader } from 'antd';

// React icons
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar';

// Redux
import store from "../../../store/store";
import { useDispatch } from "react-redux";
import { activeSlider, deActiveSlider } from "../../../store/actions/slider";

export default function Header(props) {
  const dispatch = useDispatch();

  const [showSlider, setShowSlider] = useState(
    store.getState().slider.showSlider
  );

  const sidebarShow = () => {
    
    if (!showSlider) {
      dispatch(activeSlider());
      setShowSlider(store.getState().slider.showSlider);
      return;
    }
    dispatch(deActiveSlider());
    setShowSlider(store.getState().slider.showSlider);
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
      setVisible(true);
  };
  const onClose = () => {
      setVisible(false);
  };

  console.log('showSlider', showSlider);

  return (
    <div
        className="
          flex
          items-center
          justify-between
          p-4
          shadow-md	
          site-page-header
          fs-x5
          rounded-b-3xl
          border-bottom-blue
          text-primary
        ">
        <div>
          <img className="nav-icons " src="/assets/icon/search.png" alt="search icon"/>
        </div>
        <div>
          <div >{props.title || 'دانامانا'}</div>
        </div>
        <div className="flex items-center">
          <img onClick={() => sidebarShow()} className="nav-icons" src="/assets/icon/hamburger.png" alt="hamburger menu"/>
        </div>
        <Sidebar visible={showSlider} onClose={sidebarShow} />
    </div>
  )
}
