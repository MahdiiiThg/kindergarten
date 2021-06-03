import React from 'react'

import { Input } from 'antd';

export default function InputText(props) {
  return (
    <Input
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      name={props.name}
      required
      bordered
      max={props.max}
      min={props.min}
      placeholder={props.placeholder}
      className={`
        py-2
        rounded-md
        text-black
        my-8
        block
        input_defult
        text-right
        `}
      />
  )
}
