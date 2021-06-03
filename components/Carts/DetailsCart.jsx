import React from 'react'
import Skeleton from 'react-loading-skeleton';

export default function DetailsCart({data}) {
  console.log(data, "DetailsCart data");
  return (
    <div
      className="my-4 text-center text-2xl">
        {
          data &&
          data.map((data, index) => {
            console.log(data, "map data");
            return (
              <div key={index} className="text-right text-3xl">
                <h4 className="text-3xl font-semibold">{data.name || <Skeleton />}</h4>
                <p
                  dangerouslySetInnerHTML={{__html: data.description || <Skeleton />}}
                  />              
                <div className="pt-10 font-semibold">
                  <p>پیشنهاد: با کتاب معمایی</p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
