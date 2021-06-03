import {useState} from 'react'
import { useSpring, animated } from 'react-spring'

import {Row , Col} from 'antd'

import Link from 'next/link'
import React from 'react'

export default function CategoryCol({data}) {
  console.log("Category:", data)

  const [flip, set] = useState(false)
  const props = useSpring({
    to: { transform: `translate3d(0,0%,0)` },
    from: { transform: `translate3d(0,80%,0)` },
    reset: false,
    reverse: flip,
    loop: false,
    delay: 1200,
    // config: config.molasses,
    onRest: () => set(flip),
  })


  return (
    <div className="grid grid-cols-3 grid-gap-sm justify-center">
      {
        data && 
        data.map((data, index) => {
          return (
            <animated.div
              style={props}
              id={data._id}
              key={index}
              xs={7}
              sm={7}
              onClick={() => localStorage.setItem("id", data._id)}
              className={`
                cursor-pointer
                ${data.color ? data.color : `bg-white` }
                text-2xl
                flex
                items-center
                justify-center
                py-6
                px-1
                shadow-xxs
                rounded-2xl
                text-center
              `}
              >
              <Link id={data.link} 
                href={{
                  pathname:`/shahr/pages`,
                  query: { id: data._id }
                }}
              >
                <div style={props} className="flex flex-col justify-center">
                  <span className="text-5xl block self-center">
                    {/* <img style={{height: '80px', width:"80px"}} src={data.icon} alt={data.title}/> */}
                  </span>
                  <p>{data.title}</p>
                </div>
              </Link>
            </animated.div>
          )
        })
      }
    </div>
  )
}
