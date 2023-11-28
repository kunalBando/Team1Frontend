import React from 'react'
import MyFeatures from './MyFeatures'
import Header from './Header'
 
export default function MyFeature() {
  return (
    <>
    <Header></Header>
    <div className='h5'>MyFeatures</div>
 
    <div>
        <div className="table-container">
          <MyFeatures></MyFeatures>
         
        </div>
      </div>
 
    </>
  )
}