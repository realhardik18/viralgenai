import React from 'react'
import Link from 'next/link'

function Card({title,description,link}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">
        {title}        
        </h2>
        <p>{description}</p>
        <div className='flex justify-center'>
          <Link href={"/tools"+link}>
            <button className="btn btn-accent w-80">use</button>
          </Link>
        </div>
        <div className="card-actions justify-end">                
        </div>
    </div>
    </div>    
  )
}

export default Card