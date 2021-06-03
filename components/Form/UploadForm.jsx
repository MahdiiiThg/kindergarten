import React, {useState} from 'react'

// icons
import {AiOutlinePlusCircle} from 'react-icons/ai'

// componenets
import PrimaryButton from '../Buttons/PrimaryButton'
import PrimaryTitle from '../Typography/PrimaryTitle'

export default function UploadForm(props) {
 
  return (
    <div 
      className="bkg dir-r text-2xl p-4 relative h-full pb-20 sm:pb-40 md:pb-52 lg:pb-64"
      style={{
        background: `url(${ props.imgUrl ? `${props.imgUrl}` : '/assets/img/dreamy-soft-clouds.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-width">
        <PrimaryTitle title={props.title}/>
        <form className="mt-16" >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex content-center items-center text-center">
                <label
                  className="shadow rounded-lg p-1 mb-3 relative bg-white"
                  htmlFor="uploadImage"
                  >
                  <img 
                    style={{height: '125px', width: '125px'}} 
                    src={props.addImage} />
                  </label>
                <input
                  required
                  style={{display: 'none'}}
                  id="uploadImage"
                  name='upload'
                  type="file"
                  onChange={props.changeImage} />
              </div>
              <div className="text-3xl text-center" >آپلود عکس</div>
            </div>
            <img className="page-image" src="/assets/img/babybos.png" alt=""/>
          </div>
          <textarea
            required
            style={{resize: 'none', height: '160px'}}
            name="description"
            onChange={props.onChange}
            value={props?.inputs?.description}
            className="details p-3 w-full rounded-2xl border border-black border-opacity-60"
            placeholder="جزئیات"></textarea>
          <input
            onChange={props.onChange}
            value={props?.inputs?.title}
            type="text"
            name="title"
            placeholder="پیشنهاد"
            required
            className="
              details
              px-3
              py-5
              w-full
              rounded-2xl
              border
              border-black
              border-opacity-60"
          />
            <div className="text-center w-full my-6">
              <PrimaryButton
                onClick={props.onClick}
                type="submit"
                bg="green-100"
                type="submit"
                text="ثبت درخواست "
              />
            </div>
        </form>
      </div>
    </div>
  )
}
