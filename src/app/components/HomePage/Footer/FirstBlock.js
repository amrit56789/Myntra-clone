import React from 'react'

export default function FirstBlock() {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase p-1 mb-4"> online shopping</h3>
      <ol
        className=" font-light 
          text-xs p-1"
      >
        <li className='my-1 text-sm font-normal text-slate-500'>Men</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Women</li>
        <li className='my-1 text-sm font-normal text-slate-500'>kids</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Home & Living</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Beauty</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Gift Cards</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Myntra Insider</li>
      </ol>
      <h3 className="text-xs uppercase py-4 font-bold p-1">useful links</h3>
      <ol className="text-xs font-light p-1">
        <li className='my-1 text-sm font-normal text-slate-500'>Blog</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Careers</li>
        <li className='my-1 text-sm font-normal text-slate-500'>site Map</li>
        <li className='my-1 text-sm font-normal text-slate-500'>Whitehat</li>
      </ol>
    </div>
  )
}
