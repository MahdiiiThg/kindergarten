import React from 'react'

export default function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`
        text-4xl
        outline-none
        py-5
        px-8
        w-full
        text-${props.color? props.color : 'white'}
        bg-${props.bg ? props.bg : 'purple-300'}
        ${props.rounded? props.rounded : 'rounded'}
        ${props.opacity? props.opacity : 'opacity-100'}
        ${props.border? 'border border-black border-opacity-50' : 'border-0'}
      `}
    >
      {props.text}
    </button>
  )
}
