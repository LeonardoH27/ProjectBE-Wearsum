import React from 'react'
import Hero from "../Components/Hero/hero"
import Emphasis from '../Components/Emphasis/emphasis'
import Promotions from '../Components/Promotions/promotions'
import Newcollection from '../Components/Newcollection/newcollection'
import Updatenews from '../Components/Updatenews/updatenews'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Emphasis/>
        <Promotions/>
        <Newcollection/>
        <Updatenews/>
    </div>
  )
}

export default Shop