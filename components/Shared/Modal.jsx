import React from "react";

import { Modal } from "antd";

// import dynamic
import dynamic from "next/dynamic";

export default function ModalAddress(props) {
  console.log('props', props);
  // console.log(props);
  // const LeafletMap = dynamic(() => import("../create-ad/LeafletMap"), {
  //   ssr: false,
  // });

  let position = [0, 0];
  if (props.job?.data?.longitude && props.job?.data?.latitude)
    position = [props.job.data.longitude, props.job.data.latitude];

  return (
    <Modal
      title={props.call ? "شماره تماس" : "آدرس"}
      visible={props.visible}
      footer={null}
      closable={false}
    >
      {/* {props.map && (
        <div className="my-3">
          <LeafletMap position={position} />
        </div>
      )} */}
      <button
        onClick={props.onClick}
        className="
        border-info
        text-info
        bg-white
        rounded-pill
        px-3"
      >
        بستن
      </button>
    </Modal>
  );
}
