import React from 'react'

export default function PrimaryTitle(props) {
  return (
    <h3 
      className={`
        text-5xl
        absolute
        top-10
        right-5
        text-${props.color ? props.color : 'purple-300'}
      `}>
        {props.title || 'بدون عنوان'}
      </h3>
  )
}
