import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes . Our mission is to satisfy your cravings and elevate your during experience , one delicious meal at a time </p>
      <div className='explore-menu-list'>
       {
         menu_list.map((items , index)=>{
            return (
                <div key={index} className='explore-menu-list-item'>
                    <img src={items.menu_image} alt="" />
                    <p>{items.menu_name}</p>
                </div>
            )
         })
       }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
