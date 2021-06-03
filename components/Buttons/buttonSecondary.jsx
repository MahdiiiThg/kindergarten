import React, { useState, useEffect } from "react";
// Ant Design
import { Button } from 'antd';
import { IconContext } from "react-icons";

export default function ButtonSecondary(props) {
  const btnTextColor = "w-100 py-1 rounded-md text-white";
  const btnTextColorOutline = "w-100 py-2 rounded-md";
  const [isTouch, setIsTouch] = useState(false);
  const classes = `
      ${props.outline ? btnTextColorOutline : btnTextColor}
      bg-${props.color}
      ${props.border ? border : "border-0"}
      fs-3
      fs-${props.fontSize} cursor-pointer
    `;

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      setIsTouch(true);
    }
  });

  return (
    <Button
      onClick={isTouch ? "void(0)" : props.onClick}
      onTouchEnd={props.onClick}
      type={props.type}
      className={props.className + " " + classes}
      disabled={props.disabled ? props.disabled : false}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-center justify-content-center py-2">
        {props.loading ? (
          <div className="spinner-border text-light ml-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        {props.icon && (
          <div className="pl-2">{props.icon ? props.icon : ""}</div>
        )}
        <p>{`${props.text}`}</p>
      </div>
    </Button>
  );
}